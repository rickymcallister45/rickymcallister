let request = new XMLHttpRequest();
let url = 'https://www.reddit.com/r/';
let differnetSites = ['roomporn', 'CozyPlaces', 'MostBeautiful', 'pic', 'carporn', 'AbandonedPorn', 'EarthPorn', 'SkyPorn', 'astrophotography', 'spaceporn', 'itookapicture', 'Eyebleach'];
let i = Math.floor(Math.random() * 11) + 1;
let randomNumberToSelectSite = Math.floor(Math.random() * 11);


function background(){
let siteTheBackroundImageIsComingFrom = differnetSites[randomNumberToSelectSite];
console.log('siteTheBackroundImageIsComingFrom = ' + url + siteTheBackroundImageIsComingFrom);


let backgroundURL;
    
    request.open('GET', url + siteTheBackroundImageIsComingFrom + '.json', true);
    request.onload = function() {
          let data = JSON.parse(request.responseText);
          
          //i = Math.floor(Math.random() * 11) + 1;
          
          backgroundURL = (data.data.children[i].data.url);
          document.body.style.backgroundImage = "url(" + backgroundURL + ")";
          
      }
      request.send();
}

background();

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            randomNumberToSelectSite--;
            if(randomNumberToSelectSite < 0){
              randomNumberToSelectSite = 11;
            }
            background();
            break;
        case 38:
            i++;
            if(i > 24){
              i = 2;
            }
            background();
            break;
        case 39:
            randomNumberToSelectSite++;
            if(randomNumberToSelectSite > differnetSites.length-1){
              randomNumberToSelectSite = 0;
            }
            background();
            break;
        case 40:
            i--;
            if(i < 2){
              i = 24;
            }
            background();
            break;
    }
};
