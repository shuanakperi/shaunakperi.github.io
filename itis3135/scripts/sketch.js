let bottomImg, topImg;

function preload() {
  bottomImg = loadImage('assets/parrot-color.png'); 
  topImg = loadImage('assets/parrot-bw.png');
}

function setup() {
  createCanvas(720, 400);
  noCursor();
  cursor('assets/brush.png', 20, -10); 
  image(topImg, 0, 0);
}

function mouseDragged() {
  copy(bottomImg, mouseX, mouseY, 20, 20, mouseX, mouseY, 20, 20);
}
