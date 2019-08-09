$(document).ready(function(){
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
		$('#gifs').removeClass('active').addClass('hide-item');
		if('.active' == true){
			removeClass('active')
		}
	})
	 
	$('#ticker').click(function(){
		$(this).prop('onclick', null);
		$('#radio').toggleClass('active');
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
	//*gifs
	$('#gifs').click(function(){
		$('#gifs').toggleClass('hide-item active');
	})
})

