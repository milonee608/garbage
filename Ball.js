class Ball{
    constructor(x,y,radius){
        var options={
            isStatic: false,
            restituion:0.3,
            friction:0.5,
            density:1.2
        }

       this.ball=Matter.Bodies.circle(x,y,radius,options);
	    World.add(world,this.ball);
    
    }

display(){
    ellipseMode(RADIUS);
    ellipse(this.ball.position.x,this.ball.position.y,20,20);
}
    
}
  