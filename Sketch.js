
var stars = [];

var speed;


function setup() 
{
  frameRate(60);
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 1800; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  console.log("draw");
  speed = map(mouseX, 0, width, 0, 150);
  background(1);
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}



window.addEventListener("resize", res());

window.onload = res();
window.onresize = res();


function res()
{
  var d = window.getComputedStyle("can", null);
  d.getPropertyValue("width") = "100px";
  d.style.height = "100px";
  console.log("in");
}