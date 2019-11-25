//*https://console.firebase.google.com/


var canvas;
var score;
var button;
var initialInput;
var submitButton;
var database;


function setup() {
  
  toDoInput = createInput();
  toDoInput.position(700,75);
  toDoInput.id('todo');
  
  submitButton = createButton('submit');
  submitButton.position(800,0);
  submitButton.id('button');
  submitButton.mousePressed(submitData);

  var config = {
    apiKey: "AIzaSyAFW7vcSA0EI-nBc-qVC4afAr2dg639YLY",
    authDomain: "todolist-b6f88.firebaseapp.com",
    databaseURL: "https://todolist-b6f88.firebaseio.com",
    projectId: "todolist-b6f88",
    storageBucket: "todolist-b6f88.appspot.com",
    messagingSenderId: "714785571691"
  };
  firebase.initializeApp(config);
  database = firebase.database();
  var ref = database.ref('toDo');
  ref.on('value', gotData, errData);
  
	}

function submitData() {
  var data = {
    title: toDoInput.value(),
    done: false
  }
	ref = database.ref('toDo');  
	ref.push(data);
  
}
console.log(47);
 

function gotData(data) {
	var todolisting = selectAll('.todoListing');
	for(var i = 0; i < todolisting.length; i++){
	todolisting[i].remove();
}


	var toDo = data.val();
	var keys = Object.keys(toDo);
	for(var i = 0; i < keys.length; i++){
		var k = keys[i];
		var title = toDo[k].title;
		var done = toDo[k].done;
		var li = createElement('li', title + ' : ' + done);
		li.class('todoListing');
		li.parent('todoList');

}

}

function errData(err) {
	console.log('Error!!');
	console.log(err);
}

function draw() {
 
}
