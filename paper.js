class Paper {
    constructor(x,y,r){
        var options = {
            restitution: 0.8,
            friction: 1,
            density: 0.5
        }
        this.r=r;
        this.x=x;
        this.y=y;
        this.paper = Bodies.circle(x,y,r,options);
        this.image = loadImage("paper.png");
        World.add(world,this.paper);
    }
    display () {
        var pos =this.paper.position;
        var angle = this.paper.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(RADIUS);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
};