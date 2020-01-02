console.log("running");

$(document).ready(function(){
	
	
	var key = 'AIzaSyATpzdfvkMW6jt9rRpj99Dp57LwW77nxMA';
	var playlistID = 'PL3Rb7VW4urJe2yqaVf-9pwvGPUINaf5Ov';
	var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';
	var options = {
		part: 'snippet',
		key: key,
		maxResults: 50,
		playlistId: playlistID
	}

	

loadVids();

function loadVids() {
	$.getJSON(URL, options, function(data){
		console.log(data);
		var id = data.items[0].snippet.resourceId.videoId;
		resultsLoop(data);
	})
}

function resultsLoop(data) {

	$.each(data.items, function(i, item) {
		var youtubePath = 'https://www.youtube.com/watch?v=';
		var thumb = item.snippet.thumbnails.medium.url;
		var title = item.snippet.title;
		var description = item.snippet.description.substring(0,100);
		var date = item.snippet.publishedAt.substring(0,10);
		var vid = item.snippet.resourceId.videoId;
		var completePath = youtubePath + vid

		$('.lockpickingVideos').append('<a href="' + completePath +  '">')
			  		.append('<img src="' + thumb + '" class="videoStyling"></a>');
	});
}


});
