var url = "https://www.reddit.com";
var subReddit = "/r/GifRecipes.json";


function setup() {
	noCanvas();
	var api = url + subReddit;
	loadJSON(api, gotData);
	
}

function gotData(reddit) {
	var recipe = createImg(reddit.data.children[2].data.media.oembed.thumbnail_url);
	recipe.style("padding-left", "400px");
	recipe.style('width', '900px');
	recipe.style('height', '900');
}