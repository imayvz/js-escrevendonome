let cor;
let circuloX;
let circuloY;

function setup() {
  createCanvas(400, 400);
  background(color(750, 80, 800));
  cor = "color(random(0, 100), random(0, 500), random(0,600))";
  circuloX = [0, 0, 0];
  circuloY = [random(height), random(height), random(height)];
}
function draw() {
  fill("pink");

  // console.log(circuloX length);
  for (let contador in circuloX) {
    console.log(contador);
    circle(circuloX[contador], circuloY[contador], 50);
    circuloX[contador] += random(0, 3);
    circuloY[contador] += random(-2, 2);

    if (circuloX[contador] >= width) {
      circuloX[contador] = 0;
      circuloY[contador] = random(height);
    }
  }

  if (mouseIsPressed) {
    cor = color(random(0, 600), random(0, 600), random(0, 600), random(0, 600));
  }
}
