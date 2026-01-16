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

    fill('yellow');
    stroke('gold');

    for (let i = 0; i < circleX.length; i++) {
        circle(circleX[i], circleY[i])
        DIAM)

        circleX[i]+= SPEED*direction[i]

        if(circle)

    }

    rect(0, 0, DIAM, height);

    fill('yellow');
    stroke('gold');

    circle(circleX, circleY, DIAM);

    circleX += SPEED * direction;
    if (circleX - RADI < 0 || circleX + RADI > width) {
        direction *= -1;
        circleX = max(RADI, min(width - RADI, circleX));
    }
}

function mouseClicked() {
}
