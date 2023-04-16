// i wanted to try creating interacion with actual mouse movement so i made this
// learnt how to change size of text with mouse movment
// and also did change of colro when u move the mouse
// reference - https://p5js.org/reference/#/p5/map

let c;

let sSize = 300; 
let sColor; 

function setup() {
  createCanvas(1000, 1000);
  background ('#000000')

  sColor = color('#379634');
}

function draw() {
    background ('#000000')
  
  // drawing shape of S?
  let sX = width / 4 - sSize / 2;
  let sY = height / 2 - sSize / 4;
  fill(sColor);
  noStroke();
  textSize(sSize);
  text("S", sX, sY + sSize);
}

function mouseMoved() {
 
  sSize = map(mouseX, 0, width, 10, 500);
  let r = map(mouseX, 0, width, 0, 255);
  let g = map(mouseY, 0, height, 0, 135);
  let b = map(mouseX, 0, width, 255, 0);
  sColor = color(r, g, b);
}

function mousePressed() {
    saveCanvas(c,"03.25", "png")
}