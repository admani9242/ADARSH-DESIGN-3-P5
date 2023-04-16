// i learnt how to rotate text on an axis
// i repeated it 7 times, changed location color position and speed 
// it looks very simple but i really like this one

let s1Angle = 0;
let s2Angle = 0;
let s3Angle = 20;
let s4Angle = 0;
let s5Angle = 90;
let s6Angle = 210;
let s7Angle = 10;

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(0);

  // rotation speed of each S
  let s1Speed = 0.01;
  let s2Speed = 0.04;
  let s3Speed = 0.02;
  let s4Speed = 0.15;
  let s5Speed = 0.02;
  let s6Speed = 0.05;
  let s7Speed = 0.1;

  // first S 
  push();
  translate(width / 2, height / 2);
  rotate(s1Angle);
  fill('#ffee00');
  noStroke();
  textSize(200);
  text('S', 0, 0);
  pop();

  //S below the first S
  push();
  translate(width / 2, height / 2 + 200);
  rotate(s2Angle);
  fill('#cc8100');
  noStroke();
  textSize(200);
  text('S', 0, 0);
  pop();

  // third S 
  push();
  translate(width / 2, height / 2 + 20);
  rotate(s3Angle);
  fill('#7CFFCB');
  noStroke();
  textSize(400);
  text('S', 0, 0);
  pop();

   // fourth S
   push();
   translate(width / 2, height / 2 + 10);
   rotate(s4Angle);
   fill('#0A3200');
   noStroke();
   textSize(80);
   text('S', 0, 0);
   pop();

    // ifth S
  push();
  translate(width / 2, height / 2 + 80);
  rotate(s5Angle);
  fill('#7699D4');
  noStroke();
  textSize(200);
  text('S', 0, 0);
  pop();

   // sixth S 
   push();
   translate(width / 2, height / 2 + 400);
   rotate(s6Angle);
   fill('#B1B6A6');
   noStroke();
   textSize(400);
   text('S', 0, 0);
   pop();

    // seventh S b
  push();
  translate(width / 2, height / 2 + 200);
  rotate(s7Angle);
  fill('#B3EFB2');
  noStroke();
  textSize(420);
  text('S', 0, 0);
  pop();

  // rotation angles for each of the s
  s1Angle += s1Speed;
  s2Angle += s2Speed;
  s3Angle += s3Speed;
  s4Angle += s4Speed;
  s5Angle += s5Speed;
  s6Angle += s6Speed;
  s7Angle += s7Speed;
}

function mousePressed() {
    saveCanvas(c, "03.28", "png")
}