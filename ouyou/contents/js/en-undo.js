'use strict'

let canvas, ctx
let width, height, radius

window.onload = function () {
	canvas = document.getElementById('canvas')
	ctx = canvas.getContext('2d')

	width = canvas.width
	height = canvas.height

	setup()
	draw()
	download()
}

let sateX, sateY, angle, angle1
let cir1X, cir1Y, cir2X, cir2Y, sate1X, sate1Y, sate2X, sate2Y
let hist, prev, curr

let setup = function () {
	cir1X = width / 2 + 300
	cir1Y = height / 2
	cir2X = width / 2 - 300
	cir2Y = height / 2 + 300
	radius = 500
	angle = 0
	angle1 = 0
	hist = []
}

let draw = function () {
	// clear
	ctx.fillStyle = '#5f9ea0'
	ctx.fillRect(0, 0, width, height)

	// circle 1
	ctx.beginPath()
	ctx.arc(cir1X, cir1Y, radius, 0, Math.PI * 2, false)
	ctx.strokeStyle = '#ffffff'
	ctx.stroke()

	// circle 2
	ctx.beginPath()
	ctx.arc(cir2X, cir2Y, radius, 0, Math.PI * 2, false)
	ctx.strokeStyle = '#ffffff'
	ctx.stroke()

	// satellite 1
	sate1X = Math.cos(degreesToRadians(angle1)) * radius + cir1X
	sate1Y = Math.sin(degreesToRadians(angle1)) * radius + cir1Y
	ctx.beginPath()
	ctx.arc(sate1X, sate1Y, 10, 0, Math.PI * 2, false)
	ctx.fillStyle = '#000000'
	ctx.fill()

	// satellite 2
	sate2X = Math.cos(degreesToRadians(angle)) * radius + cir2X
	sate2Y = Math.sin(degreesToRadians(angle)) * radius + cir2Y
	ctx.beginPath()
	ctx.arc(sate2X, sate2Y, 10, 0, Math.PI * 2, false)
	ctx.fillStyle = '#000000'
	ctx.fill()

	hist.push(createVec(sate2X + 300, sate1Y))

	if (hist.length > 1500) {
		hist.shift()
	}

	console.log(hist)

	prev = hist[0]

	// line
	for (let i = 1; i < hist.length; i++) {
		curr = hist[i]

		ctx.beginPath()
		ctx.moveTo(prev.x, prev.y)
		ctx.lineTo(curr.x, curr.y)
		ctx.strokeStyle = '#000000'
		ctx.stroke()

		prev = curr
	}

	angle += 1
	angle1 += 1.6

	requestAnimationFrame(draw)
}

let degreesToRadians = function (a) {
	return (a * Math.PI) / 180
}

let createVec = function (x, y) {
	return { x, y }
}

let download = function () {
	document.addEventListener('keydown', (e) => {
		if (e.key === 's') {
			let a = document.createElement('a')
			a.href = canvas.toDataURL('image/png', 1.0)
			a.download = '0916-1'
			a.click()
		}
	})
}
