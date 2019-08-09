var appID = '&appid=<appid>';
var clientid = '?clientid=<JcbK9LhxHuZZVE6Q3VXPmG0AGTaVrDZJ>';
var clientsecret = 'I4WFyLeBZg9Wp4wH';
var deviceID = '&deviceid=<deviceid>';
var deviceName = '&devicename=<rickyhueapp>';
var state = '&state=<state>';
var response_type = '&response_type=code';
var auth = 'https://api.meethue.com/oauth2/auth';




authorization_code = '';
access_token = '';
Authorization: Bearer + access_token;


var url = https://api.meethue.com/bridge/<whitelist_identifier>


//*get
var authURL= auth + clientid + appID + deviceID + deviceName + state + response_type;
 
  



lightsOn = function() {
  	console.log('mouseClicked');
	hue.httpDo(

		/api/<username>/lights,
 
		 {method: 'Put',
		state:{"on":true}}	)	}




lightStatus = function(){
	httpDo(hueUrl, 
		 {method: 'Get',
		state:{"on":true}}	)


}


lightsOnLivingRoom = function(){

	"hue": 50000,
	"on": true,
	"bri": 200

}


lightsOnBathroom = function(){

}