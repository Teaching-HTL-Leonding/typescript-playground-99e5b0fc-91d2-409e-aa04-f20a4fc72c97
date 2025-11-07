function setup() {
    createCanvas(400, 200);
    background("black");
    angleMode(DEGREES);
}
let color_hue: number = 0
noFill()
function mouseMoved() {
    const gridSize = 40;

    background("black");
    stroke("white")
    strokeWeight(2);
    noFill();

    const width1 = (width / 2 - mouseX) * 2
    const height1 = (height / 2 - mouseY) * 2

    noFill()
    // fill("white")
    rect(mouseX, mouseY, width1, height1)




    stroke("black")
    fill("white")
    textAlign(LEFT)
    const area = width1 * height1
    text(`Area: ${area}`, 5, height - 10);


    stroke("white")
    line(mouseX, mouseY, mouseX + width1, mouseY + height1)
    line(mouseX + width1, mouseY, mouseX, mouseY + height1)



}