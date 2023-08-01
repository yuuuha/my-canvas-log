let canvas, ctx
let curX, curY, curTouched
let pos_x, pos_y
let color_background, backgroundNum
let color_pattern, color_list

window.addEventListener('load', () => {
	canvas = document.getElementById('canvas')
	ctx = canvas.getContext('2d')

	canvasWidth = canvas.width
	canvasHeight = canvas.height

	// mouse action sp
	canvas.addEventListener(
		'touchstart',
		function (e) {
			e.preventDefault()
			var rect = canvas.getBoundingClientRect()
			var bai = canvasWidth / rect.width
			yubiTouched = true
			curX =
				(e.changedTouches[0].pageX - (rect.left + window.pageXOffset)) * bai
			curY = (e.changedTouches[0].pageY - (rect.top + window.pageYOffset)) * bai
			touchStart()
		},
		false
	)

	// mouse action pc
	canvas.addEventListener('mousedown', (e) => {
		let rect = canvas.getBoundingClientRect()
		let bai = canvasWidth / rect.width
		curX = (e.clientX - rect.left) * bai
		curY = (e.clientY - rect.top) * bai
		curTouched = true
		touchStart()
	})

	setup()
	colorListHTML()
})

function setup() {
	// background
	ctx.fillStyle = 'black'
	ctx.fillRect(0, 0, canvasWidth, canvasHeight)

	backgroundNum = 0

	pos_x = [300, 500, 700, 900]
	pos_y = 120

	color_pattern = []

	color_background = [
		'white',
		'red',
		'orange',
		'green',
		'blue',
		'#165e83',
		'purple',
		'yellow',
	]

	color_list = [
		['#8C0909', '#B90B0B', '#FB9935', '#F4F4F4'],
		['#322653', '#8062D6', '#9288F8', '#FFD2D7'],
		['#FF6666', '#FF8989', '#FCAEAE', '#FFEADD'],
		['#4A55A2', '#7895CB', '#A0BFE0', '#C5DFF8'],
		['#331D2C', '#3F2E3E', '#A78295', '#EFE1D1'],
		['#1D5B79', '#468B97', '#EF6262', '#F3AA60'],
		['#379237', '#54B435', '#82CD47', '#F0FF42'],
		['#071952', '#0B666A', '#35A29F', '#97FEED'],
		['#FAF0D7', '#FFD9C0', '#8CC0DE', '#CCEEBC'],
		['#F31559', '#FF52A2', '#FFB07F', '#FFECAF'],
		['#0D1282', '#EEEDED', '#F0DE36', '#D71313'],
		['#272829', '#61677A', '#D8D9DA', '#FFF6E0'],
	]

	color_rect()
}

function touchStart() {
	background(backgroundNum)
	backgroundNum++
	if (backgroundNum > color_background.length) {
		backgroundNum = 0
	}

	color_rect()
}

function background() {
	ctx.fillStyle = color_background[backgroundNum]
	ctx.fillRect(0, 0, canvasWidth, canvasHeight)
}

function color_rect() {
	for (let j = 0; j < color_list.length; j++) {
		for (let i = 0; i < color_list.length; i++) {
			color_pattern[j] = new ColorList(
				pos_x[i],
				pos_y * (j + 1),
				color_list[j][i]
			)
			color_pattern[j].colorRect()
		}
	}
}

// class ColorList
class ColorList {
	constructor(x, y, c) {
		this.x = x
		this.y = y
		this.c = c
	}

	colorRect() {
		ctx.fillStyle = this.c
		ctx.fillRect(this.x, this.y, 200, 80)

		ctx.fillStyle = 'gray'
		ctx.font = '30px serif'
		ctx.textBaseline = 'top'
		ctx.fillText(this.c, this.x, this.y)
	}
}

function colorListHTML() {
	let color_list_HTML = []
	for (let i = 0; i < color_list.length; i++) {
		color_list_HTML.push(color_list[i])

		let div_elm = document.createElement('div')
		div_elm.id = 'color_name'
		div_elm.innerHTML = String(color_list_HTML[i])
		parent = document.getElementById('parent')
		parent.appendChild(div_elm)
	}
}
