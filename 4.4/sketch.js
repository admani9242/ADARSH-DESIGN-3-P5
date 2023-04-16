// i dont know what this is but i wanted to try perlin noise and make something interactive
// this background slowly changex color over time of how much u move the mouse
// also u have to mouse quite  a bit to notice color change so please try that
// help - https://www.youtube.com/watch?v=BjoM9oKOAKY
// reference help - https://p5js.org/reference/#/p5/random
// https://p5js.org/reference/#/p5/map
// 


let sColor = 0;
let sX = 0;
let sY = 0;
let trippyHue = 0;

function setup() {
  createCanvas(1000,1000);
  background(0);
  textSize(100);
  textFont('Arial Bold');
  fill(255);
}

function draw() {
  //make changes to animation trippy way
  trippyHue += map(dist(mouseX, mouseY, pmouseX, pmouseY), 0, width, 0, 5);
  trippyHue = trippyHue % 255;

  //draw jigsaw box tripp anmation using perlin noise
  for (let x = 0; x < width; x += 10) {
    for (let y = 0; y < height; y += 10) {
      fill(trippyHue + random(30), random(255), random(255), 20);
      rect(x, y, 10, 10);
    }
  }


  sX = mouseX;
  sY = mouseY;

  sColor = map(dist(sX, sY, pmouseX, pmouseY), 0, width, 0, 255);

  //s shadow
  noStroke();
  fill(0, 0, 0, 100);
  text('s', sX + 5, sY + 5);

  //removestroke
  noStroke();
  fill(sColor, 255, 255);
  text('s', sX, sY);
}
