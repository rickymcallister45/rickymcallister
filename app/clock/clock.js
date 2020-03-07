var canvas, currentDay, currentMonth, currentDayWord;

function setup() {
	canvas = createCanvas(windowWidth * .8 , windowHeight);
	canvas.position(0, 0);
	canvas.id('clock');
	
	angleMode(DEGREES);

	dateBox();
}

function dateBox() {
	let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	currentDay = day();
		function pad2(currentDay) {
   	    	return (currentDay < 10 ? '0' : '') + currentDay
   		}

	currentMonth = months[month() - 1];
    var d = new Date();
	currentDayWord =  weekdays[d.getDay()];

	strokeWeight(windowWidth * .000001)
	textSize(windowHeight * .015);
	fill('#ffffff');
	text(currentDayWord + ', ' + currentMonth, (windowWidth - 20) *.4728, windowHeight *.40705);
	strokeWeight(windowWidth * .000001);
	textSize(windowHeight * .03);
	text(currentDay, windowWidth * .4858 , windowHeight *.4448);

	
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	strokeWeight(windowWidth * .01);
	stroke('#ffffff');
	fill(0);
	
	circle(windowWidth / 2, windowHeight / 2, windowWidth * .5);
		
	dateBox();
	
	translate(windowWidth / 2, windowHeight / 2);
	rotate(-90);

	let hr = hour();
	let mn = minute();
	let sc = second();

	strokeWeight(3);
		
	push();
	let secondAngle = map(sc, 0, 60, 0, 360);
	rotate(secondAngle);
	stroke(27, 228, 242);
	line(0 , 0, windowWidth * .2, 0);
	pop();

	push();
	let minuteAngle = map(mn, 0, 60, 0, 360);
	rotate(minuteAngle);
	stroke(192, 192, 192);
	line(0 , 0, windowWidth * .2, 0);
	pop();

	push();
	let hourAngle = map(hr % 12, 0, 12, 0, 360);
	rotate(hourAngle + (minuteAngle / 12));
	stroke(192, 192, 192);
	line(0 , 0, windowWidth * .1, 0);
	pop();

	stroke(192, 192, 192);
	point(0,0);

}

