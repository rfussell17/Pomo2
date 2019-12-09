const CANVAS = document.getElementById("gameCanvas");
const context = CANVAS.getContext("2d");

const scale = 25;
const rows = CANVAS.height / scale;
const columns = CANVAS.width / scale;

let snakeHeadX = scale * 1;
let snakeHeadY = 0;

let speedX = 0;
let speedY = 0;

let stop = 0;
let fps = 30;

let background;

window.onload = function() {
  console.log("onload function");

  setInterval(function() {
    move();
    draw();
  }, 250);
};

function draw() {
  //background canvas
  colorIn(0, 0, CANVAS.width, CANVAS.height, "green");
  //head of snake
  colorIn(snakeHeadX, snakeHeadY, scale, scale, "yellow");
}

function colorIn(leftX, topY, width, height, color) {
  context.fillStyle = color;
  context.fillRect(leftX, topY, width, height);
}

function move() {
  window.addEventListener("keydown", e => {
    snakeHeadX = speedX;
    snakeHeadY = speedY;

    if (e.keyCode == 39) {
      speedX = scale * 1;
      speedY = 0;
      console.log("right");
    }
    if (e.keyCode == 37) {
      speedX = -scale * 1;
      speedY = 0;
      console.log("left");
    }
    if (e.keyCode == 40) {
      speedX = 0;
      speedY = scale * 1;
      console.log("down");
    }
    if (e.keyCode == 38) {
      speedX = 0;
      speedY = -scale * 1;
      console.log("up");
    }
  });
}
