class Pedra extends Baseclass{
    constructor(x,y){
     super(x,y,30,30);
     this.image = loadImage("sprites/pedra.png");
     this.imagefu = loadImage("sprites/smoke.png") 
     this.trajetoria =[]
     
    }
    display(){
      
     
     
     super.display();
     if(this.body.position.x >250&&this.body.velocity.x>10){
        var position = [this.body.position.x,this.body.position.y]
        this.trajetoria.push(position)

     }
    
    
    
     for(var i = 0;i < this.trajetoria.length;i++){
      image(this.imagefu,this.trajetoria[i][0],this.trajetoria[i][1])
      }
     
     
   
   
    }

   

}