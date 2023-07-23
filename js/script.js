let canvas, ctx

window.addEventListener('load', () => {
	initial()
	myrender()
})

function initial() {
	canvas = document.getElementById('canvas')
	ctx = canvas.getContext('2d')
}

function myrender() {
	mycanvaslog = 'my Canvas Log'
	ctx.font = '60px Helvetica'
	ctx.textAlign = 'center'
	ctx.textBaseline = 'middle'
	ctx.fillStyle = 'white'
	ctx.fillText(mycanvaslog, canvas.width / 2, canvas.height / 2)
}
