function setup() {
    createCanvas(300, 300);
}

let size = 50
let x = 150
let y = 50









function draw() {
    background("gold");
    line(x, y - size, x + size, y)
    line(x + size, y, x, y + size)
    line(x, y + size, x - size, y)
    line(x - size, y, x, y - size)



}
