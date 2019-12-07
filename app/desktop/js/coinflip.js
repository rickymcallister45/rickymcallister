var p5;

var coinFlip = function(cf){

var time = 2000;
var heads = "img/heads.png";
var tails = "img/tails.png";
var number;
var answer;

cf.decision = function(number) {
			if (number == 1) {
				console.log("heads");
				answer = cf.createImg(heads);
				} else {
				console.log("tails");
				answer = cf.createImg(tails);
			}	}	

cf.keyTyped =	function(){
	if (cf.keyCode === 32) { 
		
		console.log("coinFlip Starting!!");
		var number =  Math.floor((Math.random() * 2) + 1)
		console.log(number);
 
		setInterval(cf.timeIt, time);
		cf.decision(number);
		answer.position(825,225);
		}else{
		return(false);	

}	}

cf.timeIt = function() {
		answer.remove();
	}
cf.draw = function(){}
}

var myp5 = new p5(coinFlip);
