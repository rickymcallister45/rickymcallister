//digital
function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(0);

	let hr = hour();
	let mn = minute();
	let sc = second();

	fill(255);
	noStroke();
	textSize(80);
	text(hr + ':' + mn + ':' + sc, 80, 200);
}
