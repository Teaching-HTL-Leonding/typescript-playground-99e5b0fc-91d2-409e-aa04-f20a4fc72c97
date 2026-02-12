function setup() {
    createCanvas(500,500)
    background("black")

    stroke("yellow")
    strokeWeight(3)
    fill("darkblue")
for(let i = 0; i< 3; i++){
    drawCircle()
    translate(100,0)
   
}

function drawCircle() {
    circle(150, 150, 100)
    line(150,100,150,200)
    line(100,150,200,150)
}
