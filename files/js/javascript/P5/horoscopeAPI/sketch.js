	//* horoscope
var p5;
var horoscopeTool = function(horoscoped){

var time = 10000;
var horoscope = "https://www.horoscopes-and-astrology.com/json";
var pathHoro;
var words = [];
var timeIt;
var tokens = {};

horoscoped.setup = function() {
	horoscoped.loadJSON(horoscope, horoscoped.gotHoroscope);
}

horoscoped.gotHoroscope = function(answer) {
		pathHoro = answer.dailyhoroscope.Aries;
		pathHoro = String(pathHoro);
		tokens = pathHoro.split(/\W+/);
		for(i = tokens.length - 18; i < tokens.length; i++){
			delete(tokens[i]);
			}
		tokens[8] = tokens[8] + ('\n');
		tokens[16] = tokens[16] + ('\n');
		words = tokens.join(' ');
		console.log(words);
		}	

horoscoped.keyTyped =	function(){
	if (horoscoped.keyCode === 104) {  
		var canvas = horoscoped.createCanvas(900,500);
		canvas.position(525,125);
		horoscoped.background(100);
		horoscoped.textSize(28);
		horoscoped.text(words, 150, 215);
		setInterval(horoscoped.timeIt, time);
		}else{
		return(false);	
}	}

horoscoped.timeIt = function() {
		horoscoped.canvas.remove();
	}
horoscoped.draw = function(){}

}

var myp5 = new p5(horoscopeTool);