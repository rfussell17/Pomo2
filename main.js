
let canvas;
let canvasContext;
let background;
let snakeHeadX = 0;
let speedX = 10;
let snakeHeadY = 0;
let speedY = 0;
let stop = 0;
let fps = 60;



window.onload = function(){
console.log("onload function")



  setInterval(function(){
    draw();
  }, 1000/fps);

  requestAnimationFrame(move);


  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext('2d');

}



function move(){
  console.log("move function")
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




function draw(){
  //background canvas
  colorHead(0,0,canvas.width,canvas.height,'green');
  //head of snake
  colorHead(snakeHeadX,snakeHeadY,30,30,'yellow');
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