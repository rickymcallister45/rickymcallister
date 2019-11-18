var liveNowJsonData;

function liveNow(){
var request = new XMLHttpRequest();
var url = 'https://www.googleapis.com/youtube/v3/search?';
var snippet = 'part=snippet&channelId=UCHUrEa6E1l5vwzvXMGEPScg&type=video&eventType=live&key=AIzaSyATpzdfvkMW6jt9rRpj99Dp57LwW77nxMA';


    request.open('GET', url + snippet , true);
    request.onload = function() {
          var data = JSON.parse(request.responseText);
          if(data.pageInfo.totalResults === 0){
            liveNowJsonData = 'offline';
            console.log(liveNowJsonData);
          }else{
            document.getElementById("liveNow").style.visibility = "visible";
            liveNowJsonData = data.items.snippet.liveBroadcastContent;
            console.log(liveNowJsonData);
            
          }
      }
    request.send();
}

liveNow();
