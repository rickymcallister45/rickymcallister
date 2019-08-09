var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', https://api.intrinio.com/data_point?identifier={symbol}&item={tag});
ourRequest.onload = function(){
	console.log(ourRequest.reponseText);
};
ourRequest.send();