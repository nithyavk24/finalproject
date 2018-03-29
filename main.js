var svg = document.getElementById("mysvg");
var svgNS = svg.namespaceURI;

function drawLine(x,y,x1,y1){
var line = document.createElementNS(svgNS,'line');
line.setAttribute('x1',x);
line.setAttribute('y1',y);
line.setAttribute('x2',x1);
line.setAttribute('y2',y1);
line.setAttribute('stroke','black');
line.setAttribute('stroke-width','3px');
svg.appendChild(line);
}

//house
drawLine(100,133,100,252);
drawLine(221,252,98,252);
drawLine(219,133,219,252);
drawLine(163,83,240,149);
drawLine(165,83,83,149);

//chimney
drawLine(185,49,185,100);
drawLine(210,49,210,125);
drawLine(212,49,183,49);