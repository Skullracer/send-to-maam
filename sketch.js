const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world,engine;
var canvas;
var backgroundImage,TinybroImage;
var Tinybro,snow;
function preload() {
  backgroundImage = loadImage("snow3.jpg");
  TinybroImage = loadImage("Tinybro.png");
  
}

function setup() {
  createCanvas(800,400);
  Tinybro = createSprite(width / 2 - 50, height - 100);
  Tinybro.addImage("Tinybro", TinybroImage);
  Tinybro.scale = 0.4;
  snow=new Snow(180,110,50,50)
}

function draw() {
  background(255,255,255); 
  image(backgroundImage,0,0,800,400)

  if (keyDown(UP_ARROW)) {
    Tinybro.positionY += 10;
  }

  if (keyDown(LEFT_ARROW)) {
    Tinybro.positionX -= 5;
  }

  if (keyDown(RIGHT_ARROW)) {
    Tinybro.positionX += 5;
  }
 Engine.update(engine) 
 snow.display()
  drawSprites();
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}