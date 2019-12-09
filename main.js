
const CANVAS = document.getElementById("gameCanvas");
const context = CANVAS.getContext('2d');

const scale = 25;
const rows = CANVAS.height / scale;
const colums = CANVAS.width / scale;

let snakeHeadX = 0;
let snakeHeadY = 0;

let speedX = 10;
let speedY = 0;

let stop = 0;
let fps = 30;

let background;



window.onload = function(){
console.log("onload function")

  setInterval(function(){
    move();
    draw();
  }, 1000/fps);
}

function draw(){
  //background canvas
  colorHead(0,0,CANVAS.width,CANVAS.height,'green');
  //head of snake
  colorHead(snakeHeadX,snakeHeadY,scale,scale,'yellow');
  //colorBody(bodyX, bodyY, 10, 'red')
  console.log("draw function")
}

function move(){
  snakeHeadX = snakeHeadX + 3;
  if(snakeHeadX === 700){
    snakeHeadX = stop;
  }


  function keydown(e) {
    if(e.keyCode==39){
      snakeHeadX = snakeHeadX + 5;
      console.log("right")
    }
    if(e.keyCode==37){
      snakeHeadX = snakeHeadX - 5;
      console.log("left")
    }
    if(e.keyCode==40){
      snakeHeadY = snakeHeadY + 5;
      console.log("down")
    }
    if(e.keyCode==38){
      snakeHeadY = snakeHeadY - 5;
      console.log("up")
    }
  }
  window.addEventListener("keydown", keydown);
}


function colorBody(centerX, centerY, radius, drawColor){
  context.fillStyle = drawColor;
  context.beginPath();
  context.arc(centerX, centerY, radius, 0,Math.PI*2, true);
  context.fill();
}

function colorHead(leftX,topY, width,height, drawColor){
  context.fillStyle = drawColor;
  context.fillRect(leftX,topY, width,height)
}