const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// background
ctx.fillStyle = "lightgray";
ctx.fillRect(0, 0, canvas.width, canvas.height);

let ballNum = 100;

let ballList = [];

for (let i = 0; i < ballNum; i++) {
  // ball
  let x = Math.random() * canvas.width;
  let y = Math.random() * canvas.height;
  let r = Math.random() * 80 + 5;
  let color = `rgb(100,100,100,0.2)`;
  let colorLine = `rgb(100,300,100,0.8)`;
  ballList[i] = { x, y, r, color, colorLine };
}

console.log(ballList);

const Ball = function (x, y, r, color, colorLine) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.color = color;
  this.colorLine = colorLine;
};

Ball.prototype = {
  draw: function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.strokeStyle = this.colorLine;
    ctx.stroke();
  },
};

for (let i = 0; i < ballNum; i++) {
  const ball = new Ball(
    ballList[i].x,
    ballList[i].y,
    ballList[i].r,
    ballList[i].color,
    ballList[i].colorLine
  );
  ball.draw();
}
