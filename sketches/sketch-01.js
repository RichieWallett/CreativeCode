const canvasSketch = require('canvas-sketch'); 

const settings = {
  dimensions: [ 600, 600 ]
};

// Function Loop Conditinal
const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    const w = 60;
    const h = 60;
    const gap = 20;
    let x, y; // No initail value so just declare them
  
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
      x = 100 + (w + gap) * i;
      y = 100 + (h + gap) * j;
                    
      // Outer rect
      context.beginPath();
      context.rect(x, y, w, h);
      context.stroke();
                
      // Conditional
      if (Math.random() > 0.5) {

        // Inner rect
        context.beginPath();
        context.rect(x + 8, y + 8, w -16 , h - 16);
        context.stroke();
        }
      }
    }
  };
};

canvasSketch(sketch, settings); // This calls all.