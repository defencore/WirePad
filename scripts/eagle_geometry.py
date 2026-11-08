"""Pure EAGLE coordinate transforms, contour tracing and curved-edge bounds."""
import math
import re
from collections import defaultdict


def num(e, key, default=0):
    return float(e.get(key, default))


def rounded(value):
    return round(value, 6)


def transform(e, x, y):
    rotation = e.get('rot', 'R0')
    angle = math.radians(float(re.sub(r'[^0-9.+-]', '', rotation) or 0))
    # EAGLE mirror transforms the rotated local X coordinate, not its input X.
    rx, ry = x * math.cos(angle) - y * math.sin(angle), x * math.sin(angle) + y * math.cos(angle)
    return num(e, 'x') + (-rx if 'M' in rotation else rx), num(e, 'y') + ry


def wire_bounds(wires):
    points = []
    for x1, y1, x2, y2, curve in wires:
        if not all(math.isfinite(value) for value in [x1, y1, x2, y2, curve]):
            raise ValueError('Outline coordinates and arc sweeps must be finite.')
        points.extend([(x1, y1), (x2, y2)])
        if abs(curve) < 1e-7:
            continue
        chord = math.hypot(x2 - x1, y2 - y1)
        if chord < 1e-7 or not -360 < curve < 360:
            raise ValueError('A curved outline needs distinct endpoints and a sweep below 360 degrees.')
        sweep = math.radians(curve)
        offset = chord / (2 * math.tan(sweep / 2))
        cx = (x1 + x2) / 2 - (y2 - y1) * offset / chord
        cy = (y1 + y2) / 2 + (x2 - x1) * offset / chord
        radius = math.hypot(x1 - cx, y1 - cy)
        start = math.atan2(y1 - cy, x1 - cx)
        for angle in [0, math.pi / 2, math.pi, math.pi * 1.5]:
            travel = ((angle - start) if sweep > 0 else (start - angle)) % (2 * math.pi)
            if travel <= abs(sweep) + 1e-9:
                points.append((cx + radius * math.cos(angle), cy + radius * math.sin(angle)))
    if not points:
        raise ValueError('No outline edges were supplied.')
    return [min(x for x, _ in points), min(y for _, y in points),
            max(x for x, _ in points), max(y for _, y in points)]


def outline_groups(wires):
    unique={}
    for wire in wires:
        a=(round(wire[0],5),round(wire[1],5));b=(round(wire[2],5),round(wire[3],5))
        key=(*a,*b,round(wire[4],5)) if a<b else (*b,*a,round(-wire[4],5))
        unique[key]=wire
    wires=list(unique.values())
    # Vendor panel/outline packages sometimes repeat or subdivide straight edges.
    # Merge collinear axis-aligned intervals before tracing the physical contour.
    axis=defaultdict(list);other=[]
    for wire in wires:
        if abs(wire[4])<1e-7 and abs(wire[0]-wire[2])<1e-5:axis[('v',round(wire[0],5))].append(sorted([wire[1],wire[3]]))
        elif abs(wire[4])<1e-7 and abs(wire[1]-wire[3])<1e-5:axis[('h',round(wire[1],5))].append(sorted([wire[0],wire[2]]))
        else:other.append(wire)
    for (direction,c),intervals in axis.items():
        merged=[]
        for a,b in sorted(intervals):
            if merged and a<=merged[-1][1]+1e-5:merged[-1][1]=max(b,merged[-1][1])
            else:merged.append([a,b])
        other.extend([[c,a,c,b,0] if direction=='v' else [a,c,b,c,0] for a,b in merged])
    wires=other
    endpoints = defaultdict(list)
    for i, w in enumerate(wires):
        for x, y in [(w[0], w[1]), (w[2], w[3])]:
            endpoints[(round(x, 4), round(y, 4))].append(i)
    unseen = set(range(len(wires)))
    groups = []
    while unseen:
        stack = [unseen.pop()]
        ids = []
        while stack:
            i = stack.pop()
            ids.append(i)
            w = wires[i]
            for x, y in [(w[0], w[1]), (w[2], w[3])]:
                for j in endpoints[(round(x, 4), round(y, 4))]:
                    if j in unseen:
                        unseen.remove(j)
                        stack.append(j)
        groups.append([wires[i] for i in ids])
    return groups


def wire_path(wires, point):
    if not wires:
        return ''
    remaining = list(wires)
    first = remaining.pop(0)
    start = (first[0], first[1])
    current = start
    commands = []
    wire = first
    while True:
        if not commands:
            x, y = point(*current)
            commands.append(f'M{rounded(x)} {rounded(y)}')
        x2, y2 = wire[2:4]
        x, y = point(x2, y2)
        curve = wire[4]
        if abs(curve) > 1e-7:
            radius = math.hypot(x2 - current[0], y2 - current[1]) / (2 * math.sin(math.radians(abs(curve)) / 2))
            commands.append(f'A{rounded(radius)} {rounded(radius)} 0 {int(abs(curve)>180)} {int(curve<0)} {rounded(x)} {rounded(y)}')
        else:
            commands.append(f'L{rounded(x)} {rounded(y)}')
        current = (x2, y2)
        match = next((i for i,w in enumerate(remaining) if math.hypot(w[0]-x2,w[1]-y2)<1e-4 or math.hypot(w[2]-x2,w[3]-y2)<1e-4), None)
        if match is None:
            break
        wire = remaining.pop(match)
        if math.hypot(wire[0]-x2,wire[1]-y2)>=1e-4:
            wire = [wire[2],wire[3],wire[0],wire[1],-wire[4]]
    if math.hypot(current[0]-start[0],current[1]-start[1])<1e-4:
        commands.append('Z')
    if remaining:
        return ''
    return ''.join(commands)
