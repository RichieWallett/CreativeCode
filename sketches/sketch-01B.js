const canvasSketch = require('canvas-sketch'); 

const settings = {
  dimensions: [ 1080, 1080 ]
};

// Function Loop Conditinal
const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;

    const w = width * 0.10; // Scales all as a percentage of the canvas dimensions
    const h = height * 0.10; 
    const gap = width * 0.03;
    const initX = width * 0.17; // Initial value
    const initY = width * 0.17; // Initial value

    const offset = width * 0.02;

    let x, y; // No initail value so just declare them
  
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
      x = initX + (w + gap) * i;
      y = initY + (h + gap) * j;
                    
      // Outer rect
      context.beginPath();
      context.rect(x, y, w, h);
      context.stroke();
                
      // Conditional
      if (Math.random() > 0.5) {

        // Inner rect
        context.beginPath();
        context.rect(x + offset / 2, y + offset / 2, w - offset , h - offset);
        context.stroke();
        }
      }
    }
  };
};

canvasSketch(sketch, settings); // This renders all.