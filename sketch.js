
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,ground1,box1,box2,box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground1=new ground(400,650,800,10);

	box1=new box(685,596,20,100);
	box2=new box(600,635,150,20);
	box3=new box(525,596,20,100);

	paper1=new paper(100,50,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 /* if(keyDown("space")){
	paper1.velocityY = -12;
	paper1.velocityY = paper1.velocityY + 0.8;
  }*/

  paper1.display();
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});

	}
}