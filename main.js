
let canvas;
let canvasContext;

window.onload = function(){
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext('2d');

  canvasContext.fillStyle = 'yellow';
  canvasContext.fillRect(100,200,50,50);

}