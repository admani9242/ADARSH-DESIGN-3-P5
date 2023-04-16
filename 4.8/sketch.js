//i wanted this to be a random tiled canvas that keeos switching tiles but it didnt work
// this code is now kind of like a puzzle u have to click on a piece and drag to move it to a different location
//however when u select and drag a piece it starts moving pieces around it too sometimes i cannot figure out why
// help - https://www.youtube.com/watch?v=uQZLzhrzEs4

let tiles = [];
let tileSize = 200;
let selectedTile = null;
let selectedTileIndex = null;

function setup() {
  createCanvas(1000, 1000);
  background('#F6C9D6');
  textSize(600);
  textFont('myCustomTypeface');
  textAlign(CENTER, CENTER);
  fill('#330066');
  text('S', width/2, height/2);
  for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 5; x++) {
      let tile = createImage(tileSize, tileSize);
      tile.copy(get(x*tileSize, y*tileSize, tileSize, tileSize), 0, 0, tileSize, tileSize, 0, 0, tileSize, tileSize);
      tiles.push(tile);
    }
  }
  shuffle(tiles, true);
}

function draw() {
  background('#F6C9D6');
  for (let i = 0; i < tiles.length; i++) {
    let x = i % 5;
    let y = floor(i / 5);
    let tileX = x * tileSize;
    let tileY = y * tileSize;
    if (tiles[i] === selectedTile) {
      stroke(255, 0, 0);
      strokeWeight(5);
    } else {
      noStroke();
    }
    image(tiles[i], tileX, tileY);
  }
}

function mousePressed() {
  for (let i = 0; i < tiles.length; i++) {
    let x = i % 5;
    let y = floor(i / 5);
    let tileX = x * tileSize;
    let tileY = y * tileSize;
    if (mouseX >= tileX && mouseX < tileX + tileSize && mouseY >= tileY && mouseY < tileY + tileSize) {
      selectedTile = tiles[i];
      selectedTileIndex = i;
      break;
    }
  }
}

function mouseDragged() {
  if (selectedTile !== null) {
    let currentIndex = null;
    for (let i = 0; i < tiles.length; i++) {
      let x = i % 5;
      let y = floor(i / 5);
      let tileX = x * tileSize;
      let tileY = y * tileSize;
      if (mouseX >= tileX && mouseX < tileX + tileSize && mouseY >= tileY && mouseY < tileY + tileSize) {
        currentIndex = i;
        break;
      }
    }
    if (currentIndex !== null && currentIndex !== selectedTileIndex) {
      swap(tiles, selectedTileIndex, currentIndex);
      selectedTileIndex = currentIndex;
    }
  }
}

function mouseReleased() {
  selectedTile = null;
  selectedTileIndex = null;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
