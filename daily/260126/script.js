let canvas, ctx;
let loc, vel, force, mass, accel, gravity, friction;
let radius = 100;

window.addEventListener("load", init, false);

function init() {
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");

  setup();
  loop();
}

function setup() {
  loc = { x: 0, y: 0 };
  vel = { x: 0, y: 0 };
  gravity = { x: 0, y: 0.3 };
  force = { x: 5, y: 3 };
  mass = 0.8;
  friction = 0.01;
  accel = { x: force.x * mass, y: force.y * mass };
}

function loop() {
  // background
  ctx.fillStyle = "rgb(240, 240, 240)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // set
  accel.x += gravity.x;
  accel.y += gravity.y;
  vel.x += accel.x;
  vel.y += accel.y;
  vel.x *= 1 - friction;
  vel.y *= 1 - friction;
  loc.x += vel.x;
  loc.y += vel.y;
  accel.x *= 0;
  accel.y *= 0;

  // getArc
  getArc(loc.x, loc.y);

  bounceOffWalls();

  requestAnimationFrame(loop);
}

function getArc(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  ctx.lineWidth = 3;
  ctx.strokeStyle = "rgb(52, 52, 234)";
  ctx.stroke();
}

function bounceOffWalls() {
  if (loc.x > canvas.width) {
    loc.x = canvas.width;
    vel.x *= -1;
  } else if (loc.x < 0) {
    loc.x = 0;
    vel.x *= -1;
  }

  if (loc.y > canvas.height) {
    loc.y = canvas.height;
    vel.y *= -1;
  } else if (loc.y < 0) {
    loc.y = 0;
    vel.y *= -1;
  }
}
