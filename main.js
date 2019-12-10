(function() {

  const CANVAS = document.getElementById("gameCanvas");
  const CONTEXT = CANVAS.getContext("2d");

  let body = 20;
  let snakeX = 400;
  let snakeY = 280;

  let foodX = 100;
  let foodY = 100;

  let speedX = 0;
  let speedY = 0;

  let stop = 0;
  let fps = 120;

  let newScore = document.getElementById("newScore");
  let highScore = document.getElementById("highScore");

  window.onload = function() {
    document.addEventListener("keydown", keys);
    setInterval(move, 1000/ fps);
  };

  function move() {
    snakeX += speedX;
    snakeY += speedY;
    draw();
  }

  function keys(e) {
    switch (e.keyCode) {
      case 37:
        console.log("left");
        speedX--;
        speedY = 0;
        break;
      case 38:
        console.log("up");
        speedX = 0;
        speedY--;
        break;
      case 39:
        console.log("right");
        speedX++;
        speedY = 0;
        break;
      case 40:
        console.log("down");
        speedX = 0;
        speedY++
        break;
    }
  }

  function checkWalls(){
    //checks if top or bottom wall is hit
    if(snakeX + speedX > CANVAS.width-body ||
      snakeX + speedX < 0){
      speedX = stop;
    }
    //checks if side walls are hit
    if (snakeY + speedY > CANVAS.height-body ||
      snakeY + speedY < 0) {
      speedY = stop;
    }

    
    //hopefully checks if snake hits apple, not tested
    if(snakeY + speedY == foodY ||
       snakeY + speedY == foodX){
      newScore++;
      highScore++;
    }
    //hopefully checks if snake hits apple, not tested
    if(snakeX + speedX == foodX ||
       snakeX + speedX == foodY){
      newScore++;
      highScore++;
    }
  }




  function draw() {
    //background canvas
    colorIn(0, 0, CANVAS.width, CANVAS.height, "green");

    //apple
    colorIn(foodX, foodY, body/2, body/2, "red"); 

    //head of snake
    colorIn(snakeX, snakeY, body, body, "yellow");
    checkWalls();
  }

  function colorIn(leftX, topY, width, height, color) {
    CONTEXT.fillStyle = color;
    CONTEXT.fillRect(leftX, topY, width, height);
  }
})();
