// initial idea from this video - https://www.youtube.com/watch?v=riM_ni9Kquo
// took a little help from this video - https://www.youtube.com/watch?v=DYb5TfN880I
// also wanted to make it more like how teteris works in the sense the S falls and takes up its space and everything else staakcs on tops of each other and eventually fills out the canvas but i settled for this.
let sLetters = [];

function setup() {
  createCanvas(1000, 1000);
  background(135, 206, 250);
  textFont('Comic Sans MS');
}

function draw() {
  background(135, 206, 250);
  if (frameCount % 9 === 0) { //make a new S fall down every 9 frames
    let newS = new SLetter(); //new variant Sletter class
    sLetters.push(newS);
  }
  for (let i = sLetters.length - 1; i >= 0; i--) {
    sLetters[i].fall(); //make every Sfall
    sLetters[i].display(); //to show each current S letter
    if (sLetters[i].offscreen()) {
      sLetters.splice(i, 1);
    }
  }
}

class SLetter {
  constructor() {
    this.x = random(width);
    this.y = random(-200, -100); //s startes falling from a point outside the canvas between these values
    this.speed = random(5, 10); //random falling speed between these two numebrs
    this.size = random(20, 70); //size of S between two sizes
    this.opacity = random(50, 255); // random opacity value between 50 and 255
    this.acceleration = 0.1; //acceleration of falling S
    this.velocity = 0; // Set the initial velocity to 0
    this.color = color(random(0, 30), random(50, 100), random(100, 150), this.opacity); // color selection between dark and ligth blue
  }

  fall() {
    this.velocity += this.acceleration;
    this.y += this.velocity;
    if (this.y > height - this.size) { //s reached en of canvas and stops moving
      this.y = height - this.size;
      this.velocity = 0;
    }
  }

  display() {
    textSize(this.size);
    fill(this.color);
    text("S", this.x, this.y);
  }

  offscreen() {
    return this.y > height + this.size;
  }
}
