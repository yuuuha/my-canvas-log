let x, y, d, r
let hist = []
let angle
let count

function setup() {
	createCanvas(640, 640)
	count = 0
	d = 30
	r = d / 2
	hist[0] = { x: 0, y: 0, r: 0 }
}

function draw() {
	// background(50, 100, 200);
	background(220)
	if (count < 200) {
		x = random(width / 2, width)
		y = random(0, height / 2)
	} else if (count < 400) {
		x = random(0, width / 2)
		y = random(height / 2, height)
	} else if (count < 600) {
		x = random(width / 2, width)
		y = random(height / 2, height)
	} else {
		x = random(0, width / 2)
		y = random(0, height / 2)
	}

	d = random(20, 120)
	r = d / 2

	hist.push({ x, y, r })

	for (let i = 1; i < hist.length; i++) {
		angle = atan2(hist[i].y - hist[i - 1].y, hist[i].x - hist[i - 1].x)
		hist[i].x = hist[i - 1].x + cos(angle) * (hist[i].r + hist[i - 1].r)
		hist[i].y = hist[i - 1].y + sin(angle) * (hist[i].r + hist[i - 1].r)
		noFill()
		// stroke(200, 100, 150);
		// strokeWeight(2);
		circle(hist[i].x, hist[i].y, hist[i].r * 2)
	}

	filter(BLUR, 0.5)

	count++

	if (count > 800) {
		noLoop()
	}
}

function keyPressed() {
	if (key === 's') {
		saveCanvas('tsunagaru-ring.png')
	}
}
