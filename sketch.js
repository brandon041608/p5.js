let player = [];
let xPos;
let dir;
let backgroundImage;
function preload() {
  player[0] = loadImage('data/left.png');
  player[1] = loadImage('data/right.png');
  backgroundImage = loadImage('data/forest-web.jpg');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
} 

function setup() {
  createCanvas(windowWidth, windowHeight);
  xPos = 0;
  dir = 0;
}

function draw() {
  background(255);
  image(backgroundImage, 0, 0, windowWidth, windowHeight);
  image(player[dir], xPos, height-100, 100, 100);
}

function mouseMoved(){
  xPos = mouseX;
  if (mouseX - pmouseX < 0){
    dir = 0;
  }
  else{
    dir = 1;
  }
}

function touchMoved(){
  xPos = mouseX;
  if (mouseX - pmouseX < 0){
    dir = 0;
  }
  else{
    dir = 1;
  }
}