var fixedRect, movingRect, rect1, rect2 ,rect3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +4;
  fixedRect.velocityX = -0.5;

    rect1 = createSprite(200, 800,80,30);
    rect2 = createSprite(500, 800,80,30);
    rect3 = createSprite(800, 800,80,30);
    
    rect1.velocityY = -1;
    rect1.velocityX = +1;

}

function draw() {
  background(0,0,0);  
/*
  if (bounceOff(fixedRect,rect1)){
    fixedRect.shapeColor = "pink";
    rect1.shapeColor = "pink";
  }
  else{
    fixedRect.shapeColor = "yellow";
    rect1.shapeColor = "yellow";
  }*/
  bounceOff(fixedRect,rect1);

  drawSprites();
}


