let cols = 19
let rows = 19
let size

function setup() {
	createCanvas(800, 800)
	colorMode(HSB, 360, 100, 100, 100)
	size = width / cols
}

function draw() {
	background(220)
	for (let i = 0; i < 361; i++) {
		let x = (i % cols) * size
		let y = Math.floor(i / rows) * size

		fill(i, 100, 100, 100)
		rect(x, y, size, size)

		fill(0, 0, 0, 100)
		textSize(15)
		text(i, x + 2, y + size / 2)
	}
}

function keyPressed() {
	if (key == 's') {
		saveCanvas('color-number.png')
	}
}
