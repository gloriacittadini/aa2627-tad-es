const canvasSize = 640;
const lineCount = 11;
const squareSpacing = 18;
const lineSpacing = squareSpacing * 2;
const rotationStep = 0.07;
const movementSpeed = 0.8;
const movementAmount = 0.035;

function setup() {
  const canvas = createCanvas(canvasSize, canvasSize);
  canvas.parent('sketch-holder');
  rectMode(CENTER);
  noFill();
  stroke('#000000');
  strokeWeight(10);
}

function draw() {
  background('#ffffff');
  const elapsedTime = millis() / 1000;

  for (let index = 0; index < lineCount; index++) {
    const size = canvasSize * 0.68 - lineSpacing * index;
    const phase = elapsedTime * movementSpeed - index * 0.8;
    const movementAngle = index * rotationStep + sin(phase) * movementAmount;

    push();
    translate(width / 2, height / 2);
    rotate(movementAngle);
    rect(0, 0, size, size, 12);
    pop();
  }
}
