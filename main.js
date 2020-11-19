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

function drawEverything() {
  drawGrid();
  // drawPlayer()
  // drawTreasure()
}

drawEverything();
