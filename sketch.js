var bob,bob2,bob4,bob5,bob6;
var string,string2,string3,string4,string5;
var bar;
function setup() {
  createCanvas(800,400);
  bob=createSprite(400, 200, 50, 50);
  bob2=createSprite(450,200,50,50);
  bob4=createSprite(500,200,50,50);
  bob5=createSprite(350,200,50,50);
  bob6=createSprite(300,200,50,50);
  string=createSprite(400,150,10,50);
  string2=createSprite(450,150,10,50);
  string3=createSprite(500,150,10,50);
  string4=createSprite(350,150,10,50);
  string5=createSprite(300,150,10,50);
  bar=createSprite(400,120,400,20)

}

function draw() {
  background(255,255,255); 
  bob.shapeColor="red";
  bob2.shapeColor="blue";
  bob4.shapeColor="yellow"
  bob5.shapeColor="orange";
  bob6.shapeColor="magenta"
  drawSprites();
}

