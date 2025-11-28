function setup() {
  const num = Math.floor(random(0, 1_000_000));

  // Add the necessary code here
  let numString = num.toString();

  const boxWidth = 50;
  const boxHeight = 70;
  const spacing = 10;
  const totalWidth = numString.length * boxWidth + (numString.length - 1) * spacing;

  const startX = (width - totalWidth) / 2;
  const startY = height / 2 - 50;

  stroke(255, 204, 0);
  strokeWeight(2);
  fill(0);
  rectMode(CORNER);


  rect(30,50,40)
  

  textSize(32);
  fill(255, 204, 0);
  textAlign(CENTER, CENTER);


  rect(x, y, boxWidth, boxHeight);

  text(digit, x + boxWidth / 2, y + boxHeight / 2);
}

fill(255);
textSize(18);
textAlign(CENTER, TOP);
noStroke();
text(num, width / 2, height - 20);

textAlign(CENTER, CENTER);
fill("yellow");
noStroke();
text(num, width / 2, height - 20);
}
