// for this one i wanted to make the cursor change colro randomly between 2 shades
// i wanted to make it more complex but it took me some time to figure out how to just make the color change react with movment of the mouse
// reference - https://www.youtube.com/watch?v=kyN0pe42uhM


let font;
let s = "S";
let sSize = 400;
let sColor = 0;

function preload() {
  font = loadFont("GoldenTrail-KC.otf"); 
}

function setup() {
  createCanvas(1000, 1000);
  background('#000000')
  textFont(font);
  textSize(sSize);
}

function draw() {
  background(190);
  fill(sColor);
  text(s, mouseX, mouseY);
}

function mouseMoved() {
  push();
  fill(140);
  text(s, mouseX, mouseY);
  pop();
  
  sColor += 30; // amount color of S increases by 10 with each move
  if (sColor > 255) { // changing color back to 0 after it reaches 255
    sColor = 0;
  }
}
