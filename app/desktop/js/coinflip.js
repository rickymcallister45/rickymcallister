function coinFlip(){

var timer = 2000;

var number =  Math.floor((Math.random() * 2) + 1);

function hideCoin() {
  var coinArray = 0;
  hideThisCoin = document.getElementById("coin").remove();
}

function heads() {
  var heads = document.createElement("IMG");
  heads.setAttribute("src", "img/heads.png");
  heads.setAttribute("width", "200");
  heads.setAttribute("height", "200");
  heads.setAttribute("id", "coin");
  heads.style.visibility = "visible";
  heads.style.position = "absolute";
  heads.style.top = "35vh";
  heads.style.left = "45vw";
  document.body.appendChild(heads);
}

function tails() {
  var tails = document.createElement("IMG");
  tails.setAttribute("src", "img/tails.png");
  tails.setAttribute("width", "200");
  tails.setAttribute("height", "200");
  tails.style.visibility = "visible";
  tails.style.position = "absolute";
  tails.style.top = "35vh";
  tails.style.left = "45vw";
  tails.setAttribute("id", "coin");
  document.body.appendChild(tails);
}

function decision(number) {
			if (number == 1) {
			  console.log("heads");
				heads();
				} else {
				console.log("tails");
				tails();
			  }
      }
      
decision(number);
setTimeout(hideCoin, timer);
}

document.onkeydown = function(e) {
  if (e.keyCode === 32) {
    coinFlip();
    
  }
};
