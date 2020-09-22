
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3,ball;

//function preload()
//{
	
//}

function setup() {
	createCanvas(800, 700);

    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    box1= new Dustbin(550,height-50,200,20);
	World.add(world,box1);
	box2= new Dustbin(450,height-85,20,100);
	World.add(world,box2);
	box3= new Dustbin(650,height-85,20,100);
	World.add(world,box3)

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	
	
	ball=new Ball(200,650,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 
  background(0);

  box1.display();
  box2.display();
  box3.display();

  ground.display();

  ball.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}



