var p5;
//*weatherAlert

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

var myp5 = new p5(weatherAlert);