const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground, engine, world;
var box1;
var box2;


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  box1 = new Box(200,200,50,50);
  box2 = new Box(240,100,50,50);

  ground = new Ground(300,300,400,20);

  

}

function draw() {
  background(255,255,255);
  
  Engine.update(engine);

  box1.display();
  box2.display();
  ground.display();

  drawSprites();
}