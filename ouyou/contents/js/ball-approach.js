let canvas, ctx
let WIDTH, HEIGHT
let curX, curY, curTouched
let cirX, cirY, cirR, cirSpeed
let theta, distance

window.onload = function () {
	canvas = document.getElementById('canvas')
	ctx = canvas.getContext('2d')

	WIDTH = canvas.width
	HEIGHT = canvas.height

	canvas.addEventListener('mousedown', (e) => {
		let rect = canvas.getBoundingClientRect()
		let bai = WIDTH / rect.width
		curX = (e.clientX - rect.left) * bai
		curY = (e.clientY - rect.top) * bai
		curTouched = true
		touchStart()
	})

	canvas.addEventListener('mousemove', (e) => {
		let rect = canvas.getBoundingClientRect()
		let bai = WIDTH / rect.width
		curX = (e.clientX - rect.left) * bai
		curY = (e.clientY - rect.top) * bai
		touchMove()
	})

	canvas.addEventListener('mouseup', (e) => {
		curTouched = false
		touchEnd()
	})

	setup()
	draw()
}

function touchStart() {
	if (curTouched) {
		cirX = Math.random() * WIDTH
		cirY = Math.random() * HEIGHT
	}
}

function touchMove() {
	if (curTouched) {
	}
}

function touchEnd() {}

function setup() {
	cirX = WIDTH / 2
	cirY = HEIGHT / 2
	cirR = 30
	cirSpeed = 3
}

function draw() {
	ctx.clearRect(0, 0, WIDTH, HEIGHT)

	distance = Math.sqrt((curX - cirX) ** 2 + (curY - cirY) ** 2)

	ctx.beginPath()
	ctx.arc(cirX, cirY, cirR, 0, Math.PI * 2, false)
	ctx.fillStyle = 'blue'
	ctx.fill()

	theta = Math.atan2(curY - cirY, curX - cirX)
	cirX = cirX + Math.cos(theta) * Math.min(cirSpeed, distance)
	cirY = cirY + Math.sin(theta) * Math.min(cirSpeed, distance)

	requestAnimationFrame(draw)
}
