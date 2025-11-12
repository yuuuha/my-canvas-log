let canvas, ctx;
let r, kakudo;

window.addEventListener("load", () => {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  // background
  ctx.fillStyle = "#071952";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  setup();
  myrender();
});

function setup() {
  r = 300;
  kakudo = 100;
  posX = canvas.width / 2;
  posY = canvas.height / 2;
}

function myrender() {
  kakudo = Math.random() * 360;
  ctx.beginPath();
  ctx.moveTo(
    posX + Math.cos(changeDegree(0 + kakudo)) * r,
    posY + Math.sin(changeDegree(0 + kakudo)) * r
  );
  for (let i = 1; i < 3; i++) {
    ctx.lineTo(
      posX + Math.cos(changeDegree(i * 120 + kakudo)) * r,
      posY + Math.sin(changeDegree(i * 120 + kakudo)) * r
    );
  }
  ctx.closePath();
  ctx.strokeStyle = "white";
  ctx.stroke();
}

function changeDegree(degree) {
  return (degree * Math.PI) / 180;
}
