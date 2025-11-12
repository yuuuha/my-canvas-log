let canvas, ctx;
let WIDTH, HEIGHT;
let curYubiX, curYubiY, curYubiTouched;
let x, y;

window.onload = () => {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  WIDTH = canvas.width;
  HEIGHT = canvas.height;

  // SP
  canvas.addEventListener("touchstart", (e) => {
    e.preventDefault;
    let rect = canvas.getBoundingClientRect();
    let bai = WIDTH / rect.WIDTH;
  });

  // PC
  canvas.addEventListener("mousedown", (e) => {
    let rect = canvas.getBoundingClientRect();
    let bai = WIDTH / rect.width;
    curYubiTouched = true;
    curYubiX = (e.clientX - rect.left) * bai;
    curYubiY = (e.clientY - rect.top) * bai;
    touchStart();
  });

  setup();
  draw();
};

function setup() {
  // x = WIDTH / 2
  // y = HEIGHT / 2
}

function touchStart() {
  if (curYubiTouched) {
    ctx.beginPath();
    ctx.arc(curYubiX, curYubiY, 100, 0, Math.PI * 2, false);
    ctx.fillStyle = "blue";
    ctx.fill();
  }
}

function draw() {
  ctx.beginPath();
  ctx.arc(WIDTH / 2, HEIGHT / 2, 100, 0, Math.PI * 2, false);
  ctx.fillStyle = "blue";
  ctx.fill();
}
