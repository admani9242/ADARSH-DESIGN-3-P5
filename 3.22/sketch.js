let c;

function setup () {
    c = createCanvas (1000,1000)
    background (1,2,3)

    fill(40,40,120)
    strokeWeight (0)
 
}

function draw() {
    ellipse(mouseX,mouseY,30,40)
    fill(40,40,120)
    strokeWeight (10)
    stroke(50,50,50)
    
}

function mousePressed() {
    saveCanvas(c,"03.22", "png")
}