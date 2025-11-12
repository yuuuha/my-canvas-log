let canvas, ctx;
let x, y, r, t;

window.addEventListener("load", () => {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  // background
  ctx.fillStyle = "midnightblue";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  setup();
  myrender();
});

function setup() {
  x = canvas.width / 2;
}

function myrender() {
  // 200
  get_arc100 = new GetFigure(
    x,
    canvas.height / 2 - 400,
    200,
    "yellow",
    "radius200"
  );
  get_arc100.getArc200();
  get_arc100.getText();

  //300
  get_arc150 = new GetFigure(
    x,
    canvas.height / 2 + 300,
    300,
    "white",
    "radius300"
  );
  get_arc150.getArc300();
  get_arc150.getText();
}

// class
class GetFigure {
  constructor(x, y, r, c, t) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.c = c;
    this.t = t;
  }

  getText() {
    ctx.fillStyle = this.c;
    ctx.font = "60px serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(this.t, this.x, this.y);
  }

  getArc200() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    ctx.lineWidth = 20;
    ctx.strokeStyle = this.c;
    ctx.stroke();
  }
}

// prototype
GetFigure.prototype.getArc300 = function () {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
  ctx.lineWidth = 30;
  ctx.strokeStyle = "white";
  ctx.stroke();
};
