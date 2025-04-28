/*
 * @name Drifting Colorful Squares
 * @arialabel Small, randomly colored squares drift across the canvas with subtle movements, creating a textured, flowing visual.
 * @frame 720, 400
 * @description Generates a field of gently drifting squares with varying colors and slight random motion.
 */

let squares = [];
let numSquares = 150;

function setup() {
  createCanvas(720, 400);
  colorMode(HSB, 360, 100, 100, 100);
  for (let i = 0; i < numSquares; i++) {
    squares.push(new DriftingSquare(random(width), random(height)));
  }
  noStroke();
}

function draw() {
  background(0);
  for (let sq of squares) {
    sq.update();
    sq.display();
  }
}

class DriftingSquare {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(10, 20);
    this.hue = random(360);
    this.saturation = random(50, 100);
    this.brightness = random(50, 100);
    this.alpha = random(50, 80);
    this.driftX = random(-0.5, 0.5);
    this.driftY = random(-0.5, 0.5);
    this.wiggleX = random(-0.1, 0.1);
    this.wiggleY = random(-0.1, 0.1);
  }

  update() {
    this.x += this.driftX + random(this.wiggleX);
    this.y += this.driftY + random(this.wiggleY);

    if (this.x < -this.size) this.x = width + this.size;
    if (this.x > width + this.size) this.x = -this.size;
    if (this.y < -this.size) this.y = height + this.size;
    if (this.y > height + this.size) this.y = -this.size;
  }

  display() {
    fill(this.hue, this.saturation, this.brightness, this.alpha);
    rect(this.x, this.y, this.size, this.size);
  }
}