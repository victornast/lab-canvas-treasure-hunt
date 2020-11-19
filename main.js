// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

// Iteration 1
function drawGrid() {
  // TODO: write the code of the function
  context.fillStyle = 'lightgray';
  context.fillRect(0, 0, 500, 500);
  context.strokeStyle = 'darkgray';
  context.lineWidth = 8;
  context.strokeRect(0, 0, 500, 500);
  context.lineWidth = 2;
  for (let i = 0; i < 10; i++) {
    context.strokeRect(i * 50, 0, 50, 500);
    context.strokeRect(0, i * 50, 500, 50);
  }
}

// Iteration 2 - The Character Class
class Character {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
  moveUp() {
    this.row--;
    playerImg.src = 'images/character-up.png';
  }
  moveDown() {
    this.row++;
    playerImg.src = 'images/character-down.png';
  }
  moveLeft() {
    this.col--;
    playerImg.src = 'images/character-left.png';
  }
  moveRight() {
    this.col++;
    playerImg.src = 'images/character-right.png';
  }
}

const player = new Character(0, 0);

// Iteration 3 - Drawing the Player
const playerImg = new Image();
playerImg.src = 'images/character-down.png';

playerImg.addEventListener('load', () => {
  context.drawImage(playerImg, player.col * 50 + 1, player.row * 50 + 1);
});
function drawPlayer() {
  context.drawImage(playerImg, player.col * 50 + 1, player.row * 50 + 1);
}

// Iteration 4 - The Treasure Class
class Treasure {
  // constructor(col, row) {
  // this.col = col;
  // this.row = row;

  setRandomPosition() {
    this.col = Math.floor(Math.random() * 10);
    this.row = Math.floor(Math.random() * 10);
  }
}

const treasureChest = new Treasure();
treasureChest.setRandomPosition();

const treasureImg = new Image();
treasureImg.src = 'images/treasure.png';

treasureImg.addEventListener('load', () => {
  context.drawImage(
    treasureImg,
    treasureChest.col * 50 + 1,
    treasureChest.row * 50 + 1,
    48,
    48
  );
});

function drawTreasure() {
  context.drawImage(
    treasureImg,
    treasureChest.col * 50 + 1,
    treasureChest.row * 50 + 1,
    48,
    48
  );
}

function drawEverything() {
  drawGrid();
  drawPlayer();
  drawTreasure();
}

drawEverything();

// Iteration 5 - Reacting

window.addEventListener('keydown', (event) => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed
  const key = event.key;
  switch (key) {
    case 'ArrowLeft':
      console.log('left');
      if (player.col !== 0) player.moveLeft();
      break;
    case 'ArrowUp':
      console.log('up');
      if (player.row !== 0) player.moveUp();
      break;
    case 'ArrowRight':
      console.log('right');
      if (player.col !== 9) player.moveRight();
      break;
    case 'ArrowDown':
      console.log('down');
      if (player.row !== 9) player.moveDown();
      break;
  }
  if (
    treasureChest.col === player.col &&
    treasureChest.row === treasureChest.row
  ) {
    treasureChest.setRandomPosition();
  }
  drawEverything();
});
