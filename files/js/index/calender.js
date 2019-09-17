var windowWidthCal = $(window).width();
var windowHeightCal = $(window).height();

$('#calenderContainer').append('<div id="calender">'); 
$('#calender').append('<iframe src="https://calendar.google.com/calendar/embed?src=rickymcallister45%40gmail.com&ctz=America%2FNew_York" style="border: 0" width="' + windowWidthCal + '" height="' + windowHeightCal + '" frameborder="0" scrolling="no"></iframe>');
$('#calenderContainer').append('<div id="backArrowDiv"><i class="fas fa-angle-double-left"></i></div>'); 
