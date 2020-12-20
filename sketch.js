const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
// what if we want to make the speed of particles fast?
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=200;
var divisions;
function preload(){

}

function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;
  
  ground=new Ground(400,595,800,10)

  for(var j = 25; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75))
  }
  for(var j = 40; j<=width; j=j+80){
    plinkos.push(new Plinko(j,145))
  }
  for(var j = 15; j<=width; j=j+50){
    plinkos.push(new Plinko(j,205))
  }
  for(var j = 40; j<=width; j=j+80){
    plinkos.push(new Plinko(j,285))
  }
  for(var i=0; i<=width;i=i+80){
    divisions.push(new Divisions(i,height-divisionHeight/2,10,divisionHeight))
  }


}

function draw() {
  background("black");  
  if(frameCount % 90===0){
     particle = new Particle(random(100, 750), 0,7 ,random(50, 350));
    particles.push(particle);
  }
  Engine.update(engine);
  for(var k = 0; k < particles.length; k++){
    particles[k].display();
  }


  for(var j=0; j<plinkos.length;j++){
    plinkos[j].display();
  }

  for(var i = 0; i<divisions.length;i++){
    divisions[i].display();
    
    
    
    
    
    
    
    
  
 }
  ground.display();
  drawSprites();
}