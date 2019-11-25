var address = "http://www.vehiclehistory.com/paging-vin-report-data/new-report-wva.php";
var query = "?vin=";
var input;

var url = "https://www.reddit.com";
var subReddit = "/r/carporn.json";

function setup() {
	noCanvas();
	var button = select('#submit')
	button.mousePressed(visit);
	input = select('#vin')

	var api = url + subReddit;
	loadJSON(api, gotData);
}

function visit() {
	var site = address + query + input.value();
	window.open(site);
}

function gotData(reddit) {
	var background = createImg(reddit.data.children[2].data.url);
		background.style('width', '100%');
		background.style('height', '900px');
		background.style('z-index', '-1');
}
