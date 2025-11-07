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


    noFill()
   // fill("white")
    rect(mouseX, mouseY, (width / 2 - mouseX)*2, (height / 2 - mouseY)*2)

 


   stroke("black")
    fill("white")
    textAlign(LEFT)
    const area = Math.round (width / 2 - mouseX)*2*(height / 2 - mouseY)*2
    text(`Area: ${area}`, 5, height - 10);

    
}

    
}




      
