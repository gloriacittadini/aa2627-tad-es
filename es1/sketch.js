const canvasSize = 640;
const squareCount = 22;
const squareSpacing = 26;
const rotationStep = 0.035;

function setup() {
  const canvas = createCanvas(canvasSize, canvasSize);
  canvas.parent('sketch-holder');
  rectMode(CENTER);
  noStroke();
  noLoop();
}

function draw() {
  background('#ffffff');

  for (let index = 0; index < squareCount; index++) {
    const size = canvasSize - squareSpacing * (index + 1);
    const angle = index * rotationStep;

    push();
    translate(width / 2, height / 2);
    rotate(angle);
    fill(index % 2 === 0 ? '#000000' : '#ffffff');
    rect(0, 0, size, size, 12);
    pop();
  }
}
