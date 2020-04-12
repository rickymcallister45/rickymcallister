

function createYoutubeBackground() {
  var youtubeBackgroundElement = "<div id='youtubeVideoDiv'><iframe src='https://www.youtube.com/embed/9jHwwJgSTR4?autoplay=1&mute=1' frameborder='0' allow='accelerometer;autoplay;encrypted-media;gyroscope;picture-in-picture';</iframe></div>";
  
  var youtubeBackgroundElementTwo = "<div id='exitYoutubeVidHolder'><i class='far fa-times-circle'id='exitYoutubeVidButton'></i></div>";
  
  var youtubeBackgroundContainerRemake = "<div id='youtubeBackgroundContainer'></div>";
  $('body').append(youtubeBackgroundContainerRemake);
  $("#youtubeBackgroundContainer").append(youtubeBackgroundElement);
  $("#youtubeVideoDiv").append(youtubeBackgroundElementTwo);
  $('#power').css('color','#ffffff00');
  //on button click remove container

$("#exitYoutubeVidButton").click(function(){
  
  
  $("#youtubeBackgroundContainer").remove();
  $('#power').css('color','white');
});
}

var exitButtonTimeout = null;

//click button create container div with video and button


$(document).on('mousemove', function() {
  //on move show button
  
  $("#exitYoutubeVidButton").css('top','50px');
  
  //hide button
  
    clearTimeout(exitButtonTimeout);

    exitButtonTimeout = setTimeout(function() {
        console.log('Mouse idle for 3 sec');
        $("#exitYoutubeVidButton").css('top','-200px');
    }, 3000);
});


