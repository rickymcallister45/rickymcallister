
var p5;

//* tickerApi 

var tickerApi = function(ticker){

var apiKey = "b55d4c266dfa4c8ea5b64671daf85fc8";
var stations = ["abc","fox","espn","reuters","cnn","ap","aj"];
var newsApi = [
	"https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=",
	"https://newsapi.org/v2/top-headlines?sources=fox-news&apiKey=",
	"https://newsapi.org/v2/top-headlines?sources=espn&apiKey=",
	"https://newsapi.org/v2/top-headlines?sources=reuters&apiKey=",
	"https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=",
	"https://newsapi.org/v2/top-headlines?sources=associated-press&apiKey=",
	"https://newsapi.org/v2/top-headlines?sources=al-jazeera-english&apiKey="]

var x = 800;
var y = 200;
var radio;
var val;
var space = "         ";
var path = [];
var news = [];
let abcNews = [];
let foxNews = [];
let espnNews = [];
let reutersNews = [];
let cnnNews = [];
let apNews = [];
let ajNews = [];

ticker.build = function(){
	ticker.background(150);
	ticker.textSize(32);
	}

ticker.setup = function () {
	var footer = ticker.createCanvas(ticker.windowWidth, 100);
  footer.position(0, 850);
	ticker.build();
	for(i = 0; i < newsApi.length; i++){
		path[i] = newsApi[i] + apiKey;
	}
	ticker.loadJSON(path[0], ticker.abc);
	ticker.loadJSON(path[1], ticker.fox);
	ticker.loadJSON(path[2], ticker.espn);
	ticker.loadJSON(path[3], ticker.reuters);
	ticker.loadJSON(path[4], ticker.cnn);
	ticker.loadJSON(path[5], ticker.ap);
	ticker.loadJSON(path[6], ticker.aj);

	radio = ticker.createRadio();
	radio.id('radio');
  		radio.option('abc', 'abcNews');
  		radio.option('fox', 'foxNews');
  		radio.option('espn', 'espnNews');
  		radio.option('reuters', 'reutersNews');
  		radio.option('cnn', 'cnnNews');
  		radio.option('assosiatedPress', 'apNews');
  		radio.option('alJezera', 'ajNews');

 		radio.changed(ticker.pickList);
	}


ticker.abc = function(stories) {
	for (var i = 0; i < stories.articles.length; i++) {
	abcNews[i] = space + stories.articles[i].title;
	}}


ticker.fox = function(stories) {
	for (var i = 0; i < stories.articles.length; i++) {
	foxNews[i] = space + stories.articles[i].title;
	}}

ticker.espn = function(stories) {
	for (var i = 0; i < stories.articles.length; i++) {
	espnNews[i] = space + stories.articles[i].title;
	}}

ticker.reuters = function(stories) {
	for (var i = 0; i < stories.articles.length; i++) {
	reutersNews[i] = space + stories.articles[i].title;
	}}

ticker.cnn = function(stories) {
	for (var i = 0; i < stories.articles.length; i++) {
	cnnNews[i] = space + stories.articles[i].title;
	}}

ticker.ap = function(stories) {
	for (var i = 0; i < stories.articles.length; i++) {
	apNews[i] = space + stories.articles[i].title;
	}}

ticker.aj = function(stories) {
	for (var i = 0; i < stories.articles.length; i++) {
	ajNews[i] = space + stories.articles[i].title;
	}}			

ticker.pickList = function() {
 	val = radio.value();
 		if(val == 'abcNews'){
 			val = abcNews;
 		}else if(val == 'foxNews'){
 			val = foxNews;
 		}else if(val == 'espnNews'){
 			val = espnNews;
		}else if(val == 'reutersNews'){
 			val = reutersNews;
		}else if(val == 'cnnNews'){
 			val = cnnNews;
		}else if(val == 'apNews'){
 			val = apNews;
		}else if(val == 'ajNews'){
 			val = ajNews;
		}
	}

ticker.advance = function(){
	x = x + 4 * -1;
	if(x + 9500 < 0 ) {
	x = ticker.windowWidth;
	}
}

ticker.draw = function() {
	//*ticker.pickList();
	ticker.build();
	ticker.text(val, x, 60);	
	ticker.advance();
	}
}

//*var myp5 = new p5(tickerApi);



	//* Clock

var clockorWatch = function(clock){

let img;

clock.preload = function (){
	img = clock.loadImage("img/watch04.png");
}

clock.setup = function () {
	var watch = clock.createCanvas(200, 200);
	watch.position(50, 50);
	clock.image(img, 0, 0, 200, 200);
	clock.angleMode(clock.DEGREES);
}

clock.draw = function () {
	clock.background(img);
	clock.translate(93, 98);
	clock.rotate(-90);

	let hr = clock.hour();
	let mn = clock.minute();
	let sc = clock.second();

	clock.strokeWeight(3);
	clock.stroke(0);
	clock.noFill();
	let secondAngle = clock.map(sc, 0, 60, 0, 360)
	
	clock.stroke(150, 100, 255);
	let minuteAngle = clock.map(mn, 0, 60, 0, 360)
	
	clock.stroke(150, 255, 100);
	let hourAngle = clock.map(hr % 12, 0, 12, 0, 360)
	
	clock.push();
	clock.rotate(secondAngle);
	clock.stroke(255, 0, 0);
	clock.line(0 , 0, 50, 0);
	clock.pop();

	clock.push();
	clock.rotate(minuteAngle);
	clock.stroke(192, 192, 192);
	clock.line(0 , 0, 40, 0);
	clock.pop();

	clock.push();
	clock.rotate(hourAngle);
	clock.stroke(192, 192, 192);
	clock.line(0 , 0, 30, 0);
	clock.pop();

	clock.stroke(192, 192, 192);
	clock.point(0,0);
	}
}

	//* horoscope

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

	//*weatherAlert
console.log('203');
var weatherAlert = function(wa){

var weatherAlert = 'https://api.weather.gov/alerts/active/zone/OHC049';
var answer = [];

wa.setup = function() {
	wa.noCanvas();
	wa.loadJSON(weatherAlert, wa.gotData);
}

wa.gotData = function(data) {
		if(data.features.length === 0 ){
		console.log('There are no weather warnings currently');
	}else{
		alert(data.features[0].properties.description)
}	}	}

	//*weatherOutlook

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

//* coin flip

var coinFlip = function(cf){

var time = 2000;
var heads = "img/front.png";
var tails = "img/back.png";
var number;
var answer;

cf.decision = function(number) {
			if (number == 1) {
				console.log("heads");
				answer = cf.createImg(heads);
				} else {
				console.log("tails");
				answer = cf.createImg(tails);
			}	}	

cf.keyTyped =	function(){
	if (cf.keyCode === 32) { 
		
		console.log("coinFlip Starting!!");
		var number =  Math.floor((Math.random() * 2) + 1)
		console.log(number);
 
		setInterval(cf.timeIt, time);
		cf.decision(number);
		answer.position(825,225);
		}else{
		return(false);	

}	}

cf.timeIt = function() {
		answer.remove();
	}
cf.draw = function(){}
}

	//*joke
var meanJoke = function(mj){

var time = 8000;
var meanJoke = "https://www.reddit.com/r/MeanJokes.json";
var jokeData;
var jokeAnswer = [];
var jokePunchline = [];
var timeIt;
var number;
mj.timeIt = function() {
		mj.canvas.remove();
}

mj.jokeAnswer = function(){
	joke = mj.text(jokePunchline, 150, 300);
}

mj.setup = function() {
	mj.loadJSON(meanJoke, mj.gotMeanJoke);
}

mj.gotMeanJoke = function(joke) {
		jokeData = joke.data;
}	

mj.keyTyped =	function(){
	if (mj.keyCode === 98) {
		number = mj.floor(mj.random(20))
		jokeTitle = jokeData.children[number].data.title;
		jokePunchline = jokeData.children[number].data.selftext;
		var canvas = mj.createCanvas(1400,500);
		canvas.position(225,125);
		mj.background(100);
		mj.textSize(28);
		mj.text(jokeTitle, 150, 215)
		setInterval(mj.jokeAnswer, 4000);
		setInterval(mj.timeIt, time);
		}else{
		return(false);	
}

console.log('If the meanJoke offended you take it up with reddit');
mj.draw = function(){}}}


//*var myp51 = new p5(clockorWatch);
var myp52 = new p5(coinFlip);

var myp54 = new p5(horoscopeTool);	
var myp55 = new p5(weatherAlert);
var myp56 = new p5(weatherOutlook);
var myp57 = new p5(meanJoke);
