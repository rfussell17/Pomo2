
(function(){

const CANVAS = document.getElementById("gameCanvas");
const context = CANVAS.getContext("2d");

const scale = 25;
const row = CANVAS.height / scale;
const column = CANVAS.width / scale;

let snakeX = 400;
let snakeY = 280;

let foodX = 10;
let foodY = 10;

let speedX = 0;
let speedY = 0;

let stop = 0;
let fps = 30;

window.onload = function() {
  document.addEventListener('keydown', keys);
  setInterval(move, 1000/fps);
}

function move(){
  snakeX+=speedX;
  snakeY+=speedY
  draw();
  if(snakeX == CANVAS.width){
    snakeX = stop;
  }
  if(snakeY == CANVAS.height){
    snakeY = stop;
  }
}

function keys(e) {
  switch(e.keyCode){
    case 37:
      console.log("left")
      speedX= -6 ;
      speedY= 0;
      break;
    case 38:
      console.log("up")
      speedX= 0;
      speedY= -6;
      break;
    case 39:
      console.log("right")
      speedX= 6;
      speedY= 0;
      break;
    case 40:
      console.log("down")
      speedX= 0;
      speedY= 6;
      break;
  }
}



function draw() {
  //background canvas
  colorIn(0, 0, CANVAS.width, CANVAS.height, "green");
  //head of snake
  colorIn(snakeX, snakeY, scale, scale, "yellow");

 //apple
  colorIn(foodX, foodY, 10, 10, "red");
}

function colorIn(leftX, topY, width, height, color) {
  context.fillStyle = color;
  context.fillRect(leftX, topY, width, height);
}




})();
