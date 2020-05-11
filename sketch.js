
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var cBase, cTop



function setup() {
  var canvas = createCanvas(1400,600);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(700,580,1400,30);
  
  cBase = new Cannon(500,550,50,50);
  cTop = new Cannon(522,500,100,50);
  
}

function draw() {
  background(0);
  Engine.update(engine);  

  ground.display();
  cBase.display();
  cTop.display();
  
  
}