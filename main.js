
let canvas;
let canvasContext;
let background;
let snakeHeadX = 80;
let speedX = 5;
let snakeHeadY = 80;
let speedY = 5;
let stop = 0;


window.onload = function(){
console.log("onload function")

  let fps = 20;
  
  setInterval(function(){
    draw();
    move();
  }, 1000/fps);

  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext('2d');

}



function move(){
  console.log("move function")
  function keydown(e) {
    console.log(" keydown function")
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


function draw(){
  //background canvas
  colorHead(0,0,canvas.width,canvas.height,'green');
  //head of snake
  colorHead(snakeHeadX,snakeHeadY,30,50,'yellow');
  //colorBody(bodyX, bodyY, 10, 'red')
  console.log("draw function")
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