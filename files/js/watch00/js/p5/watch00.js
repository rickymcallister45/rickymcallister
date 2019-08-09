 /* p5 watch00*/

	
let img;
var canvas;


function setup() {
	canvas = createCanvas(200, 200);
	canvas.position(50, 50);
	stroke(0);
	circle(200);
	angleMode(DEGREES);
	
}


function draw() {
	background(img);
	translate(93, 98);
	rotate(-90);

	let hr = hour();
	let mn = minute();
	let sc = second();

	strokeWeight(3);
	stroke(0);
	noFill();
	let secondAngle = map(sc, 0, 60, 0, 360)
	//arc(0, 0, 300, 300, 0, secondAngle);

	stroke(150, 100, 255);
	let minuteAngle = map(mn, 0, 60, 0, 360)
	//arc(0, 0, 280, 280, 0, minuteAngle);

	stroke(150, 255, 100);
	let hourAngle = map(hr % 12, 0, 12, 0, 360)
	//arc(0, 0, 260, 260, 0, hourAngle);

	

	push();
	rotate(secondAngle);
	stroke(255, 0, 0);
	line(0 , 0, 50, 0);
	pop();

	push();
	rotate(minuteAngle);
	stroke(192, 192, 192);
	line(0 , 0, 40, 0);
	pop();

	push();
	rotate(hourAngle);
	stroke(192, 192, 192);
	line(0 , 0, 30, 0);
	pop();

	stroke(192, 192, 192);
	point(0,0);

}
	