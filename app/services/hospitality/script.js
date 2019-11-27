function snow(){

  var w = window.innerWidth,
    h = window.innerHeight,
    canvas = document.getElementById('bubble'),
    ctx = canvas.getContext('2d'),
    particlesOnScreen = 245,
    particlesArray = [];
    
    function random(min, max) {
      return min + Math.random() * (max - min + 1);
    }
    
    function clientResize(ev) {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", clientResize);

    function createSnowFlakes() {
      
      for(var i =0; i < particlesOnScreen; i++){
        particlesArray.push({
          x: Math.random()* w,
          y: Math.random() * h,
          opacity: Math.random(),
          speedY: random(-11,11),
          speedX: random(-7, 15),
          radius: random(0.5, 4.2)
        })
      }
    }

    function drawSnowFlakes(){
      for (var i = 0; i < particlesArray.length; i++){
        var gradient = ctx.createRadialGradient(
            particlesArray[i].x,
            particlesArray[i].y,
            0,
            particlesArray[i].x,
            particlesArray[i].y,
            particlesArray[i].radius
          );
        gradient.addColorStop(0, "rgba(255,255,255," + particlesArray[i].opacity + ")");
        gradient.addColorStop(0, "rgba(210,236,242," + particlesArray[i].opacity + ")");
        gradient.addColorStop(0, "rgba(237,247,249," + particlesArray[i].opacity + ")");
      
        ctx.beginPath();
        ctx.arc(
          particlesArray[i].x,
          particlesArray[i].y,
          particlesArray[i].radius,
          0,
          Math.PI*2,
          false
          );
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    function moveSnowFlakes(){
      for(i = 0; i < particlesArray.length; i++){
        particlesArray[i].x += particlesArray[i].speedX;
        particlesArray[i].y += particlesArray[i].speedY;

        if(particlesArray[i].y > h){
          particlesArray[i].x = Math.random() * w * 1.5;
          particlesArray[i].y = -50;
        }
      }
    }

    function updateSnowfall() {
      ctx.clearRect(0, 0, w, h);
      drawSnowFlakes();
      moveSnowFlakes();
    }

    setInterval(updateSnowfall, 50);
    createSnowFlakes();
  }


  $('#hamburger').click(function(){
    $("#mainNav").toggle();
    $("#bubble").toggleClass("target");
    snow();
  });

$('.carousel-inner').prepend('<div class="item"><img  src="img/cpr.JPG"</img></div>');

$('.carousel-inner').prepend('<div class="item"><img  src="img/tips.JPG"</img></div>');


 for(i= 0; i < 6; i ++ ){
 $('.carousel-inner').prepend('<div class="item"><img  src="img/commentCard0' + i + 'PNG.png"</img></div>');
}

 for(i= 7; i < 10; i ++ ){
 $('.carousel-inner').prepend('<div class="item"><img src="img/commentCard0' + i + 'jpg.JPG"></img></div>');
}
