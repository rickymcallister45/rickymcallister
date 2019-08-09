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