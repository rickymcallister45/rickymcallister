console.log('Running');

let numberOfBubbles = 75;

let bubbles = [];
let bubble;
let holo;

function preload() {
  let holo = loadImage('./holo.png');
}




function setup(){
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  for(let i = 0; i < numberOfBubbles; i++){
  let bubble_X_position = random(width);
  let bubble_Y_position = random(height);
  let bubbleRadius = random(10, 50);
  
  let bubble = new Bubble(bubble_X_position, bubble_Y_position, bubbleRadius);
  bubbles.push(bubble);
  }
}

function mouseClicked(){
  for(let i = 0; i < bubbles.length; i++){
    if(bubbles[i].bubbleHovered(mouseX, mouseY)) {
      bubbles.splice(i, 1);
    }
  }
}
  
  

function draw(){
  background(0);
  
  cursor(holo);
  
  for(let i = 0; i < bubbles.length; i++){
    if(bubbles[i].bubbleHovered(mouseX, mouseY)) {
      bubbles[i].changeColor(125);
    }else{
      bubbles[i].changeColor(0);
    }
    bubbles[i].move();
    bubbles[i].show();
  }
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}




class Bubble {
  constructor(bubble_X_position, bubble_Y_position, bubbleRadius) {
   this.bubble_X_position = bubble_X_position;
   this.bubble_Y_position = bubble_Y_position;
   this.bubbleRadius = bubbleRadius;
   this.brightness = 0;
  }
  
  changeColor(brightnessLevel){
    this.brightness = brightnessLevel;
  }
  
  bubbleHovered(pixel_X, pixel_Y) {
    let bubbleDiameter = dist(pixel_X, pixel_Y, this.bubble_X_position, this.bubble_Y_position);
    
      if(bubbleDiameter < this.bubbleRadius) {
        return true;
      }else{
        return false;
      }
  }
  
  move() {
    this.bubble_X_position = this.bubble_X_position + random(-5, 5);
    this.bubble_Y_position = this.bubble_Y_position + random(-5, 5);
  }
  
  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 125)
    ellipse(this.bubble_X_position, this.bubble_Y_position, this.bubbleRadius * 2);
  }
  
}
