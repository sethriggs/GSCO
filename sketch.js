var car1, car2, car3, car4, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,800);
 speed = random(55,90);
 weight = random(400,1500);

 wall = createSprite(1500,200,60,height/2);
 //car1.velocityx = 20;

 car1 = createSprite(50,200,50,50);
 car1.shapeColor=("red");
 

 car2 = createSprite(50,150,50,50);
 car2.shapeColor=("blue");

 car3 = createSprite(50,100,50,50);
 car3.shapeColor=("yellow");

 car4 = createSprite(50,50,50,50);
 car4.shapeColor=("green");

}

function draw() {
  background(0,0,0);  
 
 car1;
 car2;
 car3;
 car4;;


  drawSprites();
}