class Dustbin {
    constructor(x, y, w, h) {
		var options={
			isStatic:true
		}
		this.width=w;
		this.height=h;
		this.body = Bodies.rectangle(x, y, w, h,options);
		this.image=loadImage("dustbingreen.png");
		World.add(engine.world, this.body);
	}
	display(){
		//rectMode(CENTER);
		//fill("white");
		imageMode(CENTER);
		image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
	}
}