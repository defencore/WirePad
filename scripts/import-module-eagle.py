#!/usr/bin/env python3
"""Extract factual board geometry and connector nets from manufacturer EAGLE XML.

The result is a review draft. Explicit overrides take precedence over schematic
electrical directions; unresolved contacts are reported, never guessed as GPIO.
Automatic connector selection is incomplete for custom package names. Review
every omitted package against the matching board photos and schematic, including
service pads, battery holders, sockets and electrical shield contacts.
Decorative text, logos and copper artwork are not copied. Source licensing and
revision evidence must be supplied by the calling catalog audit.
"""
import argparse
import hashlib
import json
import re
from collections import defaultdict
from pathlib import Path
from xml.etree import ElementTree as ET
from eagle_geometry import num, rounded, transform, outline_groups, wire_path, wire_bounds

def schematic_nets(filename, board_elements):
    if not filename or not Path(filename).exists():
        return {}, {}
    schematic = ET.parse(filename).getroot().find('drawing/schematic')
    if schematic is None:
        return {}, {}
    libraries = {l.get('name'): l for l in schematic.findall('libraries/library')}
    parts = {p.get('name'): p for p in schematic.findall('parts/part')}
    pin_defs = {}
    for name, part in parts.items():
        if name not in board_elements:
            continue
        library = libraries.get(part.get('library'))
        if library is None:
            continue
        deviceset = next((d for d in library.findall('devicesets/deviceset') if d.get('name') == part.get('deviceset')), None)
        if deviceset is None:
            continue
        for gate in deviceset.findall('gates/gate'):
            symbol = next((s for s in library.findall('symbols/symbol') if s.get('name') == gate.get('symbol')), None)
            if symbol is not None:
                for pin in symbol.findall('pin'):
                    pin_defs[(name, gate.get('name'), pin.get('name'))] = pin.get('direction', 'io')
    evidence = defaultdict(list)
    for net in schematic.findall('sheets/sheet/nets/net'):
        for pin in net.findall('segment/pinref'):
            key = (pin.get('part'), pin.get('gate'), pin.get('pin'))
            if key in pin_defs:
                evidence[net.get('name')].append({'part': key[0], 'pin': key[2], 'direction': pin_defs[key]})
    return dict(evidence), parts



def convert(board_file, metadata, connectors=None, bounds=None, overrides=None):
    board_file = Path(board_file)
    board = ET.parse(board_file).getroot().find('drawing/board')
    if board is None:
        raise ValueError('Not an EAGLE XML board.')
    overrides = overrides or {}
    warnings = []
    packages = {(l.get('name'),p.get('name')):p for l in board.findall('libraries/library') for p in l.findall('packages/package')}
    elements = {e.get('name'):e for e in board.findall('elements/element')}
    nets = {(c.get('element'),c.get('pad')):s.get('name') for s in board.findall('signals/signal') for c in s.findall('contactref')}
    evidence, parts = schematic_nets(board_file.with_suffix('.sch'), elements)
    if connectors is None:
        connectors = []
        for name,e in elements.items():
            package = e.get('package','').upper()
            has_contacts = bool(packages[e.get('library'),e.get('package')].findall('pad') or packages[e.get('library'),e.get('package')].findall('smd'))
            header = re.search(r'JST|HEADER|CONN|TERMINAL|SCREW|GROVE|USB|HDMI|RJ45|AUDIO|U\.FL|UFL|FFC|FPC|PINHD|FEATHERWING|RASPBERRY|ARDUINO_SHIELD',package)
            if re.match(r'^(?:JP|J\d|P\d|CN|CON|SV|X\d)',name) and re.search(r'(?:^|[_-])[12]X\d{1,2}(?:$|[_-])',package):header=True
            if re.match(r'^(?:IC\d|Y\d|OSC\d|C\d|R\d|Q\d|D\d)',name):header=False
            testpoint = bool(re.match(r'^(?:TP\d|SWD$|SWC$)',name))
            if has_contacts and (header or testpoint):
                connectors.append(name)
    if not connectors:
        raise ValueError('No external connectors selected.')
    unknown = set(connectors)-set(elements)
    if unknown:
        raise ValueError(f'Unknown connector references: {sorted(unknown)}')
    outlines = [[num(w,'x1'),num(w,'y1'),num(w,'x2'),num(w,'y2'),num(w,'curve')] for w in board.findall('plain/wire') if w.get('layer')=='20']
    for e in elements.values():
        for w in packages[e.get('library'),e.get('package')].findall('wire'):
            if w.get('layer')=='20':
                a=transform(e,num(w,'x1'),num(w,'y1'));b=transform(e,num(w,'x2'),num(w,'y2'))
                outlines.append([*a,*b,num(w,'curve')*(-1 if 'M' in e.get('rot','') else 1)])
    if bounds is None:
        circles = [c for c in board.findall('plain/circle') if c.get('layer')=='20']
        groups = outline_groups(outlines)
        centers=[(num(elements[name],'x'),num(elements[name],'y')) for name in connectors]
        choices=[]
        for group in groups:
            box=wire_bounds(group)
            if box[2]-box[0]<.5 or box[3]-box[1]<.5:
                continue
            inside=sum(box[0]-1<=x<=box[2]+1 and box[1]-1<=y<=box[3]+1 for x,y in centers)
            choices.append((inside,(box[2]-box[0])*(box[3]-box[1]),box,group))
        for c in circles:
            x,y,r=num(c,'x'),num(c,'y'),num(c,'radius');box=[x-r,y-r,x+r,y+r]
            inside=sum(box[0]-1<=px<=box[2]+1 and box[1]-1<=py<=box[3]+1 for px,py in centers)
            choices.append((inside,4*r*r,box,[]))
        if not choices:
            raise ValueError('No source board outline; explicit bounds required.')
        choices.sort(key=lambda v:(v[0],v[1]),reverse=True)
        score,_,bounds,outline=choices[0]
        if score<len(centers):
            warnings.append('Some selected connector centers lie outside the chosen board contour; review panel/test-fixture bounds.')
    else:
        outline=[w for w in outlines if bounds[0]-.1<=w[0]<=bounds[2]+.1 and bounds[1]-.1<=w[1]<=bounds[3]+.1 and bounds[0]-.1<=w[2]<=bounds[2]+.1 and bounds[1]-.1<=w[3]<=bounds[3]+.1]
    x0,y0,x1,y1=bounds;cx,cy=(x0+x1)/2,(y0+y1)/2
    point=lambda x,y:(rounded(x-cx),rounded(cy-y))
    outline_d=wire_path(outline,point)
    if not outline:
        outer=next((c for c in board.findall('plain/circle') if c.get('layer')=='20' and abs(num(c,'x')-cx)<1e-4 and abs(num(c,'y')-cy)<1e-4 and abs(num(c,'radius')*2-(x1-x0))<1e-4),None)
        if outer is not None:
            r=rounded(num(outer,'radius'));outline_d=f'M{-r} 0A{r} {r} 0 1 0 {r} 0A{r} {r} 0 1 0 {-r} 0Z'
    elif not outline_d.endswith('Z'):
        warnings.append('Dimension contour is not closed; supply an independently reviewed board outline.');outline_d=''
    contacts=[];pin_evidence=[]
    rules={p.get('name'):p.get('value') for p in board.findall('designrules/param')}
    def length(value,default):
        if not value:return default
        return float(re.sub(r'[^0-9.+-]','',value))*(.0254 if 'mil' in value else 1)
    for ref in connectors:
        e=elements[ref];package=packages[e.get('library'),e.get('package')]
        pads=package.findall('pad')+package.findall('smd')
        for p in pads:
            name=p.get('name');number=ref+'.'+name
            if re.match(r'^(?:MT|NC[12]$|MP|SHIELD|SH[0-9])',name,re.I) and not nets.get((ref,name)):
                continue
            px,py=transform(e,num(p,'x'),num(p,'y'))
            if not (x0-1<=px<=x1+1 and y0-1<=py<=y1+1):
                warnings.append(f'{number}: contact outside selected board; excluded.');continue
            net=nets.get((ref,name));pe=[v for v in evidence.get(net,[]) if v['part'] not in connectors]
            pin_evidence.append({'number':number,'net':net,'connectedPins':pe,'package':e.get('package'),'sourceLayer':p.get('layer','through-hole')})
            label=net or 'NC';directions={v['direction'] for v in pe}
            if not net:typ='no_connect';description='Not connected in this exact manufacturer schematic.'
            elif re.search(r'^(?:GND|AGND|DGND|PGND|VSS|GROUND)(?:$|[@_])',net,re.I):typ='power_in';description='Common ground / supply return in the manufacturer schematic.'
            elif re.match(r'^(?:\+?(?:VCC|VDD|VDDA|VDDIO|VIN|VBAT|VBATT|VBUS|VSYS|VOUT|VREG)|\+?\d+(?:[.V]\d+)?V?)(?:$|[_@])',net,re.I) and not re.search(r'(?:^|[_@])(?:EN|ENABLE)(?:$|[_@])',net,re.I):
                typ='power_out' if 'sup' in directions or any(v['direction']=='out' and re.match(r'^(?:OUT|VOUT|REGOUT|VREG)',v['pin'],re.I) for v in pe) else 'power_in'
                description='Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: '+typ+'.'
            elif 'io' in directions:typ='bidirectional';description='Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits.'
            elif 'oc' in directions:typ='open_collector';description='Open-collector/open-drain schematic output; follow the source pull-up and voltage requirements.'
            elif 'out' in directions or 'hiz' in directions:typ='tri_state' if 'hiz' in directions else 'output';description='Signal driven by the onboard circuit according to the manufacturer schematic.'
            elif 'sup' in directions:typ='power_out';description='Supply generated by an onboard source in the manufacturer schematic.'
            elif 'pwr' in directions:typ='unspecified';description='Source symbol marks this non-rail signal as power; verify its actual function independently.';warnings.append(f'{number}: non-rail {net} is marked pwr in the source symbol; independent role override required.')
            elif 'in' in directions:typ='input';description='Input to the onboard circuit according to the manufacturer schematic.'
            elif directions and directions<={'pas','nc'}:typ='passive';description='Passive circuit terminal; it is not an assumed digital GPIO.'
            else:typ='unspecified';description='Electrical role requires independent pinout review.';warnings.append(f'{number}: unresolved electrical role on {net}.')
            if net and re.match(r'^N\$\d+$',net):
                names={v['pin'] for v in pe if not re.fullmatch(r'\d+',v['pin'])}
                if len(names)==1:label=next(iter(names))
                else:warnings.append(f'{number}: autogenerated net {net} requires printed/function label review.')
            drill=num(p,'drill') if p.tag=='pad' else None
            if drill:
                ring=min(max(drill*float(rules.get('rvPadTop','.25')),length(rules.get('rlMinPadTop'),.254)),length(rules.get('rlMaxPadTop'),.508))
                diameter=num(p,'diameter',drill+ring*2);size=[diameter,diameter];shape='rect' if p.get('shape')=='square' else 'circle'
                if p.get('shape') in ['long','offset']:
                    size=[diameter*2,diameter];shape='oval'
                    if p.get('shape')=='offset':warnings.append(f'{number}: offset copper shape needs a native-land review.')
            else:size=[num(p,'dx'),num(p,'dy')];shape='rect'
            rotation=(float(re.sub(r'[^0-9.+-]','',e.get('rot','R0')) or 0)+float(re.sub(r'[^0-9.+-]','',p.get('rot','R0')) or 0))%180
            if abs(rotation-90)<1e-5:size=size[::-1]
            elif abs(rotation)>1e-5 and size[0]!=size[1]:warnings.append(f'{number}: non-orthogonal pad rotation needs an explicit native pattern.')
            contact={'id':re.sub(r'[^a-z0-9_-]','-',number.lower().replace('+','plus')),'number':number,'label':label,'type':typ,'description':description+f' CAD net: {net or "unconnected"}.','x':point(px,py)[0],'y':point(px,py)[1],'size':[rounded(v) for v in size],'shape':shape,'connector':ref,'back':p.tag=='smd' and (('M' in e.get('rot','')) != (p.get('layer')=='16'))}
            if drill:contact['drill']=drill
            else:contact['smd']=True
            contact.update(overrides.get(number,{}));contacts.append(contact)
    if not contacts:raise ValueError('Selected connectors contain no physical electrical contacts.')
    features=[];back_features=[]
    for ref,e in elements.items():
        package=packages[e.get('library'),e.get('package')]
        if not (package.findall('pad') or package.findall('smd')) or re.search(r'LOGO|OSHW|FIDUCIAL|TWIGLOGO|FRAME_A',e.get('package',''),re.I):continue
        center=(num(e,'x'),num(e,'y'))
        if not(x0<=center[0]<=x1 and y0<=center[1]<=y1):continue
        package_outline=[]
        for w in package.findall('wire'):
            if w.get('layer') in ['21','51']:
                a=transform(e,num(w,'x1'),num(w,'y1'));b=transform(e,num(w,'x2'),num(w,'y2'))
                package_outline.append([*a,*b,num(w,'curve')*(-1 if 'M' in e.get('rot','') else 1)])
        if not package_outline:continue
        bx0,by0,bx1,by1=wire_bounds(package_outline)
        w,h=bx1-bx0,by1-by0
        if w*h<.4 or w<.2 or h<.2 or w>x1-x0 or h>y1-y0:continue
        x,y=point(bx0,by1);fill='#b7a782' if ref.startswith(('R','C','L')) else '#242c30'
        if ref.startswith(('LED','D')):fill='#a7934e'
        if ref in connectors:
            fill='#deded0' if re.search(r'JST|GROVE|HW4|PH2|ZH|SH1',e.get('package',''),re.I) else '#aebcb6' if re.search(r'USB|HDMI|JACK|RJ45|U.FL',e.get('package',''),re.I) else '#293333'
        target=back_features if 'M' in e.get('rot','') else features
        target.append((w*h,f'<rect x="{x}" y="{y}" width="{rounded(w)}" height="{rounded(h)}" rx=".12" fill="{fill}" stroke="#8b9b8e" stroke-width=".08"/>',[x-.04,y-.04,rounded(x+w+.04),rounded(y+h+.04)]))
    holes=[]
    for h in board.findall('plain/hole'):
        if x0<=num(h,'x')<=x1 and y0<=num(h,'y')<=y1:
            x,y=point(num(h,'x'),num(h,'y'));holes.append({'x':x,'y':y,'drill':num(h,'drill')})
    for c in board.findall('plain/circle'):
        r=num(c,'radius')
        if c.get('layer')=='20' and x0<num(c,'x')-r and num(c,'x')+r<x1 and y0<num(c,'y')-r and num(c,'y')+r<y1:
            x,y=point(num(c,'x'),num(c,'y'));holes.append({'x':x,'y':y,'drill':r*2})
    for ref,e in elements.items():
        package=packages[e.get('library'),e.get('package')]
        mounting_pads=[p for p in package.findall('pad') if num(p,'drill')>0 and not nets.get((ref,p.get('name')))] if re.search(r'MOUNT|HOLE',e.get('package',''),re.I) and ref not in connectors else []
        for h in package.findall('hole')+mounting_pads:
            hx,hy=transform(e,num(h,'x'),num(h,'y'))
            if x0<=hx<=x1 and y0<=hy<=y1:
                x,y=point(hx,hy);holes.append({'x':x,'y':y,'drill':num(h,'drill')})
    spec=dict(metadata)
    def artwork(items):
        selected=sorted(items,reverse=True)[:70]
        if not selected:return '',None
        return ''.join(v for _,v,_ in selected),[min(b[0] for _,_,b in selected),min(b[1] for _,_,b in selected),max(b[2] for _,_,b in selected),max(b[3] for _,_,b in selected)]
    front,front_bounds=artwork(features);back,back_bounds=artwork(back_features)
    spec.update(board={'width':rounded(x1-x0),'height':rounded(y1-y0),'color':metadata.get('color','#246545'),'outline':outline_d},contacts=contacts,holes=holes,artwork=front,backArtwork=back,viewLabel='COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE')
    if front_bounds:spec['artworkBounds']=front_bounds
    if back_bounds:spec['backArtworkBounds']=back_bounds
    spec.setdefault('footprintMode','source')
    spec.setdefault('footprintNote','Source CAD electrical contact centers and reference copper. Mechanical retention and mounting hardware are not included; verify the fitted board revision and mating connector separately.')
    spec['provenance']={**spec.get('provenance',{}),'format':'EAGLE XML','boardFile':board_file.name,'boardSha256':hashlib.sha256(board_file.read_bytes()).hexdigest(),'sourceBounds':bounds,'selectedConnectors':connectors,'reviewWarnings':warnings}
    return {'spec':spec,'warnings':warnings,'pinEvidence':pin_evidence}


if __name__=='__main__':
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('board');parser.add_argument('--metadata',required=True);parser.add_argument('--output',required=True)
    parser.add_argument('--connectors',help='Comma-separated physical connector references.')
    parser.add_argument('--bounds',help='Source CAD x0,y0,x1,y1 crop, required for ambiguous panels.')
    parser.add_argument('--overrides',help='Reviewed contact overrides keyed by connector.pad.')
    args=parser.parse_args()
    result=convert(args.board,json.loads(Path(args.metadata).read_text()),args.connectors.split(',') if args.connectors else None,[float(v) for v in args.bounds.split(',')] if args.bounds else None,json.loads(Path(args.overrides).read_text()) if args.overrides else None)
    Path(args.output).write_text(json.dumps(result,indent=2)+'\n')
    print(json.dumps({'contacts':len(result['spec']['contacts']),'warnings':len(result['warnings']),'output':args.output}))
