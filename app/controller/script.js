const { Discovery } = require('magic-home');
 
let discovery = new Discovery();
discovery.scan(500).then(devices => {
   console.log(devices);
});

function lightsOn(){
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://74.140.242.152:6/api/ozUDQgb4XNqNmcLhkg9geZpURRVI7G9P7mXLNtZ3/groups/1/action",
  "method": "PUT",
  "headers": {
    "content-type": "application/json"
  },
  "processData": false,
  "data": "{\"on\": true,\n\t\"hue\": 46980\n}\n"
}

$.ajax(settings).done(function (response) {
  console.log("hue response:" + response);
});
}

function lightsOff(){
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://192.168.06/api/ozUDQgb4XNqNmcLhkg9geZpURRVI7G9P7mXLNtZ3/groups/1/action",
  "method": "PUT",
  "headers": {
    "content-type": "application/json"
  },
  "processData": false,
  "data": "{\"on\": false}\n"
}

$.ajax(settings).done(function (response) {
  console.log("hue response:" + response);
});
}
