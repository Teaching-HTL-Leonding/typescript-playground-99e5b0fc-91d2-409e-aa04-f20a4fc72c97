let nextFlower = true;
 
function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  flower(nextFlower);
}
 
function mouseClicked() {
  nextFlower = !nextFlower;
  flower(nextFlower);
}
 
function flower(style: boolean) {
  push();
  translate(random(0, width), random(0, height));
  scale(0.5);
 
  stroke("black");
  strokeWeight(4)