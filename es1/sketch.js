const canvasWidth = 900;
const canvasHeight = 620;
const wallWidth = 840;
const brickWidth = 76;
const brickHeight = 44;
const mortarWidth = 6;
const rowCount = 9;
const motionAmplitude = 20;
const motionSpeed = 1.1;

const mortarColor = '#969696';
const brickColors = ['#171717', '#f7f7f7'];

function setup() {
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('sketch-holder');
  noStroke();
}

function draw() {
  background('#f2f2f2');

  const wallHeight = rowCount * brickHeight + (rowCount - 1) * mortarWidth;
  const wallLeft = (width - wallWidth) / 2;
  const wallTop = (height - wallHeight) / 2;
  const horizontalPitch = brickWidth + mortarWidth;
  const verticalPitch = brickHeight + mortarWidth;

  fill(mortarColor);
  rect(wallLeft, wallTop, wallWidth, wallHeight);

  for (let row = 0; row < rowCount; row++) {
    const y = wallTop + row * verticalPitch;
    const offset = row % 2 === 0 ? 0 : horizontalPitch / 2;
    const firstColumn = floor(-offset / horizontalPitch) - 1;
    const lastColumn = ceil(wallWidth / horizontalPitch) + 1;

    for (let column = firstColumn; column <= lastColumn; column++) {
      const x = wallLeft + offset + column * horizontalPitch;
      const colorIndex = ((column + row) % 2 + 2) % 2;
      fill(brickColors[colorIndex]);

      if (colorIndex === 0) {
        const darkBrickIndex = floor((column + row) / 2);
        const direction = ((darkBrickIndex % 2) + 2) % 2 === 0 ? -1 : 1;
        const movement = direction * sin((millis() / 1000) * motionSpeed) * motionAmplitude;
        rect(x + movement, y, brickWidth, brickHeight);
      } else {
        rect(x, y, brickWidth, brickHeight);
      }
    }
  }
}
