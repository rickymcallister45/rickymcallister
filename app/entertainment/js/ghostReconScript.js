console.log("running");

$(document).ready(function(){
	
	
	var key = 'AIzaSyATpzdfvkMW6jt9rRpj99Dp57LwW77nxMA';
	var playlistID = 'PL3Rb7VW4urJcpcdiRFRI6BadY8jzySKBJ';
	var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';
	var options = {
		part: 'snippet',
		key: key,
		maxResults: 20,
		playlistId: playlistID
	}

	$(".menu-icon").click(function(){
 				$(".menu-icon").toggleClass("active")
 			})
 			$(".menu-icon").click(function(){
 				$(".sidebar").toggleClass("active")
 			})
 			$(".menu-icon").click(function(){
 				$(".sidebarLeft").toggleClass("activeLeft")
 			})

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
		<iframe width="1100" height="800" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		`);
}

function resultsLoop(data) {

	$.each(data.items, function(i, item) {

		var thumb = item.snippet.thumbnails.medium.url;
		var title = item.snippet.title;
		var description = item.snippet.description.substring(0,100);
		var date = item.snippet.publishedAt.substring(0,10);
		var vid = item.snippet.resourceId.videoId;

		$('main').append(`
		<article class='target' data-key="${vid}">
			<img src="${thumb}" class="thumb">
			<div class="details">
				<h4>${title}</h4>
				<p>${description}</p>
				
			</div>
		</article>
		`);
	});
}

$('main').on('click', 'article', function(){
			var waka = $(this).attr('data-key');
			mainVid(waka);			
		});

});
