let c;

function setup () {
    c = createCanvas (1000,1000)
    background (123,23,231)

    rect (100,100,255,500)
    rect (220,220, 255, 500)

    fill(23,23,143)
    strokeWeight (0)
    ellipse(300,300,500,500)
    ellipse(300,600,500,500)

    fill(123,23,231)
    strokeWeight (0)
    ellipse(350,250,500,340)
    ellipse(250,630,500,340)
}

function draw() {
    //rect(mouseX,mouseY,50,300)
    //noFill()
    //strokeWeight(10)
    //stroke(123,23,231)
    
}

function mousePressed() {
    saveCanvas(c,"03.15", "png")
}