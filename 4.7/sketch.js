// this is an iteration of my previous sketch 3.26
// unfortunatle it turned out nothing like i expected to
// i wanted to do more kinetic type experiments but i could not figure out how exactly i can do what i imagined.
// i wanted to make this 3d object that spins a hexagonal prism but i coukdnt and it becam a ring instead
// link - https://www.youtube.com/watch?v=iUYCAECu_fE


let c;
let sSize = 80;
let sColor;
let sFont;
let rotationSpeed = 0.005;
let sTexture;

let sRotation = 0;
let sSpin = 0;

function preload() {
  sFont = loadFont('Dagsen_Outline.otf');
}

function setup() {
  c = createCanvas(1000, 1000, WEBGL);
  sColor = color(0);
  background("#FFCAE9");
  sTexture = createGraphics(sSize, sSize);
  sTexture.textFont(sFont);
  sTexture.textSize(sSize * 0.75);
  sTexture.textAlign(CENTER, CENTER);
  sTexture.fill("#fff");
  sTexture.strokeWeight(3);
  sTexture.stroke("#fff");
  sTexture.text('S', sSize / 2, sSize / 2);
}

function draw() {
  background("#FFCAE9");
  noFill();
  strokeWeight(5);
  stroke(sColor);
  push();
  rotateX(frameCount * rotationSpeed / 2);
  rotateY(frameCount * rotationSpeed / 2);
  rotateZ(frameCount * rotationSpeed / 2);
  texture(sTexture);
  prism(100, 14); // change size and number of sides here
  pop();
  
  // rotate and spin the S
  push();
  translate(0, 0, 100);
  rotateY(sRotation);
  rotateX(sSpin);
  texture(sTexture);
  plane(sSize, sSize);
  pop();
  
  sRotation += 0.01;
  sSpin += 0.005;
}

function prism(size, sides) {
  let angle = TWO_PI / sides;
  beginShape(QUAD_STRIP);
  for (let i = 0; i <= sides; i++) {
    let x = size * cos(angle * i);
    let y = size * sin(angle * i);
    vertex(x, y, -size / 2, map(i, 0, sides, 0, 1), 0);
    vertex(x, y, size / 2, map(i, 0, sides, 0, 1), 1);
  }
  endShape();
}

function mouseMoved() {
  rotationSpeed = map(mouseX, 0, width, 0, 0.003);
}

function mousePressed() {
  saveCanvas(c, "letterS", "png");
}
