function setup() {
  const Konstante1 = 475;
  const GRID = 25; 
  const pixelSize = Konstante1 / GRID;

  createCanvas(Konstante1, Konstante1);
  background("black");
  noStroke();

  for (let i = 0; i < GRID; i++) {
   
    let redValue = 255 * (1 - i / GRID);
    fill(redValue, 255, 0);

   
    rect(i * pixelSize, i * pixelSize, pixelSize, pixelSize);

  
    rect((GRID - 1 - i) * pixelSize, i * pixelSize, pixelSize, pixelSize);
  }
}