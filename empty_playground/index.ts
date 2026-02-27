let colorIndex = 0;
 
function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  flower(colorIndex);
}
 
function mouseClicked() {
  colorIndex = (colorIndex + 1) % 3;
  flower(colorIndex);
}
 
function flower(color) {
  push();
  translate(random(0, width), random(0, height));
  scale(0.5);
 
  stroke("black");
  strokeWeight(4);
 
  if (color === 0) {
    fill("red");
  } else if (color === 1) {
    fill("green");
  } else if (color === 2) {
    fill("blue");
  }
 