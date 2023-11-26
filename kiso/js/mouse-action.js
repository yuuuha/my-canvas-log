let canvas, ctx
let curTouched, curX, curY
let x, y, r

window.addEventListener('load', () => {
	canvas = document.getElementById('canvas')
	ctx = canvas.getContext('2d')

	canvasWidth = canvas.width
	canvasHeight = canvas.height

	// mouse sp
	canvas.addEventListener('touchStart', (e) => {
		e.preventDefault()
		let rect = canvas.getBoundingClientRect()
		let bai = canvasWidth / rect.width
		curTouched = true
		curX = (e.changeTouched[0].pageX - (rect.left + window.scrollX)) * bai
		curY = (e.changeTouched[0].pageY - (rect.top + window.scrollY)) * bai
		touchStart()
	})

	// mouse pc
	canvas.addEventListener('mousedown', (e) => {
		let rect = canvas.getBoundingClientRect()
		let bai = canvasWidth / rect.width
		curTouched = true
		curX = (e.clientX - rect.left) * bai
		curY = (e.clientY - rect.top) * bai
		touchStart()
	})

	setup()
	myrender()
})

// ------------

function setup() {
	x = canvasWidth / 2
	y = canvasHeight / 2
	r = 120
}

function myrender() {
	// background
	ctx.fillStyle = '#f4f4f4'
	ctx.fillRect(0, 0, canvasWidth, canvasHeight)

	// center arc
	ctx.beginPath()
	ctx.arc(x, y, r, 0, Math.PI * 2, false)
	ctx.strokeStyle = 'black'
	ctx.stroke()
}

function touchStart() {
	if (curTouched) {
		ctx.beginPath()
		ctx.arc(curX, curY, r, 0, Math.PI * 2, false)
		ctx.strokeStyle = 'black'
		ctx.stroke()
	}
}
