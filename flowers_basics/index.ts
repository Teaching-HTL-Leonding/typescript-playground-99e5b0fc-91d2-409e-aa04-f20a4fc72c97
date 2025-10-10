const STROKETHICK = 10
const STROKETHIN = 10

function setup() {
  createCanvas(500, 300)
  background("skyblue")

  //STÄNGEL
  fill("darkgreen")
  stroke("darkgreen")

  angleMode(DEGREES)
  strokeWeight(15)
  noFill()
  arc(60, 190, 220, 220, -31, 45)


  stroke("lightgreen")
  strokeWeight(STROKETHICK)

  //circle von Blättern
  fill("lightgreen")

  circle(55, 70, 70)

  circle(105, 50, 70)

  circle(150, 90, 70)

  circle(100 + 15.5, 137.5, 70)

  circle(60, 90 + 31.9, 70)

  //KERN
  fill("yellow")

  circle(100, 90, 65)

  //2. Blume

  //STÄNGEL
  fill("darkgreen")
  stroke("darkgreen")

  angleMode(DEGREES)
  strokeWeight(15)
  noFill()
  arc(260, 190, 220, 220, -31, 45)

  //circle von Blättern
  strokeWeight(2.5)
  stroke("black")
  fill("lightgreen")

  circle(320, 60, 80)
  circle(320, 160, 80)

  circle(270, 110, 80)
  circle(370, 110, 80)

  //KERN
  fill("yellow")
  circle(320, 110, 80)

}
