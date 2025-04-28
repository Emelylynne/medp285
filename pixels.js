/*
 * @name Color Shift Video
 * @arialabel The video's colors are dynamically shifted based on the mouse position. Horizontal mouse movement controls the red shift, and vertical movement controls the blue shift.
 * @frame 320, 240
 * @description Loads a video and manipulates its color channels in real-time according to mouse interaction. Requires a local server to run video files.
 * A <a href="https://github.com/processing/p5.js/wiki/Local-server">local server</a> is necessary.
 */
let movie;

function setup() {
  createCanvas(320, 240);
  movie = createVideo(['assets/fingers.mov', 'assets/fingers.webm'], () => {
    movie.loop();
    movie.hide();
  });
  noStroke();
}

function draw() {
  background(0);
  movie.loadPixels();

  let redShift = map(mouseX, 0, width, -50, 50);
  let blueShift = map(mouseY, 0, height, -50, 50);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const index = (y * width + x) * 4;
      let r = movie.pixels[index];
      let g = movie.pixels[index + 1];
      let b = movie.pixels[index + 2];

      r = constrain(r + redShift, 0, 255);
      b = constrain(b + blueShift, 0, 255);

      fill(r, g, b, movie.pixels[index + 3]);
      rect(x, y, 1, 1);
    }
  }
}