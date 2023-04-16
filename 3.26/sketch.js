// this is my favorite sketch ever
// everything rotates so crazily and unccontrollably it is so fun and i can keep watching this forever
// references this tiutorial and changed reaction and rotation speed
// link - https://www.youtube.com/watch?v=iUYCAECu_fE

let c;
let sSize = 150;
let sColor;
let sFont;
let rotationSpeed = 0.01;
let sTexture;

function preload() {
  sFont = loadFont('DK Business As Usual.ttf');
}

function setup() {
  c = createCanvas(1000, 1000, WEBGL);
  sColor = color(255, 200, 0);
  sTexture = createGraphics(sSize, sSize);
  sTexture.textFont(sFont);
  sTexture.textSize(sSize * 0.75);
  sTexture.textAlign(CENTER, CENTER);
  sTexture.fill("#ffee00");
  sTexture.text('S', sSize / 2, sSize / 2);
}

function draw() {
  background(0);
  noFill();
  stroke(sColor);
  push();
  rotateX(frameCount * rotationSpeed);
  rotateY(frameCount * rotationSpeed);
  rotateZ(frameCount * rotationSpeed);
  texture(sTexture);
  box(600); // change size of box ere
  pop();
}

function mouseMoved() {
  rotationSpeed = map(mouseX, 0, width, 0, 0.1);
}

function mousePressed() {
  saveCanvas(c, "letterS", "png");
}
