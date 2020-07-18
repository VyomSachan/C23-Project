var helicopterIMG, helicopter, package,packageIMG;
var packageBody,ground;
var box1, box2, box3, box4;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	package=createSprite(width/2, 80, 10,10);
	package.addImage(packageIMG)
	package.scale=0.2

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG)
	helicopter.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	box1 = new Box(width/2, 650, 200, 20);
	box2 = new Box(290, 610, 20, 100);
	box3 = new Box(510, 610, 20, 100);
	box4 = new Box(width/2, 630, 200, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);

  background(0);

  package.x= packageBody.position.x 
  package.y= packageBody.position.y 

  keyPressed();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  
  drawSprites();
}

function keyPressed() {
 if (keyCode == DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Body.setStatic(packageBody, false);
	}
}



