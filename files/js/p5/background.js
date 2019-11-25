var url = "https://www.reddit.com";
var subReddit = "/r/EarthPorn.json";

function setup() {
	noCanvas();
	var api = url + subReddit;
	loadJSON(api, gotData);
}

function gotData(reddit) {
	var background = createImg(reddit.data.children[3].data.url);
		background.style('width', '100%');
		background.style('height', '960px');
		background.style('z-index', '-1');	
	}
