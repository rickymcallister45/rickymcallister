var p5;

var backgroundTool = function(b) {

var redditApi;
var number;
var backgroundTest;
var redditUrl = "https://www.reddit.com";
var subReddit = ['/r/EarthPorn.json',
 		'/r/MostBeautiful.json',
 		'/r/CozyPlaces.json',
		'/r/pics.json', 
		'/r/spaceporn.json',
		'/r/naturepics.json',
		'/r/ImaginaryWildlands.json',
		'/r/CityPorn.json',
		'/r/sunset.json',
		'/r/RoomPorn.json',
		'/r/DestructionPorn.json',
		'/r/Cyberpunk.json',
		'/r/raining.json',
		'/r/neoncities.json'
];

b.setup = function() {
	b.noCanvas();
	number = b.floor(b.random(subReddit.length));
	redditApi = redditUrl + subReddit[number];
	b.loadJSON(redditApi, b.gotData);
}

b.gotData = function(reddit) {
	number = number + 2;
	var path = reddit.data.children[number].data.url;
	backgroundTest = reddit.data.children[number].data.post_hint;
		if(backgroundTest != "image"){
	console.log('First file was not an image');
	path = reddit.data.children[6].data.url;
	console.log(redditApi);
	var background = b.createImg(path);
		background.position(0, 0);
		background.style('z-index', '-1');
		background.style('width', '100%');
		background.style('height', '960px');
	}else{
	console.log(redditApi);
	var background = b.createImg(path);
		background.position(0, 0);
		background.style('z-index', '-1');
		background.style('width', '100%');
		background.style('height', '960px');	
	}
}}

var myp5 = new p5(backgroundTool);