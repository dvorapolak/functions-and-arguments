
var fixedRect, movingRect, rect3, rect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  rect3 = createSprite(100,100,50,80);
  rect3.shapeColor = "yellow";
  rect3.depug = true;
  
  rect4 = createSprite(400,100,50,80);
  rect4.shapeColor = "orange";
  rect4.debug = true;

  rect3.velocityX = +5;
  rect4.velocityX = -5;

}

function draw() {
  background(0,0,0);  

  bounceOff(rect3,rect4)

  bounceOff(movingRect,fixedRect)


  drawSprites();
}





