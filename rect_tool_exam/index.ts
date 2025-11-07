function setup() {
    createCanvas(400, 200);
    background("black");
    angleMode(DEGREES);
}
let color_hue: number = 0

function mouseMoved() {
    const gridSize = 20;

    background("black");

    strokeWeight(2);
    noFill();

fill(color_hue,100,100)
rect(mouseX,mouseY,40)

color_hue = (color_hue + 5) 
   