let circleX: number[] = [];
let circleY: number[] = [];
let direction: number[] = [];

const SPEED: number = 2;
const RADI: number = 10;
const DIAM: number = RADI * 2;

function setup() {
    createCanvas(500, 300);
}

function draw() {
    background("white");
    fill("lightgrey")
    rect(0, 0, DIAM, height)
   
    fill('yellow');
    stroke('gold');

    circle(10, mouseY - 10, DIAM)

    for (let i = 0; i < circleX.length; i++) {
        circle(circleX[i], circleY[i], DIAM)

        circleX[i] += SPEED * direction[i]

        if (circleX[i] - RADI < 0 || circleX[i] + RADI >
            width) {
            direction[i] *= -1
            circleX[i] = Math.max(RADI, Math.min(width - RADI, circleX[i]))


        }

    }
    
}

function mouseClicked() {
    circleX.push(0)
    circleY.push(mouseY)
    direction.push(1)
}
