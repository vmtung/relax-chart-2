function Line(x1, y1, x2, y2, w = 2, color = 'black') {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="pivot" style="stroke:${color};stroke-width:${w}" />`
}

function Point(x, y) {
  return `<circle cx="${x}" cy="${y}" r="3" class="pivot" stroke="black" stroke-width="0" fill="black" />`
}

function AVGPoint(x, y) {
  return `<circle cx="${x}" cy="${y}" r="5" class="pivot" stroke="black" stroke-width="0" fill="red" />`
}

function CircleLabel(x, y, txt) {
  return `<circle cx="${x}" cy="${y}" r="15" class="pivot" stroke="black" stroke-width="0" fill="black" />
<text x="${x}" y="${y}" class="pivot text" fill="white" dominant-baseline="middle" text-anchor="middle" font-size="12px" font-family="Arial">${txt}</text>`
}

function Circle(x, y, r, w, color = 'black') {
  return `<circle cx="${x}" cy="${y}" r="${r}" class="pivot"
stroke="${color}" stroke-width="${w}" fill="white" />`
}

function ColumnName(r, angle, txt, size = 11, groupPositionAdjustment = false) {
  let lines = txt.split('_')
  let inside = ''
  for (let i = 0; i < lines.length; i++) {
    inside += `<tspan x="0" dy="${size * 1.25 * i}">${lines[i]}</tspan>`
  }

  deg = (angle * 180) / Math.PI
  return `<g class="rotator" transform="rotate(${deg})">
    <text x="${0}" y="${
    -r - (groupPositionAdjustment && lines.length > 1 ? 10 : 0)
  }" class="pivot" fill="black" dominant-baseline="middle" text-anchor="middle" font-size="${size}px" font-family="Arial" alignment-baseline="central">
        ${inside}
    </text>
</g>`
}

function ColumnName_v2(r, angle, txt, size = 11) {
  uuid = 'uuid' + parseInt(Math.random() * 100000000)
  deg = ((angle - Math.PI / 2) * 180) / Math.PI

  path = `<path id="${uuid}" fill="transparent" class="rotator" transform="rotate(${deg})"
  d="
    M ${600 - r}, ${600}
    a ${r},${r} 0 1,1 ${2 * r},0
    a ${r},${r} 0 1,1 ${-2 * r},0
  "
/>
`
  return `${path}
    <text width="500" >
        <textPath alignment-baseline="top" xlink:href="#${uuid}" class="pivot" fill="white" dominant-baseline="middle" startOffset="50%" text-anchor="middle" font-size="${size}px" font-family="Arial" letter-spacing="15px">
            ${txt}
        </textPath>
    </text>`
}

function CircleSegment(x, y, r, w, angel, angelOffset, color = 'black') {
  let c = r * 2 * Math.PI
  let strokeC = angel * r
  let remainC = c - strokeC
  return `<g class="rotator" transform="rotate(${
    (angelOffset * 180) / Math.PI - 90
  })">
    <circle class="pivot" cx="${x}" cy="${y}" r="${r}" stroke="${color}" stroke-width="${w}" stroke-dasharray="${strokeC} ${remainC}" fill="transparent" />
</g>`
}
