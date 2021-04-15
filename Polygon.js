class Polygon {
    constructor(x, y, width){
        var options = {
          density : 0.3,
          restitution : 1.0,
          friction : 0.5
        }
        this.body = Bodies.circle(x,y,20,options);
        this.image = loadImage("polygon.png")
        World.add(world, this.body);

        slingshot = new Slingshot(this.Polygon,{x:100,y:100})
        
      }
      display(){

        var angle = this.body.angle;
        var pos = this.body.position;
        
        push();
        
        translate(pos.x, pos.y)
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0,0, 40,40);
        scale(0.1);
        imageMode(CENTER);
        image(this.image, 0, 0)
        pop();
      }
} 

