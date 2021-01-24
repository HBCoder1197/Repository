var path,mainCyclist;
var pathImg,mainRacerImg1,mainRacerImg2;

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;

function preload(){
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  mainRacerImg2= loadAnimation("images/mainPlayer3.png");
  
  bellSound = loadSound("sound/bell.mp3");
  
  opponent1Img = loadImage("images/opponent1.png");
  opponent2Img = loadImage("images/opponent2.png");
  opponent3Img = loadImage("images/opponent3.png");
  opponent4Img = loadImage("images/opponent4.png");
  opponent5Img = loadImage("images/opponent5.png");
  opponent6Img = loadImage("images/opponent6.png");
  opponent7Img = loadImage("images/opponent7.png");
  opponent8Img = loadImage("images/opponent8.png");
  opponent9Img = loadImage("images/opponent9.png");
}

function setup(){
  
createCanvas(600,400);
  
// Moving background
path=createSprite(100,200);
path.addImage(pathImg);
path.velocityX = - (5 + distance/150);

//creating boy running
mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.07;  
}

function draw() {
  background(0);
  
  if (keyDown("space")) {
      bellSound.play();
      }
  
  drawSprites();
  
  textSize(20);
  
  fill(255);
  text("Distance: "+ distance,400,30);
  
  if(gameState===PLAY){
  
   mainCyclist.y = World.mouseY;
  
   edges= createEdgeSprites();
   mainCyclist .collide(edges);
    
   distance = distance + Math.round(getFrameRate()/61);
  
  //code to reset the background
  if(path.x < 70 ){
    path.x = width/2;
  }
    
    var select_oppPlayer = Math.round(random(1,3));
    
    if (World.frameCount % 150 == 0) {
      if (select_oppPlayer == 1) {
        pinkCyclists();
      } else {
        redCyclists();
   }
  }
 }
  
  if(keyDown("spacebar")) {
      reset();
 } 
}
  function reset(){
  gameState = PLAY;
  score = 0;
  }
  function pinkCyclists(){
    player1 = createSprite(1100, Math.round(random(50, 250), 10, 10));
    player1.scale = 0.06;
    player1.addAnimation("opponent1", opponent1Img);
    player1.setLifetime = 170;
  }
  
  function redCyclists(){
    player3 = createSprite(1100,                                 Math.round(random(50, 250), 10, 10));
    player3.scale = 0.06;
    player3.addAnimation("opponent3",                       opponent3Img); 
    player3.setLifetime = 170;
  }
