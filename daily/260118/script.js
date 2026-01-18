let canvas, ctx;
let arcEle, vel, color;
let downloadBtn;

window.addEventListener("load", init, false);

function init() {
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");

  setup();
  loop();
  downloadCanvas();
}

function setup() {
  arcEle = { x: canvas.width / 2, y: canvas.height / 2, r: 100 };
  vel = { x: 2, y: 3 };
}

function loop() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < 300; i++) {
    arcEle.x = getRandomInt(0, canvas.width);
    arcEle.y = getRandomInt(0, canvas.height);
    arcEle.r = getRandomInt(10, 150);
    color = `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
    console.log(color);
    getArc(arcEle.x, arcEle.y, arcEle.r, color);
  }
}

function getArc(x, y, r, color) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.strokeStyle = color;
  ctx.stroke();
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function downloadCanvas() {
  downloadBtn = document.getElementById("downloadBtn");
  downloadBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = canvas.toDataURL();
    link.download = "canvas_image.png";
    link.click();
  });
}
