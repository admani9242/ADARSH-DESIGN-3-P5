// i saw a rerefcne on p5js where they had 2 boxes intereact and change size differently hen u move the cursor
// i wanted to replciate but i changed it with text of S instead of the boes so thats what i did
// i then copied the code multiple times so the canvas looked more full and each time i changed size and opacity of the effect and position
// im sorry i cannot ifn the referenc link on the p5js but it was under the example section

function setup() {
  createCanvas(1000, 1000);
  noStroke();
  rectMode(random);
  textFont('Times New Roman');
}

function draw() {
  background(230);

  
  let r1 = map(mouseX, 0, width, 0, height);
  let r2 = height - r1;

  fill(237, 34, 93, r1);
  textSize(r1);
  textStyle(BOLD);
  textAlign(CENTER);
  text("S", width / 2 + r1 / 2, height / 2);

  fill(237, 34, 93, r2);
  textSize(r2);
  textStyle(NORMAL);
  textAlign(CENTER);
  text("s", width / 2 - r2 / 2, height / 2);
  
  // second "S"
  push();
  fill(237, 34, 93, r1/2);
  textSize(r1);
  textStyle(BOLD);
  textAlign(CENTER);
  translate(width / 2 + r1 / 2, height / 2);
  rotate(radians(90));
  text("S", 0, 0);
  pop();
  
  // third "S"
  let r3 = map(mouseY, 0, height, 0, width/2);
  
  push();
  fill(237, 34, 93, 100);
  textSize(r3);
  textStyle(BOLD);
  textAlign(CENTER);
  text("s", width / 4, height / 2);
  pop();
  
  // fourth "S"
  let r4 = map(mouseX, 0, width, 0, width/4);
  let r5 = height - r4;
  
  fill(237, 34, 93, r4);
  textSize(r4);
  textStyle(BOLD);
  textAlign(CENTER);
  text("S", width / 4, height / 4);
  
  fill(237, 34, 93, r5);
  textSize(r5);
  textStyle(NORMAL);
  textAlign(CENTER);
  text("s", width / 4, height * 3 / 4);
  
  // fifth "S"
  let r6 = map(mouseY, 0, height, 0, width/2);
  let r7 = height - r6;
  
  push();
  fill(237, 34, 93, r7/2);
  textSize(r7);
  textStyle(BOLD);
  textAlign(CENTER);
  translate(width * 3 / 4, height / 2);
  rotate(radians(180));
  text("S", 0, 0);
  pop();
  
  //sixth "S"
  let r8 = map(mouseY, 0, height, 0, width/4);
  let r9 = height - r8;
  
  push();
  fill(237, 34, 93, r8/2);
  textSize(r8);
  textStyle(NORMAL);
  textAlign(CENTER);
  translate(width * 3 / 4, height / 4);
  rotate(radians(180));
  text("s", 0, 0);
  pop();
  
  push();
  fill(237, 34, 93, r9/2);
  textSize(r9);
  textStyle(BOLD);
  textAlign(CENTER);
  translate(width * 3 / 4, height * 3 / 4);
  rotate(radians(180));
  text("S", 0, 0);
  pop();
}

