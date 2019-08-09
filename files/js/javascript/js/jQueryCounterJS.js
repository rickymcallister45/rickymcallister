
jQuery(function($) {
	$('#button').click(function () {
		
		var $counter = $('#counter');
		
		$counter.text(+$counter + 1);
	});
});
