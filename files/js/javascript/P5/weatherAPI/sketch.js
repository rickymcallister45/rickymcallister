	//*weatherOutlook
var p5;
var weatherOutlook = function(o){

var api = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/45005";
var apiKey = "?apikey=8exy0XLiJkY7t8Y0t51FKw7MQ5JIYtSE%20";
var minTemp;
var maxTemp;
var dayIconPhrase;
var nightIconPhrase;
var headline;
var dayTwo;
var dayThree;
var dayFour;
var time = 5000;

o.setup =function () {
	loadJSON(api + apiKey, o.gotWeather);
}

o.gotWeather = function(data) {
	weather = data;
	minTemp = weather.DailyForecasts[0].Temperature.Minimum.Value;
	maxTemp = weather.DailyForecasts[0].Temperature.Maximum.Value;
	dayIconPhrase = weather.DailyForecasts[0].Day.IconPhrase;
	nightIconPhrase = weather.DailyForecasts[0].Night.IconPhrase;
	headline = weather.Headline.Text;
	dayTwo = weather.DailyForecasts[1].Day.IconPhrase;
	dayThree = weather.DailyForecasts[2].Day.IconPhrase;
	dayFour = weather.DailyForecasts[3].Day.IconPhrase;
	
	
}

o.keyTyped =	function(){
	if (o.keyCode === 119) {  
		var canvas = o.createCanvas(900,500);
		canvas.position(525,125);
		o.background(100);
		o.textSize(28);
		o.text("minTemp = " + minTemp, 300, 75);
		o.text("maxTemp = " + maxTemp, 300, 150);
		o.text("today = " + dayIconPhrase, 300, 225);
		o.text("tonight = " + nightIconPhrase, 300, 300);
		o.text(headline, 150, 425);
		o.text("Outlook:    " + dayTwo + ",    " + dayThree + ",    " + dayFour, 50, 475);
		setInterval(o.timeIt, time);
		}else{
		return(false);	
}}

o.timeIt = function() {
		o.canvas.remove();
		
	}

draw = function(){}
}

var myp5 = new p5(weatherOutlook);