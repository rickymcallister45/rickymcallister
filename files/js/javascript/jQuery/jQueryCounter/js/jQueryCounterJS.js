var $counter = 0;	

jQuery(function($) {
	$('#button').click(function() {
		$('#counter').text($counter++);
	});
});
