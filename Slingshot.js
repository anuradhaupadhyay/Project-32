class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.4,
            length: 10
        }
        this.pointB = pointB
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
        this.image=loadImage("Bow.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA=body;
    }

    display(){
        imageMode(CENTER)
        image(this.image,this.sling.pointB.x+20,this.sling.pointB.y,50,500);


        strokeWeight(4);
        if(this.sling.bodyA!=null){
        line(this.sling.bodyA.position.x-80,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y-250);
        line(this.sling.bodyA.position.x-80,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y+250)
        }
    }

}