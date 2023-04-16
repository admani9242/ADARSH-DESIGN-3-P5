// wanted to implemeent motion blur
// checked a tutorial from creative codign club on motion blur using a ball and applied to this test S 

let customFont;

function preload() {
  customFont = loadFont('FURPHY Regular.otf');
}

function setup() {
  createCanvas(1000, 1000);
  cursor('text');
  textFont(customFont);
}
function draw() {
  
  fill(0, 0, 0, 50); //text colro
  textSize(500);
  text('s', mouseX, mouseY);
}
function draw() {
  fill(255, 255, 255, 50); 
  rect(0, 0, width, height); 
  fill(0, 0, 0, 20);
  textSize(500);
  text('S', mouseX, mouseY);
}
