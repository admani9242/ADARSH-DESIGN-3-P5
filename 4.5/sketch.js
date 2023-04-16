// this wqas initially supposed to be a 3d type rotating perspective thing
// the text layer gets stacked so it creates a cool visual effect where it seems to be multiple text when its jsut one text body with repeating S instead of 1 s
//when u click the moving 3d text thing moves with retaliation to the cursor
// if u click again it detaches from the cursor but still reacts to the cursor movement
// i used help from chatgpt to take the moving type layer to react adn stop reacting to the movment adn clicck of the mouse


let font;
let fontsize = 140;
let message = "S..S..S..SS.SS.S.S.SS..S.S.S.SS.S.SS..SS.S.S";
let img;
let x = 0;
let y = 0;
let offset = 0;
let stopped = false;

function preload() {
  font = loadFont('Floripa.ttf');
  img = loadImage('66.png');
}

function setup() {
  createCanvas(1000, 1000, WEBGL);
  textFont(font);
  textSize(fontsize);
  textureMode(NORMAL);
}

function draw() {
  background('#FF4000');
  fill(0);
  let dx = mouseX - width / 2 - x;
  let dy = mouseY - height / 2 - y;
  if (!stopped) {
    x += dx * 0.05;
    y += dy * 0.05;
    offset += 0.1;
  } else {
    x += dx * 0.01;
    y += dy * 0.01;
  }
  for (let i = 0; i < message.length; i++) {
    push();
    let n = noise(x * 0.01 + i * 0.1, y * 0.01 + i * 0.1, offset + frameCount * 0.05);
    let size = map(n, 0, 1, fontsize * 0.8, fontsize * 1.2);
    translate(x, y, sin(offset + i * 0.1 + frameCount * 0.1) * 80);
    rotateY(sin(offset + i * 0.1 + frameCount * 0.1) * 1);
    texture(img);
    textSize(size);
    text(message.charAt(i), 0, 0);
    pop();
  }
}

function mousePressed() {
  stopped = !stopped;
  if (stopped) {
    x = 0;
    y = 0;
    offset = 0;
  }
}
