var p5;

	//* tickerApi 

var tickerApi = function(ticker){

var newsApi = "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.foxnews.com%2Ffoxnews%2Flatest";
var x = 800;
var y = 200;
var weather;
var word;
var fox = [];
var space = "              ";


ticker.setup = function () {
	var footer = ticker.createCanvas(ticker.windowWidth, 100);
	footer.position(0, 850);
	ticker.loadJSON(newsApi, ticker.gotNews);
}

ticker.gotNews = function(stories) {
	var news = stories.items;
		for ( i = 0; i < 10; i++){
		fox[i] = (space + news[i].title);
	}
}

ticker.draw = function() {
	ticker.background(150);
	ticker.textSize(32);
	ticker.text(String(fox), x, 60);
	x = x + 4 * -1;
	if(x + 9500 < 0 ) {
	x = ticker.windowWidth;
	}	}
}

var myp5 = new p5(tickerApi);