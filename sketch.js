const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies


var score=0
var estilingue
var fundo
var engine, world;
var ground,enemy,tronco,pedra;
var base
var menino
var gamestate = "preso"
var bg = "sprites/fundo.com.png"
function preload(){
  menino=loadImage("sprites/pngwing.png");
   gettime()
 }



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Chao(width/2,400,width,9);
    enemy = new Enemy(1080,280);
    tronco = new Log(1100,340,150,PI/20)
    pedra = new Pedra(210,100);
    estilingue= new Estilingue(pedra.body,{x:150,y:260})
    
    
    
}





function draw(){
   if(fundo){
   background(fundo);
   image(menino ,50,100,200,300);
   }
    Engine.update(engine);
    ground.display();
    enemy.display();
    tronco.display();
    estilingue.display();
    pedra.display();
    enemy.score();
    textSize(20)
    text("score: "+score,600,50)
  }
 function mouseDragged(){
    
  if(gamestate!=="soolto"){
    Matter.Body.setPosition(pedra.body,{x:mouseX,y:mouseY})
  }
    }
    
 function mouseReleased(){
     estilingue.fly()
     gamestate = "soolto"
 }
 function keyPressed(){
   if(keyCode===32){
     estilingue.prender(pedra.body)  
     gamestate = "preso"
     pedra.trajetoria =[]
     Matter.Body.setPosition(pedra.body,{x:200,y:100})
    }
   
   }
  async function gettime(){
  var resposta = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Tokyo")
  var respostajson = await resposta.json()
   console.log(respostajson)
  var datetime = respostajson.datetime
  var hour = datetime.slice(11,13)
     if(hour>=06&&hour<=18){
      bg="sprites/oi.png"
     }
     else{
       bg="sprites/ooooo.png"
     }
     fundo = loadImage(bg)
    }