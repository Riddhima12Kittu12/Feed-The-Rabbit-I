var garden,rabbit;
var gardenImg,rabbitImg;
var apple , appleImg ;
var leaf , leafImg ;
var redImage , redImageImg ;
var orangeLeaf , orangeLeafImg ;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  redImageImg = loadImage("redImage.png");
  orangeLeafImg = loadImage("orangeLeaf.png")

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

//creating apple
apple = createSprite(125,135,20,30);
apple.scale = 0.07;
apple.addImage(appleImg);
apple.velocityY = +3

//creating leaf
leaf = createSprite(200,60,30,30);
leaf.scale = 0.08
leaf.addImage(leafImg);
leaf.velocityY = +2

//creating redImage
redImage = createSprite(290,120,30,30);
redImage.scale = 0.08
redImage.addImage(redImageImg);
redImage.velocityY = +2

//creating orangeLeaf
orangeLeaf = createSprite(80,150,30,30);
orangeLeaf.scale = 0.08
orangeLeaf.addImage(orangeLeafImg);
orangeLeaf.velocityY = +1
}



function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}

