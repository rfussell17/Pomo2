(function() {

  const DEBUG = true;

  const CANVAS = document.getElementById("gameCanvas");
  const CONTEXT = CANVAS.getContext("2d");

  

  let body = 20;
  let snake = [{x:400,y:400},
               {x:390,y:400},
               {x:380,y:400},
               {x:370,y:400},
               {x:360,y:400}];

  let i = 0;

  let food = {x:400,y:300};

  let speed = {x:0,y:0};

  let stop = 0;
  let fps = 120;

  let newScore = document.getElementById("newScore");
  let highScore = document.getElementById("highScore");

  window.onload = function() {
    document.addEventListener("keydown", keys);
    setInterval(move, 1000/ fps);
  };

  function move() {
    snake[i].x += speed.x;
    snake[i].y += speed.y;
    draw();
  }

  function keys(e) {
    switch (e.keyCode) {
      case 37:
        console.log("left");
        speed.x--;
        speed.y = 0;
        break;
      case 38:
        console.log("up");
        speed.x = 0;
        speed.y--;
        break;
      case 39:
        console.log("right");
        speed.x++;
        speed.y = 0;
        break;
      case 40:
        console.log("down");
        speed.x = 0;
        speed.y++
        break;
    }
  }

  function checkWalls(){
    //checks if top or bottom wall is hit
    if(snake[i].x + speed.x > CANVAS.width-body ||
      snake[i].x + speed.x < 0){
      speed.x = stop;
    }
    //checks if side walls are hit
    if (snake[i].y + speed.y > CANVAS.height-body ||
      snake[i].y + speed.y < 0) {
      speed.y = stop;
    }


    //hopefully checks if snake hits apple, not tested
    if(snake[i].y + speed.y == food.y ||
       snake[i].y + speed.y == food.x){
      newScore++;
      highScore++;
    }
    //hopefully checks if snake hits apple, not tested
    if(snake[i].x + speed.x == food.x ||
       snake[i].x + speed.x == food.y){
      newScore++;
      highScore++;
    }
  }




  function draw() {
    //background canvas
    colorIn(0, 0, CANVAS.width, CANVAS.height, "green");

    //apple
    colorIn(food.x, food.y, body/2, body/2, "red"); 

    //head of snake
    colorIn(snake[i].x, snake[i].y, body, body, "yellow");
    checkWalls();
  }

  function colorIn(leftX, topY, width, height, color) {
    CONTEXT.fillStyle = color;
    CONTEXT.fillRect(leftX, topY, width, height);
  }
})();
