
function preload(){
  //pre-load images
  pathImg=loadImage("path.png")
  surf_running=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  surf=createSprite(200,200);
  surf.addAnimation("running",surf_running);
  surf.scale=0.05;
  leftboundary = createSprite(0,0,100,800);
  rightboundary = createSprite(410,100,100,800);
  leftboundary.visible=false;
  rightboundary.visible=false;
}

function draw() {
  background(0);
  path.velocityY=4;
  if(path.y>400){
    path.y=path.y/2;

  }
surf.x=World.mouseX;
surf.collide(leftboundary);
surf.collide(rightboundary);
drawSprites()
}
