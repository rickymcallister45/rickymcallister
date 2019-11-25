console.log('running');

var Twit = require('twit');

var T = new Twit({
	consumer_key: "HFbWmP47aeJTMRA57GJCatNI4", 
	consumer_secret: "MrBBm5yghwizVbNCC1KYEkAA6dVJqWAii7Ux2bCCl2rZhKB6V6",
	access_token: "3002458397-mEFf670R592rdGxukPiEB3L7PiLuGOeYBIw0hlR",
	access_token_secret: "v6hEOofSo2CsLFfPqMYC8R8Sj8onjw7E7cjSikkSBkwp2"
});

var params = {
		q: 		'shaking',
		count: 	'20'
	}

T.get('search/tweets', params, gotData);
	

function gotData(err, data, response) {
  var tweets = data.statuses;
  for(i=0;i<tweets.length; i++){
	console.log(tweets[i].text);
  }
};
	
