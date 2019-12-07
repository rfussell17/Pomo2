
let canvas;
let canvasContext;
let background;
let snakeHeadX = 80;
let speedX = 5;
let snakeHeadY = 80;
let speedY = 5;
let stop = 0;


window.onload = function(){
  setInterval(draw, 5);
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext('2d');

  let fps = 20;
  setInterval(function(){
    draw();
  }, 1000/fps);

  function keydown(e) {
    if(e.keyCode==39){
      snakeHeadX = snakeHeadX + 3;
    }
    if(e.keyCode==37){
      snakeHeadX = snakeHeadX - 3;
    }
    if(e.keyCode==40){
      snakeHeadY = snakeHeadY + 3;
    }
    if(e.keyCode==38){
      snakeHeadY = snakeHeadY - 3;
    }
  }
  window.addEventListener("keydown", keydown);
}


/*
function move(){
  snakeHeadX = snakeHeadX + speedX;
  snakeHeadY = snakeHeadY + speedY;
  bodyX = bodyX + speedX;
  bodyY = bodyY + speedY;

  if(snakeHeadX < 0){
    speedX = -speedX;
  }
  if(snakeHeadX > 850){
    speedX = -speedX;
  }
  if(snakeHeadY < 0){
    speedY = -speedY;
  }
  if(snakeHeadY > canvas.height){
    speedY = -speedY;
  }
  if(bodyX < 0){
    speedX = -speedX;
  }
  if(bodyX > 850){
    speedX = -speedX;
  }
  if(bodyY < 0){
    speedY = -speedY;
  }
  if(bodyY > canvas.height){
    speedY = -speedY;
  }
}
*/

function draw(){
  //background canvas
  colorHead(0,0,canvas.width,canvas.height,'green');
  //head of snake
  colorHead(snakeHeadX,snakeHeadY,30,50,'yellow');
  //colorBody(bodyX, bodyY, 10, 'red')
}

function colorBody(centerX, centerY, radius, drawColor){
  canvasContext.fillStyle = drawColor;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius, 0,Math.PI*2, true);
  canvasContext.fill();
}

function colorHead(leftX,topY, width,height, drawColor){
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect(leftX,topY, width,height)
}