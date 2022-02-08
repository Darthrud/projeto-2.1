var sea, seaImg, ship, shipAnim;

function preload(){

seaImg = loadImage("sea.png");

shipAnim = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);

sea = createSprite(200,200)
sea.addImage("sea",seaImg);
sea.scale = 0.3  
ship = createSprite(80,250,20,50);
ship.addAnimation("running",shipAnim);
edges = createEdgeSprites();
ship.scale = 0.15;


}


function draw() {
  background("blue");
  sea.velocityX = -4;
  if(sea.x<0){
    sea.x = sea.width/8;

  }

  sea.depht = ship.depht
  ship.depht = ship.depht+1;
  
  
  
  drawSprites();

 
}
