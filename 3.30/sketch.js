//i am not sure what i was trying to do with this code to be completly honest
// i did get help with chatgpt to draw an actual S as a shape instead of usign a text
// and i then trid to incorporate it with the movment of the pattern but it doesnt look like an S at all
// i hope this can still count as a S sketch if u look closely towards the centre the black lines do kinf od look like an S


function setup() {
  createCanvas(1000, 1000);
}
function draw() {
  background('#4062BB');
  noFill();
  stroke(0);
  strokeWeight(2);
  
  //coencentric circles
  for (let i = 0; i < 00; i += 100) {
    ellipse(width/2, height/2, i, i);
    fill('#59C3C3'); 
  }
  
  //rotatiosnal S
  for (let i = 0; i < 1000; i += 10) {
    fill('#52489C'); 


    push();
    translate(width/2, height/2);
    rotate(frameCount * 0.0002 * (i + 120));
    drawS(i);
    pop();
  }
}

//trying to draw s shape with helper
function drawS(radius) {
  let angleStep = PI/9; 
  
  for (let i = 0; i < 6; i++) { 
    beginShape();
    let startAngle = -PI/2 + angleStep*i;
    let endAngle = -PI/2 + angleStep*(i+1);
    for (let angle = startAngle; angle <= endAngle; angle += angleStep/10) {
      let x = cos(angle) * radius;
      let y = sin(angle) * radius;
      let distortion = sin(angle * 5) * 10;
      curveVertex(x, y + distortion);
    }
    for (let angle = endAngle; angle >= startAngle; angle -= angleStep/10) {
      let x = cos(angle) * radius;
      let y = sin(angle) * radius;
      let distortion = sin(angle * 5 + PI/2) * 10;
      curveVertex(x, y + distortion);
    }
    endShape();
    fill('#5B85AA'); 
  }
}
