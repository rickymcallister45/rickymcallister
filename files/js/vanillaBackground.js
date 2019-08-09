
function background(){
var request = new XMLHttpRequest();
var url = 'https://www.reddit.com/r/roomporn.json';
var backgroundURL; 
    request.open('GET', url, true);
    request.onload = function() {
          var data = JSON.parse(request.responseText);
          var i = Math.floor(Math.random() * 11) + 1;
          backgroundURL = (data.data.children[i].data.url);
          console.log(backgroundURL);
          document.body.style.backgroundImage = "url(" + backgroundURL + ")";
          
      }
      request.send();
}

background();