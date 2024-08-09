function setup() {
    createCanvas(400, 400);
    background("black")
    
  }
  
  function draw() {
    stroke( 43, 10, 120);
    fill( 43, 10, 120);
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 20,20);
    }
  }