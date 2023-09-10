let canvas, ctx
let hist, x, y, radius, angle
let prev, curr
let maxNum

window.onload = function () {
	canvas = document.getElementById('canvas')
	ctx = canvas.getContext('2d')

	width = canvas.width
	height = canvas.height

	setup()
	draw()
}

let setup = function () {
	ctx.translate(width / 2, height / 2)
	hist = []
	radius = 300
	maxNum = 200
	angle = 0
}

let draw = function () {
	x = Math.cos(degreesToRadians(angle)) * radius
	y = Math.sin(degreesToRadians(angle)) * radius
	hist.push({ x, y })

	angle++

	if (hist.length > maxNum) {
		hist.shift()
	}

	ctx.clearRect(-width / 2, -height / 2, width, height)

	prev = hist[0]
	console.log(prev, prev.x)

	ctx.beginPath()
	ctx.moveTo(prev.x, prev.y)
	for (let i = 1; i < hist.length; i++) {
		curr = hist[i]
		ctx.lineTo(curr.x, curr.y)
		prev = curr
	}
	ctx.strokeStyle = '#0000ff'
	ctx.stroke()

	requestAnimationFrame(draw)
}

let degreesToRadians = function (angle) {
	return (angle * Math.PI) / 180
}
