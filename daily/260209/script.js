let canvas, ctx;
let loc, vel, accel, force, gravity, mass;
let radius = 100;

window.addEventListener("load", init, false);

function init() {
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");

  setup();
  loop();
}

function setup() {
  loc = new Vector(100, 150);
  vel = new Vector(0, 0);
  gravity = new Vector(0, 0.2);
  force = new Vector(20, 3);
  mass = 1;
  friction = 0.01;
  accel = force.mult(mass);
}

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  set(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }

  mult(s) {
    this.x *= s;
    this.y *= s;
    return this;
  }
}

function loop() {
  ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  accel.add(gravity);
  vel.add(accel);
  vel.mult(1 - friction);
  loc.add(vel);
  accel.set(0, 0);
  getArc(loc.x, loc.y);

  bounceOffWalls();

  requestAnimationFrame(loop);
}

function bounceOffWalls() {
  let hanekaeri = -0.8; // 反発係数0.8で反発
  // 横方向の判定
  if (loc.x > canvas.width - radius) {
    loc.x = canvas.width - radius; // 位置を境界線上に固定
    vel.x *= hanekaeri;
  } else if (loc.x < radius) {
    loc.x = radius; // 位置を境界線上に固定
    vel.x *= hanekaeri;
  }

  // 縦方向の判定
  if (loc.y > canvas.height - radius) {
    loc.y = canvas.height - radius; // 底にめり込まないように固定
    vel.y *= hanekaeri;
  } else if (loc.y < radius) {
    loc.y = radius; // 天井にめり込まないように固定
    vel.y *= hanekaeri;
  }
}

function getArc(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  ctx.closePath();
  ctx.stroke();
}
