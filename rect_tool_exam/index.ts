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

        strokeWeight(2);
        noFill();

    fill(color_hue,100,100)
    rect(mouseX,mouseY,width*2/2-mouseX,height*2/2-mouseY)

    stroke("lightgray");
    strokeWeight(1);
    line(width/2 - diameterX / 2, height/2, width/2 + diameterX / 2, height/2);
    line(width/2, height/2 - diameterY / 2, width/2, height/2 + diameterY / 2);


    //color_hue = (color_hue + 5) %360
  
}      
