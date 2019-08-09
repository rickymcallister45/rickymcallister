var p5;

var tickerApi = function(ticker){
	console.log('running');
var apiKey = "b55d4c266dfa4c8ea5b64671daf85fc8";
var stations = ["abc","fox","espn","reuters","cnn","ap","aj"];
var newsApi = [
	"https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=",
	"https://newsapi.org/v2/top-headlines?sources=fox-news&apiKey=",
	"https://newsapi.org/v2/top-headlines?sources=espn&apiKey=",
	"https://newsapi.org/v2/top-headlines?sources=reuters&apiKey=",
	"https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=",
	"https://newsapi.org/v2/top-headlines?sources=associated-press&apiKey=",
	"https://newsapi.org/v2/top-headlines?sources=al-jazeera-english&apiKey="];

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

 ticker.setup = function() {
	var footer = ticker.createCanvas(ticker.windowWidth, 100);
    footer.position(0, 850);
    footer.style('z-index','3');
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
        radio.style('z-index', '3');
 		radio.changed(ticker.pickList);
	}

ticker.windowResized = function () {
  ticker.resizeCanvas(ticker.windowWidth, ticker.windowHeight);
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
	ticker.pickList();
    ticker.build();
	ticker.text(val, x, 60);	
	ticker.advance();
	}
}

