var url = "https://www.reddit.com";
var subReddit = "/r/Rainbow6/top.json";
var result;
var useful = [];

function setup() {
	noCanvas();
	var api = url + subReddit;
	loadJSON(api, gotData);
}

function gotData(reddit) {
	for( var i = 0; i < 25; i++) {
	result = reddit.data.children[i].data.link_flair_text;

	if(result === 'Useful'){
	var lol = createDiv('<br>' + '<br>');
	lol.useful = createA(reddit.data.children[i].data.url, reddit.data.children[i].data.title);
	lol.useful.style('font-size', '40px');
	lol.useful.style('background-color', 'gray');
	}else{console.log('No Tips Currently');}	}	}



