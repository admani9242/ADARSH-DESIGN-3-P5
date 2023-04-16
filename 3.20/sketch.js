let c;

function setup () {
    c = createCanvas (1000,1000)
    background ('#000000')

    fill('#CBFF4D')
    strokeWeight (0)
   
    ellipse(600,300,50,50)
    ellipse(550,300,53,53)
    ellipse(510,320,56,56)
    ellipse(480,360,60,60)
    ellipse(490,410,56,56)
    ellipse(530,430,53,53)
    ellipse(570,460,56,56)
    ellipse(600,500,60,60)
    ellipse(590,550,56,56)
    ellipse(560,590,53,53)
    ellipse(515,610,50,50)
    ellipse(470,610,55,55)
    ellipse(420,610,60,60)
    


}

function mousePressed() {
    saveCanvas(c,"03.20", "png")
}