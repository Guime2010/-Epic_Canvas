var mouseX=0
var mouseY=0
var mouse=" ";
var color="red"
var largura=10;
var canvas=document.getElementById("meucanva");
var ctx=canvas.getContext("2d")

canvas.addEventListener("mousedown",myMouseDown) 

function myMouseDown(e){
    color=document.getElementById("cololida").value;
    largura=document.getElementById("tamanilho").value;
     mouse="mouseDown"  
}
canvas.addEventListener("mousemove",myMousemove)
function myMousemove(e){
mouseX=e.clientX-canvas.offsetLeft;
mouseY=e.clientY-canvas.offsetTop;
if(mouse=="mouseDown"){
    ctx.beginPath()
    ctx.strokeStyle=color;
    ctx.lineWidth=largura;
    ctx.moveTo(lastX,lastY)
    ctx.lineTo(mouseX,mouseY)
    ctx.stroke()
}
lastX=mouseX
lastY=mouseY
}
canvas.addEventListener("mouseup",myMouseup)
function myMouseup(e){
 mouse="mouseup" 
}
canvas.addEventListener("mouseleave",myMouseleave)
function myMouseleave(e){
 mouse="Mouseleave"   
}
function limpar(){
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}