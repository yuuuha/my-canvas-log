let canvas, ctx

window.onload = function () {
	canvas = document.getElementById('canvas')
	ctx = canvas.getContext('2d')

	draw()
}

function draw() {
	mycanvaslog = 'my Canvas Log'
	ctx.font = '60px Helvetica'
	ctx.textAlign = 'center'
	ctx.textBaseline = 'middle'
	ctx.fillStyle = 'white'
	ctx.fillText(mycanvaslog, canvas.width / 2, canvas.height / 2)
}
