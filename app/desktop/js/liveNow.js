function liveNow(){
var request = new XMLHttpRequest();
var url = 'https://www.googleapis.com/youtube/v3/search?';
var snippet = 'part=snippet&channelId=UCHUrEa6E1l5vwzvXMGEPScg&type=video&eventType=live&key=AIzaSyATpzdfvkMW6jt9rRpj99Dp57LwW77nxMA';

var jsonData;
    request.open('GET', url + snippet + '.json', true);
    request.onload = function() {
          var data = JSON.parse(request.responseText);
          jsonData = data.items.snippet.liveBroadcastContent;
          console.log(jsonData);
          
      }
      request.send();
}

liveNow();
