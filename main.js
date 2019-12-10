(function() {
  const CANVAS = document.getElementById("gameCanvas");
  const context = CANVAS.getContext("2d");

  const body = 25;

  let snakeX = 400;
  let snakeY = 280;

  let foodX = 10;
  let foodY = 10;

  let speedX = 0;
  let speedY = 0;

  let stop = 0;
  let fps = 20;

  let apple = 500;
  let appleLocation = Math.floor(Math.random(apple));

  window.onload = function() {
    document.addEventListener("keydown", keys);
    setInterval(move, 1000 / fps);
  };

  function move() {
    snakeX += speedX;
    snakeY += speedY;
    draw();
    checkWalls();
  }

  function keys(e) {
    switch (e.keyCode) {
      case 37:
        console.log("left");
        speedX = -5;
        speedY = 0;
        break;
      case 38:
        console.log("up");
        speedX = 0;
        speedY = -5;
        break;
      case 39:
        console.log("right");
        speedX = 5;
        speedY = 0;
        break;
      case 40:
        console.log("down");
        speedX = 0;
        speedY = 5;
        break;
    }
  }

  function checkWalls(){
    if (snakeX == CANVAS.width) {
      snakeX = stop;
    }
    if (snakeY == CANVAS.height) {
      snakeY = stop;
    }
  }

  function appleFunc(){
    if(snakeX == appleLocation){
      snakeX.width = snakeX.width + body;
    }
    if(snakeY == appleLocation){
      snakeX.width = snakeX.width + body;
    }
  }



  function draw() {
    //background canvas
    colorIn(0, 0, CANVAS.width, CANVAS.height, "green");

    //apple
    colorIn(foodX, foodY, 15, 15, "red"); 

    //head of snake
    colorIn(snakeX, snakeY, body, body, "yellow");

    appleFunc();
  }

  function colorIn(leftX, topY, width, height, color) {
    context.fillStyle = color;
    context.fillRect(leftX, topY, width, height);
  }
})();
