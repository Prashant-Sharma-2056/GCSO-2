var bullet, wall, thickness;
var weight, speed;
var damage;

function setup(){
  createCanvas(1300,400);
  wall=createSprite(1200,200,thickness,height/2);
  bullet=createSprite(50,200,40,10);
  bullet.shapeColor=("white");

  weight=Math.round(random(30,52));
  speed=Math.round(random(223,321));
  thickness=random(50,83);
  damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
  bullet.velocityX=speed;
}

function draw(){
  background(220);

  if (bullet.x-wall.x<bullet.width/2+wall.width/2&&
    wall.x-bullet.x<wall.width/2+bullet.width/2){
      bullet.velocityX=0;
      if (damage>10){
        wall.shapeColor=("red");
      }
      else if (damage<10){
        wall.shapeColor=("green");
      }
    }

  drawSprites();

  text("Speed:  "+speed+" Km/hr", 100, 350);
  text("Weight:  "+weight+" Kg", 350,350);
  text("Damage:  "+damage+" Kg Km^2 h^-2", 600,350);
}