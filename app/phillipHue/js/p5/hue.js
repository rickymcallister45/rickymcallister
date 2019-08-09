var p5

var philipsHue = function(hue){

var hueUrl = "https://api.meethue.com/bridge/8AZTDynXnx1r9k4SCt5jkH853Rj0hu55AdWtFBwc/lights/5/state";

hue.lightsOn = function() {
  	console.log('mouseClicked');
	hue.httpDo(hueUrl, 
		 {method: 'Put',
		state:{"on":true}}	)	}

hue.setup = function() {
	
	var hueButton = hue.createButton('p5.LightSwitch');
		hueButton.id('hueButton');
		hueButton.style('height', '200px');
		hueButton.style('width', '200px');
		hueButton.position(800, 400);
		hueButton.mousePressed(hue.lightsOn); 
	}


hue.draw = function() {}	}

new p5(philipsHue);