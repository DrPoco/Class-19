var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  doorsGroup=new Group()
  climbersGroup=new Group()
  IclimbersGroup= new Group()

  ghost=createSprite(300,300,10,10)
  ghost.addImage(ghostImg)
  ghost.scale=0.3
}

function draw() {
  background("black");
  if(gameState=="end"){
    fill("yellow")
    textSize(20)
    text("Game Over",250,300)
  }
  
  if(gameState=="play"){
    ghost.velocityY=ghost.velocityY+0.5



    if(tower.y > 400){
        tower.y = 300
      }
      
      if(keyDown("space")){
        ghost.velocityY=-5
  
      }
      if(keyDown("right")){
        ghost.x=ghost.x+5
  
      }
      if(keyDown("left")){
        ghost.x=ghost.x-5
  
      }
  
      if(ghost.isTouching(climbersGroup)){
        ghost.velocityY=0
  
      }
  
      if(ghost.isTouching(IclimbersGroup)){
        ghost.destroy()
        gameState="end"
  
      }
      
      
  
      spawnDoors()
  
  
      drawSprites()

  }
  
}

function spawnDoors(){
if(frameCount % 200==0){
  door=createSprite(random(100,500),0,10,10)
  door.velocityY=2
  door.addImage(doorImg)
  door.lifetime=800
  doorsGroup.add(door)
  door.depth=1

  climber=createSprite(door.x,70,10,10)
  climber.velocityY=2
  climber.addImage(climberImg)
  climber.lifetime=800
  climbersGroup.add(climber)
  climber.depth=2
  ghost.depth=3 

  Iclimber=createSprite(door.x,80,80,10)
  Iclimber.velocityY=2
  Iclimber.lifetime=800
  IclimbersGroup.add(Iclimber)
  Iclimber.visible=false


}



}