//code taken from this tutorual and modified and edited to make more complex.
// link - https://www.youtube.com/watch?v=iUYCAECu_fE
//there are text of S on the spinning donut like shape but it gets distorted for unkown reasons

let c;
let sSize = 150;
let sColor;
let sFont;
let rotationSpeed = 0.005;
let movementSpeed = 0.001;
let sTexture;

function preload() {
  sFont = loadFont('traditio.ttf');
}

function setup() {
  c = createCanvas(1000, 1000, WEBGL);
  sColor = color(100, 200, 255);
  sTexture = createGraphics(sSize, sSize);
  sTexture.textFont(sFont);
  sTexture.textSize(sSize * 0.75);
  sTexture.textAlign(CENTER, CENTER);
  sTexture.fill("#f7b32f");
  for (let i = 0; i < 5; i++) { //to add the S text in/on the shape. number i < will be amount of S
    // i cannot figure out why the S text keeps getting strecthed to the point where it is unreadable.
    let posX = random(0, sSize);
    let posY = random(0, sSize);
    sTexture.text('S', posX, posY);
  }
}

function draw() {
  background(20);
  noFill();
  strokeWeight(2);
  stroke(sColor);
  push();
  rotateX(frameCount * rotationSpeed);
  rotateY(frameCount * rotationSpeed);
  rotateZ(frameCount * rotationSpeed);
  translate(mouseX - width / 2, mouseY - height / 2, 0);
  texture(sTexture);
  torus(300, 100); // the shape that moves
  pop();
}

function mouseMoved() {
  rotationSpeed = map(mouseX, 0, width, 0, 0.0045); //rotation speed
  movementSpeed = map(mouseY, 0, height, 0, 0.001); //movement speed
}

function mousePressed() {
  saveCanvas(c, "letterS", "png");
}
