#!/usr/bin/env python3
"""Extract reviewable dimensional facts from manufacturer DXF board drawings.

Requires ezdxf and shapely. This tool never assigns electrical functions to
circles or decorative vectors: a reviewer supplies the pin map and crop/view.
Coordinates in its result are centered millimeters with Y down, as consumed by
modules-source-board.js. Source layer names and file hashes remain traceable.
"""
import argparse
from collections import Counter
import hashlib
import json
import math
from pathlib import Path
import ezdxf
from ezdxf import path as dxfpath
from shapely.geometry import LineString, Polygon
from shapely import set_precision
from shapely.ops import polygonize, unary_union


def entities(space, depth=0):
    for entity in space:
        if entity.dxftype()=='INSERT' and depth<6:
            yield from entities(entity.virtual_entities(),depth+1)
        elif entity.dxftype() not in ['DIMENSION','LEADER','MLEADER','HATCH','IMAGE','VIEWPORT']:
            yield entity


def extract_geometry(filename, expected_size=None, bounds=None, outline_layer=None, unit_scale=None, endpoint_grid=0):
    if unit_scale is not None and (not math.isfinite(unit_scale) or unit_scale <= 0):
        raise ValueError('unit_scale must be a positive finite millimeter conversion.')
    if expected_size is not None and (len(expected_size) != 2 or
            not all(math.isfinite(v) and v > 0 for v in expected_size)):
        raise ValueError('expected_size must contain two positive finite millimeter dimensions.')
    if bounds is not None and (len(bounds) != 4 or not all(math.isfinite(v) for v in bounds) or
            bounds[0] >= bounds[2] or bounds[1] >= bounds[3]):
        raise ValueError('bounds must contain four finite millimeter coordinates with x1 > x0 and y1 > y0.')
    if not math.isfinite(endpoint_grid) or endpoint_grid < 0:
        raise ValueError('endpoint_grid must be zero or a positive finite millimeter value.')
    filename=Path(filename);doc=ezdxf.readfile(filename);source=list(entities(doc.modelspace()))
    units=doc.header.get('$INSUNITS',0)
    if unit_scale is None:
        if units==4:unit_scale=1
        elif units==1:unit_scale=25.4
        else:raise ValueError(f'DXF INSUNITS={units}; confirm the source dimensions and supply unit_scale explicitly.')
    paths=[];circles=[];texts=[];warnings=[]
    for e in source:
        kind=e.dxftype();layer=e.dxf.layer
        if kind in ['TEXT','MTEXT']:
            value=e.dxf.text if kind=='TEXT' else e.plain_text()
            texts.append({'text':value,'x':e.dxf.insert.x*unit_scale,'y':e.dxf.insert.y*unit_scale,'layer':layer})
            continue
        if kind=='CIRCLE':
            circles.append({'x':e.dxf.center.x*unit_scale,'y':e.dxf.center.y*unit_scale,'radius':e.dxf.radius*unit_scale,'layer':layer})
        try:
            p=dxfpath.make_path(e);vertices=[(v.x*unit_scale,v.y*unit_scale)for v in p.flattening(.01/max(unit_scale,1e-8))]
        except (TypeError,ValueError,AttributeError,NotImplementedError):
            continue
        if len(vertices)<2 or len(set(vertices))<2:continue
        if math.dist(vertices[0],vertices[-1])<1e-4:vertices[-1]=vertices[0]
        paths.append({'layer':layer,'kind':kind,'points':vertices,'closed':vertices[0]==vertices[-1]})
    candidates=[]
    for p in paths:
        if p['closed'] and len(p['points'])>=4 and len(set(p['points']))>=3 and (outline_layer is None or p['layer']==outline_layer):
            poly=Polygon(p['points'])
            if poly.is_valid and poly.area>.1:candidates.append((poly,p['layer']))
    for layer in {p['layer'] for p in paths}:
        if outline_layer is not None and layer!=outline_layer:continue
        linework=[LineString(p['points'])for p in paths if p['layer']==layer and p['kind'] in ['LINE','ARC','LWPOLYLINE','POLYLINE','SPLINE','ELLIPSE']]
        if linework:
            if endpoint_grid:
                linework=[set_precision(line,endpoint_grid)for line in linework]
            candidates.extend((p,layer)for p in polygonize(unary_union(linework)) if p.area>.1)
    if endpoint_grid:warnings.append(f'Outline linework quantized to a reviewed {endpoint_grid} mm grid to join source endpoint gaps; circle/contact facts remain unmodified.')
    def matching(poly):
        if expected_size is None:return True
        a,b,c,d=poly.bounds;w,h=c-a,d-b
        return abs(w-expected_size[0])<.35 and abs(h-expected_size[1])<.35
    matches=[(p,l)for p,l in candidates if matching(p)]
    if bounds is None:
        if not matches:raise ValueError('No closed outline matches the documented board dimensions; supply reviewed source bounds/layer.')
        matches.sort(key=lambda v:v[0].area,reverse=True);poly,chosen_layer=matches[0];bounds=list(poly.bounds)
        if len(matches)>1 and any(math.dist(p.centroid.coords[0],poly.centroid.coords[0])>1 for p,l in matches[1:]):warnings.append('Multiple dimension-matched views exist; explicitly review the selected crop and side.')
    else:
        bounds=list(bounds);poly=next((p for p,l in matches if all(abs(a-b)<.35 for a,b in zip(p.bounds,bounds))),Polygon([(bounds[0],bounds[1]),(bounds[2],bounds[1]),(bounds[2],bounds[3]),(bounds[0],bounds[3])]))
        chosen_layer=outline_layer
    x0,y0,x1,y1=bounds;cx,cy=(x0+x1)/2,(y0+y1)/2
    point=lambda x,y:[round(x-cx,6),round(cy-y,6)]
    outline='M'+'L'.join(' '.join(str(v)for v in point(x,y))for x,y in poly.exterior.coords)+'Z'
    unique={}
    for c in circles:
        if not(x0-.2<=c['x']<=x1+.2 and y0-.2<=c['y']<=y1+.2):continue
        key=(round(c['x'],4),round(c['y'],4),round(c['radius'],4))
        if key in unique:unique[key]['layers'].append(c['layer'])
        else:
            x,y=point(c['x'],c['y']);unique[key]={'x':x,'y':y,'radius':round(c['radius'],6),'layers':[c['layer']],'sourceCenter':[c['x'],c['y']]}
    contour_boxes=[]
    for p,l in candidates:
        a,b,c,d=p.bounds
        if x0<=a<c<=x1 and y0<=b<d<=y1 and .05<p.area<poly.area*.85:
            x,y=point((a+c)/2,(b+d)/2);contour_boxes.append({'x':x,'y':y,'width':round(c-a,6),'height':round(d-b,6),'layer':l,'area':round(p.area,6)})
    text_result=[]
    for t in texts:
        if x0-3<=t['x']<=x1+3 and y0-3<=t['y']<=y1+3:
            x,y=point(t['x'],t['y']);text_result.append({**t,'x':x,'y':y})
    return {'source':{'file':filename.name,'sha256':hashlib.sha256(filename.read_bytes()).hexdigest(),'dxfVersion':doc.dxfversion,'unitsHeader':units,'millimetersPerUnit':unit_scale,'bounds':bounds,'outlineLayer':chosen_layer,'outlineEndpointGridMm':endpoint_grid,'curveFlatteningErrorMm':.01},
            'board':{'width':round(x1-x0,6),'height':round(y1-y0,6),'outline':outline},
            'circles':sorted(unique.values(),key=lambda c:(c['y'],c['x'],c['radius'])),'closedShapeBounds':contour_boxes,'texts':text_result,
            'entityInventory':dict(Counter(e.dxftype()+':'+e.dxf.layer for e in source)),'warnings':warnings,
            'scope':'Geometry facts only. Circle diameter may denote a drill, copper or mask aperture; verify the source layer. Electrical names/types and connector numbering require the exact manufacturer pinout and board view.'}


if __name__=='__main__':
    p=argparse.ArgumentParser(description=__doc__);p.add_argument('file');p.add_argument('--size',help='Documented width,height in millimeters.');p.add_argument('--bounds',help='Reviewed x0,y0,x1,y1 crop in millimeters after unit conversion.');p.add_argument('--layer');p.add_argument('--unit-scale',type=float);p.add_argument('--endpoint-grid',type=float,default=0,help='Explicit reviewed millimeter grid for joining tiny outline endpoint gaps.');p.add_argument('--output',required=True);a=p.parse_args()
    data=extract_geometry(a.file,[float(v)for v in a.size.split(',')]if a.size else None,[float(v)for v in a.bounds.split(',')]if a.bounds else None,a.layer,a.unit_scale,a.endpoint_grid)
    Path(a.output).write_text(json.dumps(data,indent=2)+'\n');print(json.dumps({'board':[data['board']['width'],data['board']['height']],'circles':len(data['circles']),'warnings':data['warnings']}))
