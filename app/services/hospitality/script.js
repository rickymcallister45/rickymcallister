$(document).ready(function(){
  $('#hamburger').click(function(){
    if($('#mainNav').hasClass('show')){
      $('#mainNav').removeClass('show');
    }else{
    $('#mainNav').addClass('show');
    }
  });




$('.carousel-inner').prepend('<div class="item"><img  src="img/cpr.jpg"</img></div>');

$('.carousel-inner').prepend('<div class="item"><img  src="img/tips.jpg"</img></div>');


 for(i= 0; i < 6; i ++ ){
 $('.carousel-inner').prepend('<div class="item"><img  src="img/commentCard0' + i + 'PNG.png"</img></div>');
}

 for(i= 7; i < 10; i ++ ){
 $('.carousel-inner').prepend('<div class="item"><img src="img/commentCard0' + i + 'jpg.jpg"></img></div>');
}
});
