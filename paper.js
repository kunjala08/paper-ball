class paper {
    constructor(x,y,r,height){
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2,
    }

        this.x = x;
        this.y = y;
        this.r = r;
        this.height=height;
        this.body=Bodies.circle(this.x,this.y,this.r,options,this.height);
        this.image = loadImage("paper.png");
        
        World.add(world,this.body)
    }

    display(){

        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("pink");
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.height);
        this.body.debug=true
        pop();
}

}