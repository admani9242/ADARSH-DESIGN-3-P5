// for this i wanted S shape not S text to generate and keep appearing and geenrating randomly with differnt stroke colors
// the form crated is interesting line shapes but they dont really look like an S
// i tried to customize the curve shape to look like an S but i coudl not figure it out


function setup() {
    createCanvas(1000, 1000);
    frameRate(2);
    background(250); 
  }
  
  function draw() {
    strokeWeight(random(1, 10));
    stroke(random(100), random(100), random(100));
    
    //curve using shape of S
    beginShape();
    curveVertex(random(1000), random(500));
    curveVertex(random(1000), random(1000));
    curveVertex(random(400), random(1000));
    curveVertex(random(1000), random(100));
    curveVertex(random(900), random(1000));
    curveVertex(random(1900), random(850));
    endShape();
  }
  
  