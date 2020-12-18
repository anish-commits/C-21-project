var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400); 
  speed = random(123,321);
  weight = random(30,52);
  bullet = createSprite(40, 200, 50, 30);
  bullet.velocityX = speed;
  thickness = random(22,83);
  wall = createSprite(1300,200,thickness,height/2);
  wall.shapeColor = "white";
}

function draw() {
  background("black"); 
  console.log(damage) ;
  if(hascollided(wall,bullet)){
    bullet.velocityX = 0
    var damage= 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor = "red";
    }
    if(damage<10){
      wall.shapeColor = "green";
    }
  
  
}
drawSprites();
}
function hascollided(o1,o2){
  if(o1.x-o2.x<o1.width/2 + o2.width/2){
    return true;
  }
  else {
    return false;
  }
}