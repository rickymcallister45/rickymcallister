$(document).ready(function() {
    $(".menu-icon").click(function() {
    	$("#clock").toggleClass("ClockActive")
        $(".menu-icon").toggleClass("active")
    }), $(".menu-icon").click(function() {
        $(".sidebar").toggleClass("active")
    }), $("html").keydown(function(c) {
        9 == c.keyCode && window.open("http://rickymcallister.com/app/desktop/index.html", "rickymcallister")
    })
    
    $(".leftArrow").click(function() {
        $("#calenderContainer").toggleClass("calanderActive");
        $("#clock").toggleClass("ClockActive");
    });

    $("#backArrowDiv").click(function() {
        $("#calenderContainer").removeClass("calanderActive");
        $("#clock").toggleClass("ClockActive");
    });
    
});