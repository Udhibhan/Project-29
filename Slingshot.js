class Slingshot{
    constructor(bodyA, pointB) {
        var options = {
            bodyA : bodyA,
            pointB : pointB,
        }
        this.pointB = pointB;
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
      }
      display(){
        push();
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }
}

