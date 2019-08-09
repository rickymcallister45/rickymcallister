console.log('running');

$(document).ready(function(){
  //*background-image
  let randomNumber = Math.floor((Math.random() * 13) + 0);
$.getJSON('https://www.reddit.com/r/rickyMcallisterDotCom.json', function(recieved) {
	var redditBackground = recieved.data.children[randomNumber].data.url;
	$('body').css('background-image', `url(${redditBackground})`);
});
	//*powerButton
	$('#power').click(function(){
		$('#nav').toggleClass('hide-item active');
		$('#left-panel').toggleClass('hide-item');
		$('#right-panel').toggleClass('hide-item');
		$('#bills').removeClass('active');
		$('#contacts').removeClass('active');
		$('#bookmarks').removeClass('active');
		$('#podcasts').removeClass('active');
		$('#events').removeClass('active');
		$('#radio').removeClass('active').addClass('hide-item');
		

		if('.active' == true){
			removeClass('active')
		}
	})
	//*searchBar
	$('#search').click(function(){
		setTimeout(function(){ $('#searchFocus').focus(); }, 600);
		$('.menu-item').toggleClass('hide-search')
		$('.search-form').toggleClass('searchActive')
	})
	$( "input" ).keyup(function(enter) {
    var value = $( this ).val();
    console.log(value);
    if (enter.keyCode == 13) {
    	window.open('http://www.google.com/search?q=' + value + '&btnI');
    }
	})
	//*
	$('#ticker').click(function(){
		$(this).prop('onclick', null);
		$('#radio').toggleClass('hide-item');

	})
	//*contacts
	$('#contact').click(function(){
		$('#contacts').toggleClass('active hide-item');
	})
	//*podcasts
	$('#podcast').click(function(){
		$('#podcasts').toggleClass('hide-item active');
	})
	//*bookmarks
	$('#bookmark').click(function(){
		$('#bookmarks').toggleClass('hide-item active');
	})
	//*bills
	$('#bill').click(function(){
		$('#bills').toggleClass('hide-item active');
	})
	//*events
	$('#event').click(function(){
		$('#events').toggleClass('hide-item active');
	})
})

