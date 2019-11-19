/// will clean code up shortly

$(document).ready(function(){
	
var date = new Date();
var dateY = date.getFullYear();
var dateM = date.getMonth() + 1;
var dateD = date.getDate();
var dateH = date.getHours();

var regex = /\d{4}.\d{2}.\d{2}/;

var currentDate = dateY + '-' + dateM + '-' + dateD ;

 
    
    
	var key = 'AIzaSyATpzdfvkMW6jt9rRpj99Dp57LwW77nxMA';
	var playlistID = 'PL3Rb7VW4urJcotm4ABFLrFbV3RSrwPpiI';
	var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';
	var options = {
		part: 'snippet',
		key: key,
		maxResults: 2,
		playlistId: playlistID
	}

liveNow();

function liveNow() {
	$.getJSON(URL, options, function(data){
		//console.log(data);
		var id = data.items[0].snippet.publishedAt;
		//console.log(id);
		
		var match = id.match(regex);
    var match2 = match[0];
    
		var matches = id.match(/^\d{4}.\d{2}.\d{2}T(\d{2}).*$/);
    //console.log(matches[1]);
    //console.log(dateH);
    var hourTest = matches[1];
		
		if(match2 === currentDate){
		  if(dateH + 5 >= hourTest){
      document.getElementById("liveNow").style.visibility = "visible";
		  }
		  }else{
      console.log('offline');
    }
		
	});
}});


