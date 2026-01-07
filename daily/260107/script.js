let canvas, ctx;
let x = 200;
let y = 300;
let dx = -1;
let dy = -1;

window.addEventListener("load", init, false);

function init() {
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");

  backGroundColor();
  draw();
}

function backGroundColor() {
  ctx.fillStyle = "lightgray";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function draw() {
  backGroundColor();

  getArc(x, y);

  if (x < 0 || x > canvas.width) {
    dx = dx * -1;
  }
  x = x + 5 * dx;

  if (y < 0 || y > canvas.height) {
    dy = dy * -1;
  }
  y = y + 3 * dy;

  requestAnimationFrame(draw);
}

function getArc(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 30, 0, 2 * Math.PI);
  ctx.strokeStyle = "blue";
  ctx.stroke();
}
