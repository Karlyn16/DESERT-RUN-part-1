var backgroundimg, girl, vulture, snake,spider

function preload(){
  backgroundimg=loadImage("desert2.jpeg");
  girl=loadImage("runninggirl (1).jpg");
  vulture=loadImage("vulture.jpeg");
  snake=loadImage("snake.jpeg");
  spider=loadImage("spider.jpeg");
  scorpion=loadImage("scorpion.png");
  cactus=loadImage("cactus.png");
  badguy=loadImage("badguy.jpeg");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  girl1=createSprite(20,displayHeight-20)
  //girl1.addImage("runninggirl(1)",girl)
  girl1.scale=1;
  vulture=createSprite(20,displayHeight-20);
  vulture.addImage("vulture.jpeg")
  ground=createSprite(200,200)
  ground=addImage("desert2.jpeg")
  ground.x=ground.width/2
  ground.velocityX = -(5+ 3*score/100);

  if(GameState===play){
    score-score+Math.round (GetFrameRate()/60)
    ground.velocityX = -(5+ 3*score/100);
  }
  if(keyDown("space") && girl.y >= 159) {
    trex.velocityY = -12;
  }
  if(ground.x<0){
    ground.x=ground.width/2
  }
//imag needs to be moving at a specific speed with a frame Count
// obstacles need to be spawn randomly using the function Rand

}



function draw() {
  background(backgroundimg);  
  vulture(vultureimg)
  drawSprites();
}