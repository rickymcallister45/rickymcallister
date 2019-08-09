//*https://console.firebase.google.com/


var canvas;
var score;
var button;
var listInput;
var submitButton;
var database;
var ref;
var ww;
var li= [];

function setup() {
  noCanvas();
  ww = windowWidth/2 - 100;
  var head = createElement('h1', 'GroceryList');
  head.position(ww, 50) 
  listInput = createInput('');
  listInput.position(ww, 150)
  listInput.style('text-align', 'center');
  listInput.class('toBeCentered');
  submitButton = createButton('submit');
  submitButton.mousePressed(submitList);
  submitButton.position(ww + 150, 150)
 
  

  var config = {
    apiKey: "AIzaSyC8UeCsv2xmACFJEHRx24DW-wJ_f8zD1N4",
    authDomain: "grocerylist-93df7.firebaseapp.com",
    databaseURL: "https://grocerylist-93df7.firebaseio.com",
    projectId: "grocerylist-93df7",
    storageBucket: "grocerylist-93df7.appspot.com",
    messagingSenderId: "600048005236"
  };
  firebase.initializeApp(config);
  database = firebase.database();

  var ref = database.ref('groceryList');
  ref.on('value', gotData, errData);
}

function submitList() {
  var data = {
    item:  listInput.value(),
	status: false
  }
  console.log(data);
  ref.push(data);
}

function gotData(data) {
	ref = database.ref('groceryList');
	var groceryList = selectAll('.groceryList');
	for(var i = 0; i < groceryList.length; i++){
	groceryList[i].remove();
}
console.log('48');

	var grocery = data.val();
	var keys = Object.keys(grocery);

	
for(var i = 0; i < keys.length; i++){
		var k = keys[i];
		var items = grocery[k].item;
		var status = grocery[k].status;
		li = createElement('li', items);
		li.class('groceryList');
		var parent = li.parent('grocery');
		parent.style('text-align','center');
}

}
function errData(err) {
	console.log('Error!!');
	console.log(err);
}


function draw() {
  
}