$(document).ready(function(){
	var width = $(window).width();

var height = $(window).height();
	
	var key = 'AIzaSyATpzdfvkMW6jt9rRpj99Dp57LwW77nxMA';
	var playlistID = 'PL3Rb7VW4urJcotm4ABFLrFbV3RSrwPpiI';
	var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';
	var options = {
		part: 'snippet',
		key: key,
		maxResults: 1,
		playlistId: playlistID
	}


loadVids();

function loadVids() {
	$.getJSON(URL, options, function(data){
		console.log(data);
		var id = data.items[0].snippet.resourceId.videoId;
		mainVid(id);
		resultsLoop(data);
	})
}

function mainVid(id) {
	$('#video'). html(`
		<iframe width="${width}" height="${height}" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		`);
}});
