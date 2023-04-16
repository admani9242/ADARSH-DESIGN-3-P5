//for this code i wanted to have the S text above the animation and such that i use a blend mode so it looked like kinetic type but whenver i added blend modes to the type after linking a typeface my code crashed
// so i became lazy and could not fix the text and instead i made a png image of the letter S and then tried to play with the blend mode 
// that is what this result is, for the background generating animation i just kept random paramters to see what would come up


function setup() {
  createCanvas(1000, 1000);
  background(255);

  let img = createImg('spng.png');
  img.style('position', 'absolute');
  img.style('top', '0');
  img.style('left', '0');

  blendMode(MULTIPLY);
  image(img, 0, 0, width, height);
}


function draw() {

  for (let i = 0; i < 20; i++) { //20 layers
    let r = random(50, 150);
    let strokeColor = color(0, 191, 255);
    stroke(strokeColor);
    fill(r, 205, 50); 
    let startX = random(0, width); 
    let startY = random(0, height);
    let endX = random(0, width); 
    let endY = random(0, height); 
    let controlX1 = random(0, width); 
    let controlY1 = random(0, height);
    let controlX2 = random(0, width); 
    let controlY2 = random(0, height); 
    // draw a bezier curve????
    bezier(startX, startY, controlX1, controlY1, controlX2, controlY2, endX, endY);
  }
}
