class Box{
    constructor(x, y, width, height,isStatic,density) {
        var options = {
            'restitution':0.0,
            'friction':0.6,
            'density':density,
            'isStatic':isStatic
        }
        this.body = Matter.Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        Matter.World.add(world, this.body);
        this.visibility=255;
        this.image=loadImage("Crate.jpg")
      }
      
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        if(this.body.speed>3){
          World.remove(world,this.body);
          push()
          this.visibility=this.visibility-5;
          tint(255,this.visibility);
          image(this.image,0, 0, this.width, this.height);
          pop()
        }
        else{
          image(this.image,0, 0, this.width, this.height);
        }
        pop();
      }
}