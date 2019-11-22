	//*weatherOutlook
var p5;
var weatherOutlook = function(o){

var api = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/45005";
var apiKey = "?apikey=8exy0XLiJkY7t8Y0t51FKw7MQ5JIYtSE%20";

let iconPath = 'https://developer.accuweather.com/sites/default/files/';
let iconEnd = '-s.png';

var time = 5000;


o.setup =function () {
	loadJSON(api + apiKey, o.gotWeather);
	noCanvas();
}

o.gotWeather = function(weather) {
	console.log('weatherOutlook: ' + weather);
	
	minTemp = weather.DailyForecasts[0].Temperature.Minimum.Value;
	maxTemp = weather.DailyForecasts[0].Temperature.Maximum.Value;
	current = weather.DailyForecasts[0].Day.IconPhrase;
	headline = weather.Headline.Text;

	dayOneIcon = weather.DailyForecasts[0].Day.Icon;
	dayOneMax = weather.DailyForecasts[0].Temperature.Maximum.Value;
	dayOneMin = weather.DailyForecasts[0].Temperature.Minimum.Value;
	if(dayOneIcon < 10) {
		dayOneIcon = '0' + weather.DailyForecasts[0].Day.Icon;
	}

	dayTwoIcon = weather.DailyForecasts[1].Day.Icon;
	dayTwoMax = weather.DailyForecasts[1].Temperature.Maximum.Value;
	dayTwoMin = weather.DailyForecasts[1].Temperature.Minimum.Value;
	if(dayTwoIcon < 10) {
		dayTwoIcon = '0' + weather.DailyForecasts[1].Day.Icon;
	}
	dayThreeIcon = weather.DailyForecasts[2].Day.Icon;
	dayThreeMax = weather.DailyForecasts[2].Temperature.Maximum.Value;
	dayThreeMin = weather.DailyForecasts[2].Temperature.Minimum.Value;
	if(dayThreeIcon < 10) {
		dayThreeIcon = '0' + weather.DailyForecasts[2].Day.Icon;
	}
	dayFourIcon = weather.DailyForecasts[3].Day.Icon;
	dayFourMax = weather.DailyForecasts[3].Temperature.Maximum.Value;
	dayFourMin = weather.DailyForecasts[3].Temperature.Minimum.Value;
	if(dayFourIcon < 10) {
		dayFourIcon = '0' + weather.DailyForecasts[3].Day.Icon;
	}
	dayFiveIcon = weather.DailyForecasts[4].Day.Icon;
	dayFiveMax = weather.DailyForecasts[4].Temperature.Maximum.Value;
	dayFiveMin = weather.DailyForecasts[4].Temperature.Minimum.Value;
	if(dayFiveIcon < 10) {
		dayFiveIcon = '0' + weather.DailyForecasts[4].Day.Icon;
	}
}


o.topLeft = function() {
	city = o.createDiv('Carlisle OH, 45005');
	city.style('color', 'black');
	city.style('font-weight', 'bold');
	city.position(550, 140);

	var today = new Date();
	var Days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	var Day = Days[today.getDay()];
	date = o.createDiv(Day + '  ' + (hour() % 12) + ':' + (minute()<10?'0':'') + minute() );
	date.style('color', 'black');
	date.position(590, 182);

	weatherStatus = o.createDiv(current);
	weatherStatus.style('color', 'black');
	weatherStatus.position(590, 220);

	currentTemp = o.createDiv(maxTemp + '&deg;F');
	currentTemp.style('color', 'black');
	currentTemp.style('font-size', '108px');
	currentTemp.position(615, 265);
}

o.topRight = function() {
	topRightIcon = o.createImg(iconPath + dayOneIcon + iconEnd);
	topRightIcon.style('height', '200px');
	topRightIcon.style('width', '200px');
	topRightIcon.position(1050, 150);
}
o.middleLeft = function() {
	outlook = o.createDiv(headline);
	outlook.style('color', 'black');
	outlook.position(550, 383);
}




o.fiveDay1 = function() {

	dayOneMaxTemp = o.createDiv(dayOneMax + '&deg;F');
	dayOneMaxTemp.style('color', 'black');
	dayOneMaxTemp.style('font-size', '24px');
	dayOneMaxTemp.position(550, 465);

	dayOneMinTemp = o.createDiv(dayOneMin + '&deg;F');
	dayOneMinTemp.style('color', 'black');
	dayOneMinTemp.style('font-size', '24px');
	dayOneMinTemp.position(615, 465);

	fiveDay1 = o.createImg(iconPath + dayOneIcon + iconEnd);
	fiveDay1.position(575, 550);
	}
o.fiveDay2 = function() {

	dayTwoMaxTemp = o.createDiv(dayTwoMax + '&deg;F');
	dayTwoMaxTemp.style('color', 'black');
	dayTwoMaxTemp.style('font-size', '24px');
	dayTwoMaxTemp.position(735, 465);

	dayTwoMinTemp = o.createDiv(dayTwoMin + '&deg;F');
	dayTwoMinTemp.style('color', 'black');
	dayTwoMinTemp.style('font-size', '24px');
	dayTwoMinTemp.position(795, 465);

	fiveDay2 = o.createImg(iconPath + dayTwoIcon + iconEnd);
	fiveDay2.position(760, 550);
	}
o.fiveDay3 = function() {

	dayThreeMaxTemp = o.createDiv(dayThreeMax + '&deg;F');
	dayThreeMaxTemp.style('color', 'black');
	dayThreeMaxTemp.style('font-size', '24px');
	dayThreeMaxTemp.position(925, 465);

	dayThreeMinTemp = o.createDiv(dayThreeMin + '&deg;F');
	dayThreeMinTemp.style('color', 'black');
	dayThreeMinTemp.style('font-size', '24px');
	dayThreeMinTemp.position(985, 465);

	fiveDay3 = o.createImg(iconPath + dayThreeIcon + iconEnd);
	fiveDay3.position(950, 550);
	
	}
o.fiveDay4 = function() {

	dayFourMaxTemp = o.createDiv(dayFourMax + '&deg;F');
	dayFourMaxTemp.style('color', 'black');
	dayFourMaxTemp.style('font-size', '24px');
	dayFourMaxTemp.position(1100, 465);

	dayFourMinTemp = o.createDiv(dayFourMin + '&deg;F');
	dayFourMinTemp.style('color', 'black');
	dayFourMinTemp.style('font-size', '24px');
	dayFourMinTemp.position(1160, 465);

	fiveDay4 = o.createImg(iconPath + dayFourIcon + iconEnd);
	fiveDay4.position(1125, 550);
	}	
o.fiveDay5 = function() {

	dayFiveMaxTemp = o.createDiv(dayFiveMax + '&deg;F');
	dayFiveMaxTemp.style('color', 'black');
	dayFiveMaxTemp.style('font-size', '24px');
	dayFiveMaxTemp.position(1275, 465);

	dayFiveMinTemp = o.createDiv(dayFiveMin + '&deg;F');
	dayFiveMinTemp.style('color', 'black');
	dayFiveMinTemp.style('font-size', '24px');
	dayFiveMinTemp.position(1335, 465);

	fiveDay5 = o.createImg(iconPath + dayFiveIcon + iconEnd);
	fiveDay5.position(1300, 550);
	}





o.keyTyped = function(){
	if (o.keyCode === 119) {
	 	
		var canvas = o.createCanvas(900,500);

		canvas.doubleClicked(o.visit = function() {
			window.open('https://weather.com/weather/tenday/l/45005:4:US');
			});
		canvas.id('myCanvas');
		canvas.position(525,125);
		o.background(256);
		
		o.topLeft(); 
		o.topRight();
		o.middleLeft();
		o.fiveDay1();
		o.fiveDay2();
		o.fiveDay3();
		o.fiveDay4();
		o.fiveDay5();

		setInterval(o.timeIt, time);
		}else{
		return(false);	
}}

o.timeIt = function() {
		o.canvas.remove();
		city.remove();
		date.remove();
		weatherStatus.remove();
		outlook.remove();
		fiveDay1.remove();
		fiveDay2.remove();
		fiveDay3.remove();
		fiveDay4.remove();
		fiveDay5.remove();
		topRightIcon.remove();
		currentTemp.remove();
		dayOneMaxTemp.remove();
		dayOneMinTemp.remove();
		dayTwoMaxTemp.remove();
		dayTwoMinTemp.remove();
		dayThreeMaxTemp.remove();
		dayThreeMinTemp.remove();
		dayFourMaxTemp.remove();
		dayFourMinTemp.remove();
		dayFiveMaxTemp.remove();
		dayFiveMinTemp.remove();
	}

draw = function(){}
}

var myp5 = new p5(weatherOutlook);

