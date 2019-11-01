

    angular.module('todoApp', [])
      .controller('TodoListController', function() {
        var todoList = this;
        todoList.todos = [
          {text:'learn AngularJS', done:true},
          {text:'build an AngularJS app', done:false}];
     
        todoList.addTodo = function() {
          todoList.todos.push({text:todoList.todoText, done:false});
          todoList.todoText = '';
        };
     
        todoList.remaining = function() {
          var count = 0;
          angular.forEach(todoList.todos, function(todo) {
            count += todo.done ? 0 : 1;
          });
          return count;
        };
     
        todoList.archive = function() {
          var oldTodos = todoList.todos;
          todoList.todos = [];
          angular.forEach(oldTodos, function(todo) {
            if (!todo.done) todoList.todos.push(todo);
          });
        };
      });

 /* p5 watch00*/

	
let img;
var canvas;




function preload(){
	img = loadImage("img/watch04.png");
	
}


function setup() {
	canvas = createCanvas(200, 200);
	canvas.position(50, 50);
	image(img, 0, 0, 200, 200);
	angleMode(DEGREES);
	
}


function draw() {
	background(img);
	translate(93, 98);
	rotate(-90);

	let hr = hour();
	let mn = minute();
	let sc = second();

	strokeWeight(3);
	stroke(0);
	noFill();
	let secondAngle = map(sc, 0, 60, 0, 360)
	//arc(0, 0, 300, 300, 0, secondAngle);

	stroke(150, 100, 255);
	let minuteAngle = map(mn, 0, 60, 0, 360)
	//arc(0, 0, 280, 280, 0, minuteAngle);

	stroke(150, 255, 100);
	let hourAngle = map(hr % 12, 0, 12, 0, 360)
	//arc(0, 0, 260, 260, 0, hourAngle);

	

	push();
	rotate(secondAngle);
	stroke(255, 0, 0);
	line(0 , 0, 50, 0);
	pop();

	push();
	rotate(minuteAngle);
	stroke(192, 192, 192);
	line(0 , 0, 40, 0);
	pop();

	push();
	rotate(hourAngle);
	stroke(192, 192, 192);
	line(0 , 0, 30, 0);
	pop();

	stroke(192, 192, 192);
	point(0,0);

}
	
