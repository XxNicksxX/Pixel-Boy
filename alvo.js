class Enemy extends Baseclass{
    constructor(x,y){
     super(x,y,50,50);
      this.visible=255
     this.image = loadImage("sprites/Daco.png");
    }
    display(){
        if(this.body.speed<2){
     //super.display()
     image(this.image,this.body.position.x,this.body.position.y,50,50)
    }
    else{
        push() 
       World.remove(world,this.body)
     tint(255,this.visible)
     image(this.image,this.body.position.x,this.body.position.y,50,50)
     this.visible-=5
     pop()
    }

 }
  score() {
 if(this.visible<0&&this.visible>-1005){
   score++

 }  
  }


}