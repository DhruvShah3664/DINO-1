var dino;

var ground;

var cloud;

function preload(){
    
}


function setup(){
 createCanvas(1000, 500);

    dino = createSprite(100, 475, 20, 40);
    

    ground = createSprite(500, 490, 2000, 15);
    ground.shapeColor = ("brown")
}

function draw(){
background(230);

    ground.velocityX = -3;

    if(ground.x <0){
    ground.x = ground.width/2;
    }

   dino.collide(ground);


drawSprites();
}