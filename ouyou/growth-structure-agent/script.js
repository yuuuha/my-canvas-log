let canvas, ctx

canvas = document.getElementById('canvas')
ctx = canvas.getContext('2d')

// -------------------------

function drawArc(x, y, r) {
	ctx.beginPath()
	ctx.arc(x, y, r, 0, Math.PI * 2, false)
	ctx.strokeStyle = 'black'
	ctx.stroke()
}

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min
}

// -------------------------

let x = []
let y = []
let r = []
let currentCount, currentIndex
let newX, newY, newR
let closestIndex, closestDist

setup()
draw()
downloadCanvas()

function setup() {
	currentCount = 0
	currentIndex = 1
	x[0] = canvas.width / 2
	y[0] = canvas.height / 2
	r[0] = 10
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height)

	newR = getRandomArbitrary(3, 10)
	newX = getRandomArbitrary(newR, canvas.width - newR)
	newY = getRandomArbitrary(newR, canvas.height - newR)

	closestDist = Number.MAX_VALUE
	for (let i = 0; i < currentCount; i++) {
		let newDist = Math.sqrt((newX - x[i]) ** 2 + (newY - y[i]) ** 2)
		if (newDist < closestDist) {
			closestIndex = i
			closestDist = newDist
		}
	}

	let angle = Math.atan2(newY - y[closestIndex], newX - x[closestIndex])
	x[currentIndex] = x[closestIndex] + Math.cos(angle) * (newR + r[closestIndex])
	y[currentIndex] = y[closestIndex] + Math.sin(angle) * (newR + r[closestIndex])
	r[currentIndex] = newR

	for (let i = 0; i < currentCount; i++) {
		drawArc(x[i], y[i], r[i])
	}

	currentCount++
	currentIndex++

	if (currentCount > 500) {
		cancelAnimationFrame(draw)
	} else {
		requestAnimationFrame(draw)
	}
}

function downloadCanvas() {
	document.addEventListener('keydown', (e) => {
		if (e.key == 's') {
			let a = document.createElement('a')
			a.href = canvas.toDataURL('image/png', 1.0)
			a.download = 'fueru-agent'
			a.click()
		}
	})
}
