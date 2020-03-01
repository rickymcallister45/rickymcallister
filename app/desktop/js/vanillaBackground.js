let request = new XMLHttpRequest();
let url = 'https://www.reddit.com/r/';

let differnetSites = ['rainbow6','roomporn', 'CozyPlaces', 'MostBeautiful', 'pic', 'carporn', 'AbandonedPorn', 'EarthPorn', 'SkyPorn', 'flowers', 'notitle', 'itookapicture', 'Eyebleach', 'CoolPics', 'ExposurePorn', 'MacroPorn', 'waterporn', 'CityPorn', 'itookapicture', 'AccidentalRenaissance', 'CouldBeArt', 'WhatIsThisPainting', 'MapPorn', 'Art', 'wallpapers', 'WeatherPorn','BotanicalPorn', 'VillagePorn', 'LakePorn', 'BeachPorn', 'wallpaper', 'ImaginaryLandscapes', 'LightGraffiti', 'SeaPorn', 'FirePorn', 'DesertPorn', 'WinterPorn', 'lightpainting', 'AutmnPorn', 'GeologyPorn', 'SpringPorn', 'SummerPorn', 'LavaPorn', 'ArchitecturePorn', 'HousePorn', 'CabinPorn', 'InfrastructurePorn', 'F1Porn', 'BoatPorn', 'DestructionPorn', 'BridgePorn', 'SteamPorn', 'RoadPorn', 'AnimalPorn', 'AgriculturePorn', 'TeaPorn', 'BonsaiPorn', 'FractalPorn', 'earthview', 'HI_Res', 'tuckedinkitties'];

let randomPicture = Math.floor(Math.random() * 11) + 1;
let randomNumberToSelectSite = Math.floor(Math.random() * differnetSites.length);

function background(){
let siteTheBackroundImageIsComingFrom = differnetSites[randomNumberToSelectSite];

console.log('siteTheBackroundImageIsComingFrom = ' + url + siteTheBackroundImageIsComingFrom);

let backgroundURL;
  
    request.open('GET', url + siteTheBackroundImageIsComingFrom + '.json', true);
        request.onload = function() {
          let data = JSON.parse(request.responseText);
          console.log(data);
          console.log(randomPicture);
          var test = data.data.children[randomPicture].data.post_hint;
          console.log(test);
          backgroundURL = (data.data.children[randomPicture].data.url);
          
          if(test === 'image'){
          document.body.style.backgroundImage = "url(" + backgroundURL + ")";
          }else{
            document.body.style.backgroundImage = "url(../../files/gif/christmas.gif)";
            
          }
      }

      request.send();
    }

background();

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            randomNumberToSelectSite--;
            if(randomNumberToSelectSite < 0){
              randomNumberToSelectSite = differnetSites.length;
            }
            background();
            break;
        case 38:
            randomPicture++;
            if(randomPicture > 24){
              randomPicture = 2;
            }
            background();
            break;
        case 39:
            randomNumberToSelectSite++;
            if(randomNumberToSelectSite > differnetSites.length - 1){
              randomNumberToSelectSite = 0;
            }
            background();
            break;
        case 40:
            randomPicture--;
            if(randomPicture < 2){
              randomPicture = 24;
            }
            background();
            break;
    }
};
