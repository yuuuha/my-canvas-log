let canvas, ctx;
let arcElm, arcVel;

window.addEventListener("load", () => {
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");

  init();
  loop();
  setupMediaRecorder();

  //   let intervalID = setInterval(loop, 1000 / 30);
});

function init() {
  ctx.fillStyle = "lightgray";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  arcElm = { x: canvas.width / 2, y: canvas.height / 2, r: 100 };
  arcVel = { x: 5, y: 3 };
}

function loop() {
  // background
  ctx.fillStyle = "lightgray";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // arc
  getArc(arcElm.x, arcElm.y, arcElm.r);
  arcElm.x += arcVel.x;
  arcElm.y += arcVel.y;

  // bounce
  if (arcElm.x + arcElm.r > canvas.width || arcElm.x - arcElm.r < 0) {
    arcVel.x *= -1;
  }
  if (arcElm.y + arcElm.r > canvas.height || arcElm.y - arcElm.r < 0) {
    arcVel.y *= -1;
  }

  requestAnimationFrame(loop);
}

function getArc(x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.strokeStyle = "blue";
  ctx.stroke();
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.closePath();
}

setupMediaRecorder = () => {
  let mediaRecorder;
  let recordedChunks = [];

  // 1. ストリームの取得（フレームレートを30fpsに指定）
  const stream = canvas.captureStream(30);

  // 2. MediaRecorderの設定
  mediaRecorder = new MediaRecorder(stream, {
    mimeType: "video/webm; codecs=vp9",
  });

  // データが利用可能になったら配列に保存
  mediaRecorder.ondataavailable = (e) => {
    if (e.data.size > 0) {
      recordedChunks.push(e.data);
    }
  };

  // 停止時にダウンロード処理を実行
  mediaRecorder.onstop = () => {
    const blob = new Blob(recordedChunks, { type: "video/webm" });
    const url = URL.createObjectURL(blob);

    // 擬似的にリンクを作ってクリックさせる
    const a = document.createElement("a");
    a.href = url;
    a.download = "animation.webm";
    a.click();

    // メモリ解放
    URL.revokeObjectURL(url);
    recordedChunks = [];
  };

  // ボタン操作
  startBtn.onclick = () => mediaRecorder.start();
  stopBtn.onclick = () => mediaRecorder.stop();
};
