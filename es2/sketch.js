/*
  Quadro di riferimento:
  - Autore: Theo van Doesburg
  - Titolo: Contro-composizione V
  - Anno: 1924
  - Fonte: https://commons.wikimedia.org/wiki/File:Theo_van_Doesburg_Counter-CompositionV_(1924).jpg

  Obiettivo:
  Riprodurre un astrattismo geometrico con griglia diagonale, colori primari
  e spazi neutri. mouseX sposta leggermente la griglia e varia le proporzioni
  dei blocchi; mousePressed genera una nuova variante cromatica con random().

  Vincoli:
  - Canvas di riferimento: 800x600 pixel.
  - Colori indicati in OKLCH tramite colorMode().
  - Colori e parametri variabili dichiarati all'inizio del file.
  - La casualita usa solo gamme ristrette attorno ai colori primari.
  - Animazione/interazione: mouseX modifica colori e proporzioni delle aree.

  Specifiche: https://codestesie.it/aa2627/tad/attivita/es2/
*/

const canvasWidth = 800;
const canvasHeight = 600;
const gridAngle = -18;
const gridSpacing = 92;

let creamLightness = 96;
let creamChroma = 3;
let redHue = 31;
let redLightness = 56;
let blueHue = 264;
let blueLightness = 48;
let yellowHue = 94;
let yellowLightness = 82;
let neutralLightness = 18;

function setup() {
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('sketch-holder');
  colorMode(OKLCH, 100, 150, 360, 1);
  noStroke();
  randomizePalette();
}

function draw() {
  const mouseProgress = constrain(mouseX / width, 0, 1);
  const gridShift = map(mouseProgress, 0, 1, -24, 24);
  const warmArea = map(mouseProgress, 0, 1, 0.78, 1.22);
  const coolArea = map(mouseProgress, 0, 1, 1.18, 0.82);

  const cream = color(creamLightness, creamChroma, 85);
  const red = color(redLightness, 62, redHue);
  const blue = color(blueLightness, 58, blueHue);
  const yellow = color(yellowLightness, 72, yellowHue);
  const dark = color(neutralLightness, 3, 90);
  const lightGray = color(88, 3, 90);

  background(cream);

  push();
  translate(width / 2 + gridShift, height / 2);
  rotate(radians(gridAngle));

  for (let position = -700; position <= 700; position += gridSpacing) {
    fill(lightGray);
    rect(position - 11, -700, 22, 1400);

    fill(dark);
    rect(position + 41, -700, 10, 1400);
  }

  pop();

  push();
  translate(gridShift * 0.45, 0);

  fill(dark);
  quad(
    56, 66,
    262 * coolArea, 66,
    214 * coolArea, 210,
    56, 210
  );

  fill(red);
  quad(
    118, 210,
    360 * warmArea, 210,
    306 * warmArea, 392,
    118, 392
  );

  fill(yellow);
  quad(
    54, 392,
    306 * warmArea, 392,
    306 * warmArea, 535,
    54, 535
  );

  fill(cream);
  quad(
    360 * warmArea, 66,
    570 * coolArea, 66,
    514 * coolArea, 210,
    306 * warmArea, 210
  );

  fill(blue);
  quad(
    306 * warmArea, 210,
    514 * coolArea, 210,
    598 * coolArea, 392,
    360 * warmArea, 392
  );

  fill(dark);
  quad(
    306 * warmArea, 392,
    598 * coolArea, 392,
    598 * coolArea, 535,
    306 * warmArea, 535
  );

  pop();

  push();
  translate(-gridShift * 0.25, 0);

  fill(cream);
  quad(
    598, 66,
    744, 66,
    744, 210,
    598, 210
  );

  fill(red);
  quad(
    598, 210,
    744, 210,
    744, 392,
    598, 392
  );

  fill(blue);
  quad(
    598, 392,
    744, 392,
    744, 535,
    598, 535
  );

  pop();

  fill(dark);
  rect(0, 0, 800, 18);
  rect(0, 582, 800, 18);
  rect(0, 0, 18, 600);
  rect(782, 0, 18, 600);
}

function mousePressed() {
  randomizePalette();
}

function randomizePalette() {
  creamLightness = random(93, 98);
  creamChroma = random(2, 8);
  redHue = random(25, 38);
  redLightness = random(52, 60);
  blueHue = random(258, 272);
  blueLightness = random(44, 52);
  yellowHue = random(88, 104);
  yellowLightness = random(78, 86);
  neutralLightness = random(14, 24);
}
