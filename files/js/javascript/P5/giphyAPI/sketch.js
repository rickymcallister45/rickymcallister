/*  p5  giphyApi  */


var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=dc6zaTOxFJmzC&q=";
var query = "america";


function setup() {
	noCanvas();
	var url = api + apiKey + query;
	loadJSON(url, gotData);
	}

function gotData(giphy) {
	for (var i = 0; i < 20; i++)
		var gif = createImg(giphy.data[i].images.original.url);
		gif.style('width', '700px');
		gif.style('height', '700px');


}	








function draw() {

}