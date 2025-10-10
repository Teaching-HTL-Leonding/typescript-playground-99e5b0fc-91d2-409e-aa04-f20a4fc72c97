// <<< ADD CONSTANTS HERE (if you need them)

function setup() {
createCanvas(1000,1000)
//background("skyblue")

stroke("lightgreen")
strokeWeight(10)

//circle von Blättern
fill("lightgreen")

circle(55,70,70)

circle(105,50,70)

circle(150,90,70)

circle(100+15.5,137.5,70)

circle(60,90+31.9,70)

//KERN
fill("yellow")

circle(100,90,65)

//STÄNGEL
fill("darkgreen")
stroke("darkgreen")

//angleMode(DEGRES)
strokeWeight(10)
noFill()
arc(60,130,200,100,-15,15)


}
