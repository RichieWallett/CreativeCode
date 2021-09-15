// U3 watch t.ly/njR9

// Import libraries
const canvasSketch = require('canvas-sketch'); // Core lib
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1080,1080 ]
};

/* Global Function - Now see above imported
const degToRad = (degrees) => {
  return degrees / 180 * Math.PI;
}
*/

/* Global Function - Now see above imported
const randomRange = (min, max) => {
  return Math.random() * (max - min) + min;
}
*/

const sketch = () => {
  return ({ context, width, height }) => {
    // Setup
    context.fillStyle = 'white'; // Canvas Background
    context.fillRect(0, 0, width, height);

    // Draw
    context.fillStyle = 'black';

    const cx = width * 0.5; // cx is center of
    const cy = height * 0.5;
    
    const w = width * 0.01; // Affects thickness
    const h = height * 0.1; // Affects height

    let x, y; // declared as let as x = cx and the value will change

    const num = 12; // Change this for amount
    const radius = width * 0.3;

    // Loop
    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num); // Changed to external Util library
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      // Lines
      context.save(); // This is like push / pull
      context.translate(x, y); // translates 0,0 to rect not canvas
      context.rotate(-angle);
      context.scale(random.range(0.1, 2), random.range(0.2, 0.5)); // Scale is x and y - default is 1. Changed to external Util library
  
      context.beginPath();
      context.rect(-w * 0.5, -h * 0.5, w, h); // Centers it
      context.fill();
      context.restore(); // This is like push / pull

      // Arc
      context.save();
      context.translate(cx, cy); // Positons in center
      context.rotate(-angle); // Rotates around this translation

      context.lineWidth = random.range(5, 20);

      context.beginPath();
      // context.arc(0, 0, radius, slice * -0.3, slice * 0.3);
      context.arc(0, 0, radius * random.range(0.7, 1.3), slice * random.range(1, -8), slice * random.range(1, 5));
      context.stroke();
      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
