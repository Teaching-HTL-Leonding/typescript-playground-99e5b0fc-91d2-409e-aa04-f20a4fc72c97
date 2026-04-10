function setup() {
    createCanvas(450, 370);   // create a 450×370 px drawing surface
    background("black");      // fill the canvas with black
    stroke("yellow");         // all future lines will be yellow
    // (no fill() call → shapes are outlines only)

    // Move the coordinate origin 10 px right and 10 px down.
    // Every subsequent drawing call is now relative to (10, 10),
    // giving us a small margin around the hive.
    translate(10, 10);

    line(20, 0, 45, 0)
    line(45, 0, 65, 25)
    line(65, 25, 45, 50)
    line(45, 50, 20, 50)
    line(20, 50, 0, 25)
    line(0, 25, 20, 0)



    //function drawHexagon(let i = 0<5  i++){
    //translate(45,0)
    //}

    //for (let i = 0<5  i++ ) {

    //    drawHexagon()
    //    translate(45,0)
    //}

    translate(-45 * 5, 0)
    translate(22, 5, 25)

    for (let i = 0 1 < 5 i++)
        drawHexagon(){
        translate(45, 0)
    }

    for(let  row= 0 row < 5 ;row++){
        for(let col= 0 col<5){
            drawhexagon()
            translate(45,0)

            translate(-45+5,0)

            if(row % 2 === 0) {
                translate(22.5,25)
                }
                else{
        
                }


        }

    }


function drawHoneycomps() {
for(let col = 0, row <5 row++){
    
    for(let col = 0 col < 5 col++){
        drawHexagon()
        translate(45,0)
    }
    translate(-45+ 5. 0)
    if(row % 2 === 0){
        translate(22.5,25)
        else{
        translate(-22.5,25)    
        }
    }

}



}
    // Draw a single hexagon using six line() calls.
    //
    // Vertex layout (pixel coordinates, origin = top-left of bounding box):
    //
    //          (20,0) ──────── (45,0)
    //         /                      \
    //      (0,25)                  (65,25)
    //         \                      /
    //          (20,50) ──────── (45,50)
    //
    // Each line() call: line(x1, y1, x2, y2)
    // <<< ADD YOUR CODE HERE >>>
}

// <<< ADD YOUR CODE HERE >>>