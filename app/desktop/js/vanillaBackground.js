function background(){
var request = new XMLHttpRequest();
var url = 'https://www.reddit.com/r/';
var differnetSites = ['roomporn', 'CozyPlaces', 'MostBeautiful', 'pic', 'carporn'. 'AbandonedPorn', 'EarthPorn', 'SkyPorn', 'astrophotography', 'spaceporn', 'itookapicture', 'Eyebleach'];

var randomNumberToSelectSite = Math.floor(Math.random() * 11);
var siteTheBackroundImageIsComingFrom = differnetSites[randomNumberToSelectSite];
console.log('siteTheBackroundImageIsComingFrom = ' + url + siteTheBackroundImageIsComingFrom);


var backgroundURL; 
    request.open('GET', url + siteTheBackroundImageIsComingFrom + '.json', true);
    request.onload = function() {
          var data = JSON.parse(request.responseText);
          var i = Math.floor(Math.random() * 11) + 1;
          backgroundURL = (data.data.children[i].data.url);
          document.body.style.backgroundImage = "url(" + backgroundURL + ")";
          
      }
      request.send();
}

background();
