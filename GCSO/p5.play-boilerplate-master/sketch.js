var car,wall,car1,wall1,car2,wall2,car3,wall3,car4,wall4
var speed,weight
var smallwall;


function setup() {
  createCanvas(400,400);
  speed=random(55,90)
  weight=random(400,1500);

  car=createSprite(50, 48, 10, 10);
  wall=createSprite(380,48,20,60);
  smallwall=createSprite(200,100,400,5);
  
  car1=createSprite(50, 150, 10, 10);
  wall1=createSprite(380,150,20,60);
  smallwall=createSprite(200,200,400,5);

  car2=createSprite(50,246,10,10);
  wall2=createSprite(380,246,20,60);
  smallwall=createSprite(200,300,400,5);

  car3=createSprite(50,350,10,10);
  wall3=createSprite(380,350,20,60)
 
}

function draw() {
  background(0); 
  car.velocityX=speed; 
  car1.velocityX=speed;
  car2.velocityX=speed;
  car3.velocityX=speed;

  if (wall.x-car.x<(car.width+wall.width)/2) {
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
      car.shapeColor=color(255,0,0);

    }
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      car.shapeColor=color(0,225,0);

    }
  }

  if (wall1.x-car1.x<(car1.width+wall1.width)/2) {
    car1.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
      car1.shapeColor=color(255,0,0);

    }
    if(deformation<180 && deformation>100){
      car1.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      car1.shapeColor=color(0,225,0);

    }
  }

  if (wall2.x-car2.x<(car2.width+wall2.width)/2) {
    car2.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
      car2.shapeColor=color(255,0,0);

    }
    if(deformation<180 && deformation>100){
      car2.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      car2.shapeColor=color(0,225,0);

    }
  }

  if (wall3.x-car3.x<(car3.width+wall3.width)/2) {
    car3.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
      car3.shapeColor=color(255,0,0);

    }
    if(deformation<180 && deformation>100){
      car3.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      car3.shapeColor=color(0,225,0);

    }
  }
  drawSprites();
}