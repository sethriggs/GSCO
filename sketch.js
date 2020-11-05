var car1, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(800,500);
 speed = random(55,90);
 weight = random(400,1500);

 wall = createSprite(750,100,60,height/2);
 wall.shapeColor = "blue";
 //car1.velocityx = 20;

 car1 = createSprite(50,100,50,50);
 car1.shapeColor = ("white");
 car1.velocityX = speed;
 


}

function draw() {
  background("green");  
if (wall.x - car1.x < (car1.width + wall.width)/2)
{
car1.velocityX = 0;
deformation = 0.5 *width *speed *speed/22509;
if (deformation > 180)
{
  car1.shapeColor = color(255,0,0);


}

if (deformation < 180 && deformation > 100)
{
  car1.shapeColor = color(230,230,0);
}

if (deformation < 100)
{
  car1.shapeColor = color(0,0,255);


}
}
 
 
 


  drawSprites();
}