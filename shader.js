/*
 * @name Pixelated Zoom
 * @arialabel The webcam feed is displayed with a pixelated effect, and the pixel size dynamically increases or decreases based on the mouse's vertical position.
 * @description Captures the webcam feed and applies a pixelation effect where the pixel block size is controlled by the mouseY coordinate.
 */

let video;
let pixelSize;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  noStroke();
}

function draw() {
  background(0);

  pixelSize = int(map(mouseY, 0, height, 5, 50));

  video.loadPixels();
  for (let y = 0; y < height; y += pixelSize) {
    for (let x = 0; x < width; x += pixelSize) {
      let index = (y * width + x) * 4;
      let r = video.pixels[index];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];

      fill(r, g, b);
      rect(x, y, pixelSize, pixelSize);
    }
  }
}
