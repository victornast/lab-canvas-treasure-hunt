// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

// Iteration 1
function drawGrid() {
  // TODO: write the code of the function
  context.fillStyle = 'silver';
  context.fillRect(0, 0, 500, 500);
  context.strokeStyle = 'dimgray';
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
    this.score = 0;
  }
  moveUp() {
    this.row--;
  }
  moveDown() {
    this.row++;
  }
  moveLeft() {
    this.col--;
  }
  moveRight() {
    this.col++;
  }
}

const player = new Character(0, 0);
const mage = new Character(9, 9);

// Iteration 3 - Drawing the Player
const playerImg = new Image();
playerImg.src = 'images/character-down.png';

const mageImg = new Image();
mageImg.src = 'images/mage-down.png';

playerImg.addEventListener('load', () => {
  context.drawImage(playerImg, player.col * 50 + 1, player.row * 50 + 1);
});
function drawPlayer() {
  context.drawImage(playerImg, player.col * 50 + 1, player.row * 50 + 1);
}

mageImg.addEventListener('load', () => {
  context.drawImage(mageImg, mage.col * 50 + 8, mage.row * 50 - 3);
});
function drawMage() {
  context.drawImage(mageImg, mage.col * 50 + 8, mage.row * 50 - 3);
}

// Iteration 4 - The Treasure Class
class Treasure {
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
  drawMage();
  drawTreasure();
}

drawEverything();

// Iteration 5 - Reacting

const scoreViking = document.querySelector("[data-score = 'v']");
const scoreMage = document.querySelector("[data-score = 'm']");

window.addEventListener('keydown', (event) => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed
  const key = event.key;
  switch (key) {
    case 'ArrowLeft':
      console.log('left');
      playerImg.src = 'images/character-left.png';
      if (player.col !== 0) player.moveLeft();
      break;
    case 'ArrowUp':
      console.log('up');
      playerImg.src = 'images/character-up.png';
      if (player.row !== 0) player.moveUp();
      break;
    case 'ArrowRight':
      console.log('right');
      playerImg.src = 'images/character-right.png';
      if (player.col !== 9) player.moveRight();
      break;
    case 'ArrowDown':
      console.log('down');
      playerImg.src = 'images/character-down.png';
      if (player.row !== 9) player.moveDown();
      break;
    case 'a':
      console.log('a');
      mageImg.src = 'images/mage-left.png';
      if (mage.col !== 0) mage.moveLeft();
      break;
    case 'w':
      console.log('w');
      mageImg.src = 'images/mage-up.png';
      if (mage.row !== 0) mage.moveUp();
      break;
    case 'd':
      console.log('d');
      mageImg.src = 'images/mage-right.png';
      if (mage.col !== 9) mage.moveRight();
      break;
    case 's':
      console.log('s');
      mageImg.src = 'images/mage-down.png';
      if (mage.row !== 9) mage.moveDown();
      break;
  }
  if (treasureChest.col === player.col && treasureChest.row === player.row) {
    player.score++;
    scoreViking.innerHTML = player.score;
    console.log(player.score);
    treasureChest.setRandomPosition();
  }
  if (treasureChest.col === mage.col && treasureChest.row === mage.row) {
    mage.score++;
    scoreMage.innerHTML = mage.score;
    console.log(mage.score);
    treasureChest.setRandomPosition();
  }
  drawEverything();
});
