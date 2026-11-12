const canvasSize = 640;
const squareCount = 22;
const squareSpacing = 18;
const rotationStep = 0.035;
const movementSpeed = 0.4;

function setup() {
  const canvas = createCanvas(canvasSize, canvasSize);
  canvas.parent('sketch-holder');
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background('#ffffff');
  const movementAngle = (millis() / 1000) * movementSpeed;

  push();
  translate(width / 2, height / 2);
  rotate(movementAngle);
  for (let index = 0; index < squareCount; index++) {
    const size = canvasSize * 0.68 - squareSpacing * index;
    const angle = index * rotationStep;

    push();
    rotate(angle);
    fill(index % 2 === 0 ? '#000000' : '#ffffff');
    rect(0, 0, size, size, 12);
    pop();
  }
  pop();
}
