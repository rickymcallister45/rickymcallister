function weatherAlert(){
var request = new XMLHttpRequest();
var url = 'https://api.weather.gov/alerts/active/zone/OHC049';
var weatherAlertURL; 
    request.open('GET', url, true);
    request.onload = function() {
          var data = JSON.parse(request.responseText);
          if(data.features.length === 0 ){
              console.log('There are no weather warnings currently');
          }else{
          weatherAlertURL = (data.features[0].properties.description);
          console.log(weatherAlertURL);
          alert(data.features[0].properties.description)
          }
        }
      request.send();
    }
weatherAlert();  
