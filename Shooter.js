class Shooter{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            friction:0.0001,
            restitution:0.0,
            density:1
        }
        this.body=Bodies.circle(x,y,radius/2,options);
        this.radius=radius;
        World.add(world,this.body);
        this.image=loadImage("Arrow.png");
    }
    display(){
        var angle=this.body.angle;
        push();

        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);

         image(this.image,0,0,this.radius+100,this.radius-this.radius+20);
        
        pop()
    }
}