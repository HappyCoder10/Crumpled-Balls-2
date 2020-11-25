const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var left, bottom, right;
var paper1;
var ground;

function preload()
{

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  Engine.run(engine);
  paper1  = new Paper(100,500,70);
  ground=new Ground(width/2, height-35, width, 10);
 
 // left=new Dustbin(300, 610, 20, 100);
 // right=new Dustbin(500, 610, 20, 100);
  bottom=new Dustbin(600,600,150,150);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
 
  ground.display();
  bottom.display();
  paper1.display();
  //left.display();
  //right.display();
 // bottom.display();
}
function keyPressed() {
  
    if (keyCode === UP_ARROW){
      Matter.Body.applyForce(paper1.paper,paper1.paper.position,{x:200,y:-200});

    }
}


