let c;

function setup () {
    c = createCanvas (1000,1000)
    background ('#416165')

    fill('#D9DBF1')
    strokeWeight (0)
    rect(320,170,70,300)
    rect(620,470,70,300)

    rect(320,420,370,70)
    rect(290,720,400,70)
    rect(290,640,70,130)
    rect(290,170,400,70)
    

    fill('#ACB0BD')
    strokeWeight (0)
    rect(350,200,70,300)
    rect(650,500,70,300)

    rect(350,450,370,70)
    rect(320,750,400,70)
    rect(320,670,70,130)
    rect(320,200,400,70)
}

function mousePressed() {
    saveCanvas(c,"03.23", "png")
}