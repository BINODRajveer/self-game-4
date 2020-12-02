var Ninja;
var police,policeImg;
var ground;
var power, powerup;
var life = 0;
var powerupImg,powerImg;
var sword;
var groundImage;
var background,backgroundImg;
//var PLAY = 1;
//var END =0;
//var gameState= PLAY

function preload(){
  groundImage=loadImage("ground2.png")
  powerupImg = loadImage("powerup.gif");
  powerImg=loadImage("power.gif");
  policeImg=loadImage("police.png")
  backgroundImg=loadImage("bg.png")
}

function setup() {
  createCanvas(600,600);
  background = createSprite(0,0,600,600);
   background.addImage(backgroundImg);
    background.scale = 2.5

 Ninja = createSprite(200, 170, 30, 50);
 Ninja.velocityX=3
 
 

 police = createSprite(100,170,30,60);
 police.velocityX=3
 police.addImage("police",policeImg)
 ground = createSprite(200,180,400,20) 
 ground.addImage("ground",groundImage); 

}

function draw() {
  background.velocityX = -3 
  if (background.x < 0){
     background.x = background.width/2; 
    }
  text("life" + life,550,20);



      
  spawnPower();
  spawnSword();
  drawSprites();

    }
function spawnPower(){
  if (frameCount%280===0){
    power = createSprite(600,30,30,30)  
    power.velocityX= -2;
  }

}
function spawnSword (){
  if (frameCount%180===0){
   sword = createSprite(600,40,30,30)
   sword.velocityX= -2
  }
}