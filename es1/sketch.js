const canvasSize = 640;
const barWidth = 48;
const barHeight = 18;
const horizontalSpacing = 18;
const verticalSpacing = 14;
const movementSpeed = 0.7;
const movementAmount = 18;
const rowPhase = 0.65;

function setup() {
  const canvas = createCanvas(canvasSize, canvasSize);
  canvas.parent('sketch-holder');
  noStroke();
}

function draw() {
  background('#ffffff');
  fill('#000000');

  const horizontalPitch = barWidth + horizontalSpacing;
  const verticalPitch = barHeight + verticalSpacing;
  const rowCount = floor(height / verticalPitch) + 1;
  const columnCount = ceil(width / horizontalPitch) + 2;
  const elapsedTime = millis() / 1000;

  for (let row = 0; row < rowCount; row++) {
    const y = row * verticalPitch + (verticalPitch - barHeight) / 2;
    const phase = elapsedTime * movementSpeed - row * rowPhase;
    const offset = movementAmount * sin(phase);

    for (let column = -1; column < columnCount; column++) {
      const x = column * horizontalPitch + offset;
      rect(x, y, barWidth, barHeight);
    }
  }
}
