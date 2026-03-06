// Layout constants
const GROUPS_PER_ROW = 10;
const ROWS = 10;
const MARKS_PER_GROUP = 5;
const TOTAL = ROWS * GROUPS_PER_ROW * MARKS_PER_GROUP; // 500

const GROUP_W = 42;   // width of one tally group
const GROUP_H = 36;   // height of the vertical strokes
const COL_GAP = 10;   // gap between groups
const ROW_GAP = 16;   // gap between rows
const MARGIN = 16;
const TITLE_HEIGHT = 30;

const CELL_W = GROUP_W + COL_GAP;
const CELL_H = GROUP_H + ROW_GAP;

// Colors
const COLOR_FILLED = "steelblue";

// The random number to visualize (0–500)
let randomNumber: number;




// <<< Add your functions here
/**
 * Returns true if the tally at (row, col) should be colored.
 *
 * @param row  - zero-based row index (0 … ROWS-1)
 * @param col  - zero-based column index (0 … COLS-1)
 * @param n    - how many tally (out of 100) should be filled
 */
function isColored(row: number, col: number, n: number): boolean {
    return row * GROUP_W + col < n
}
/**
 * Draws a single tally centered at the current origin (0, 0).
 * Uses push/pop so fill/stroke changes don't leak out.
 *
 * @param colored - whether the tally should be highlighted
 */
function drawTally(colored: boolean): void{
    push()
    stroke("black ")
    strokeWeight(2)
    fill(colored? CELL_W : CELL_H)
    tally(0, 0, GROUPS_PER_ROW - 10)
    pop()

    line(0,0,0 ,GROUP_H)
    line(10,0,10, GROUP_H)
    line(20,0,20, GROUP_H)
    line(30,0,30, GROUP_H )
    line(0,26,35, 8)

}



function setup(): void {
    const canvasW = GROUPS_PER_ROW * CELL_W + 2 * MARGIN;
    const canvasH = ROWS * CELL_H + TITLE_HEIGHT + MARGIN;
    createCanvas(canvasW, canvasH);

    randomNumber = Math.floor(Math.random() * (TOTAL + 1));

    background("white");

   // Title
    noStroke();
    fill("black");
    textSize(14);
    textAlign(CENTER);
    text(`Random number: ${randomNumber} / 500`, width / 2, 20);

   
}


function tally(arg0: number,arg1: number,arg2: number) {
throw new Error("Function not implemented.");
}
