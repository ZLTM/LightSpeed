// Daniel Shiffman
var stars = [];

var speed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 1800; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  speed = map(mouseX, 0, width, 0, 150);
  background(0);
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}