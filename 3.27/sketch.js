//this is an absolute ripoff attempt at me trying to remake the SUPERMAN logo. i also absolutely hate superman but the colors looked nice so i thought why not
//i initially made it so tht the glow was an egg underneath the text then i changed it to the triangle to look more like a sueprman logo


let sPosX, sPosY; // position of the S
let sWidth = 500; // width of the S
let sHeight = 700; // height of the S
let glowSize = 100; // size of the glow effect
let glowOpacity = 0; // opacity of the glow effect
let glowColor; // color of the glow effect
let distanceThreshold = 200; // the distance at which the mouse starts to glow
let glowRate = 10; // the speed at which the glow effect appears

function setup() {
  createCanvas(1000, 1000);

  sPosX = width / 2;
  sPosY = height / 2;
  noStroke();
  glowColor = color('#FFBB00'); // set the glow color to pink
}

function draw() {
  background ('#2961BA')
  
  // calculate the distance between the mouse and the S shape
  let distance = dist(mouseX, mouseY, sPosX, sPosY);
  
  // if the mouse is close to the S shape, increase the opacity of the glow effect
  if (distance < distanceThreshold) {
    glowOpacity = min(glowOpacity + glowRate, 255);
  } else {
    glowOpacity = max(glowOpacity - glowRate, 0);
  }
  
  // draw the glow effect in the shape of an equilateral triangle with the pointy edge towards the bottom of the screen and behind the S text
  let c = color(red(glowColor), green(glowColor), blue(glowColor), glowOpacity); // set the color and opacity of the glow effect
  fill(c);
  let triangleSide = (sWidth + glowSize) * 1.5; // make the triangle bigger than the S shape
  let triangleHeight = triangleSide * Math.sqrt(3) / 2;
  let trianglePosX = width / 2; // center the triangle at the center of the canvas
  let trianglePosY = height / 2 - triangleHeight / 4; // move the triangle slightly up
  triangle(trianglePosX, trianglePosY, trianglePosX - triangleSide / 2, trianglePosY + triangleHeight / 2, trianglePosX + triangleSide / 2, trianglePosY + triangleHeight / 2);
  
  // draw the S shape
  fill('#AB0D0D');
  textSize(600);
  textAlign(CENTER, CENTER);
  text('S', sPosX, sPosY);
}

function mousePressed() {
  saveCanvas(c, "03.27", "png");
}
