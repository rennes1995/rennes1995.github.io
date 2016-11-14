
var svg = d3.selectAll("svg");
var c1 = svg.append('circle');
var c2 = svg.append('circle');
var c3 = svg.append('circle');
var p = svg.append('polygon');
var r1 = svg.append('rect');
var r2 = svg.append('rect');

c1.attr('cx',500).attr('cy',500).attr('r',300).attr('stroke','black').attr('stroke-width',3).attr('fill','#ffffff');
c2.attr('cx',400).attr('cy',400).attr('r',40).attr('stroke','black').attr('stroke-width',3).attr('fill','#ffffff');
c3.attr('cx',600).attr('cy',400).attr('r',40).attr('stroke','black').attr('stroke-width',3).attr('fill','#ffffff');
p.attr('points','500,500 400,600 600,600').attr('fill','lime').attr('stroke-width',1).attr('stroke','purple');
r1.attr('x',100).attr('y',190).attr('width',800).attr('height',10).attr('fill','rgb(0,0,255)').attr('stroke-width',3).attr('stroke','rgb(0,0,0)');
r2.attr('x',250).attr('y',0).attr('width',500).attr('height',189).attr('fill','#ffffff').attr('stroke-width',1).attr('stroke','pink');

function yellowcap(){
    r2.attr('x',250).attr('y',0).attr('width',500).attr('height',189).attr('fill','yellow').attr('stroke-width',1).attr('stroke','pink');

}
function redcap(){
    r2.attr('x',250).attr('y',0).attr('width',500).attr('height',189).attr('fill','red').attr('stroke-width',1).attr('stroke','pink');

}
function pinkcap(){
    r2.attr('x',250).attr('y',0).attr('width',500).attr('height',189).attr('fill','pink').attr('stroke-width',1).attr('stroke','pink');

}
function bluecap(){
    r2.attr('x',250).attr('y',0).attr('width',500).attr('height',189).attr('fill','blue').attr('stroke-width',1).attr('stroke','pink');

}
