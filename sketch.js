var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg


function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png")
balloonImg2 = loadImage("assets/balloon2.png")
balloon3 = loadImage("assets/balloon3.png")

}

function setup(){




//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;



}

function draw() {
  
  background("black");

  var select_balloon = Math.round(random(1,4));
 
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      balloon.addImage(balloonImg)
    } else if (select_balloon == 2) {
      balloonImg2
    } else if (select_balloon == 3) {
      balloon.addImage(balloon3)
  }
}
  
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
          }
          if(keyDown("LEFT_ARROW")){
            balloon.velocityX = -6;
          }
          if(keyDown("RIGHT_ARROW")){
            balloon.velocityX = 6;
           }
          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;
           if(balloon.x < 0){
            balloon.x = balloon.width/8;
          }
        drawSprites();
        
}


function balloonImg2() {
  var balloonImg2 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  balloonImg2.addImage(balloonImg2);
  balloonImg2.velocityX = 3;
  balloonImg2.lifetime = 150;
  balloonImg2.scale = 0.1;
  balloonImg2.add(blue);
}
