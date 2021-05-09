var fixedrect, movingrect;




function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(400, 100, 50, 50);
  fixedrect.shapeColor=("green");
  fixedrect.debug=true;

  movingrect=createSprite(400,800,80,30);
  movingrect.shapeColor=("green");
  movingrect.debug=true;
movingrect.velocityY=-5;
fixedrect.velocityY=5;
}

function draw() {
  background(0);
  //movingrect.x=World.mouseX;
  //movingrect.y=World.mouseY;
  bounceLib(movingrect,fixedrect);
  

  drawSprites();
}
function bounceLib(object1, object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2&&
    object2.x-object1.x<object2.width/2+object1.width/2){
      object1.velocityX=object1.velocityX*(-1);
object2.velocityX=object2.velocityX*(-1); 
    }
    if(object1.y-object2.y<object2.height/2+object1.height/2&&
    object2.y-object1.y<object2.height/2+object1.height/2){
      object1.velocityY=object1.velocityY*(-1);
      object2.velocityY=object2.velocityY*(-1); 
  }

}