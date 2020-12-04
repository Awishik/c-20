var mRect, fRect;




function setup() {
  createCanvas(800,400);

  mRect=createSprite(200,200,20,20);
  mRect.shapeColor="brown";

  fRect=createSprite(200,200,20,20);
  fRect.shapeColor="brown";

  fRect.debug=true;
  mRect.debug=true;
}

function draw() {
  background("skyBlue");

  mRect.x=World.mouseX;
  mRect.y=World.mouseY;

  if(mRect.x-fRect.x < mRect.width/2 +fRect.width/2 && fRect.x-mRect.x < mRect.width/2 +fRect.width/2 &&
    fRect.y-mRect.y < mRect.height/2 +fRect.height/2 && mRect.y-fRect.y < mRect.height/2 +fRect.height/2) {
    mRect.shapeColor="orange"
    fRect.shapeColor="orange"
  } 
  else{
    mRect.shapeColor="brown"
    fRect.shapeColor="brown"
  }

drawSprites();
}















