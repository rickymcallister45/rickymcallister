let blimp;
var x;
var canvas;

function preload(){
	blimp = loadImage("blimp.png");
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	background(0, 61, 153);
	canvas.position(0, 0);
	canvas.style('z-index', '-1');
	x = windowWidth;
	y = 150;
}

function draw() {
	background(0, 61, 153);
	image(blimp, x, y, 400, 300);
	x = x + .25 * -1;
	if(x + 500 < 0 ) {
	x = windowWidth + 500;
	}
}
