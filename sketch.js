let noiseImg; 
let amarelo;

async function setup() {
  noiseImg = await loadImage('noise.jpg')
  createCanvas(800, 784);
  amarelo = random(0.02, 0.07)
}

function draw() {
  background(233, 237, 232);

 const osc = sin(frameCount * amarelo) * 12

 noStroke();
 fill(238, 36, 0)
 rect (0, 0, 364, 312)

 noStroke();
 fill(31, 29, 113)
 rect (359, 502, 260, 237)

 noStroke();
 fill(246, 206 + osc, 0)
 rect (0, 503, 80, 280)

 stroke(2, 2, 2);
 strokeWeight(15);
 line (364, 0, 356, 784);

 stroke(2, 2, 2);
 strokeWeight(21);
 line (-309, 309, 800, 309);

 stroke(2, 2, 2);
 strokeWeight(20);
 line (-500, 500, 800, 500);

 stroke(2, 2, 2);
 strokeWeight(13);
 line (76, 510, 73, 784);

 stroke(2, 2, 2);
 strokeWeight(15);
 line (358, 741, 619, 741);

 stroke(2, 2, 2);
 strokeWeight(11);
 line (621, 505, 621, 784);

  drawingContext.save();

  const g = drawingContext.createLinearGradient(0, 784, 0, 500);
  g.addColorStop(0, 'rgba(150, 90, 110, 0.2)');
  g.addColorStop(1, 'rgba(150, 90, 110, 0)');

  drawingContext.fillStyle = g;
  drawingContext.fillRect(0, 500, 800, 384); 

  drawingContext.restore();

  push();
  blendMode(MULTIPLY);
  tint (255,120);
  image (noiseImg, 0, 0, width, height);
  pop();

 }