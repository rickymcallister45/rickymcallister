

var r = 0;
var b = 255;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {

	r = map(mouseX, 0, 600, 0, 255);
	b = map(mouseX, 0, 600, 0, 255);
	background(r, 0, b);

	fill(30, 8, 70);
	ellipse(mouseX, 200, 64, 64);
	

}