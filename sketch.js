var player_img,player1,player2;

var enemy,enemy1,enemy2;

var score=0;

var bullet;

var background1;

//var enemyGroup = createGroup();

//var enemy1Group = createGroup();
    
//var enemy2Group = createGroup();
    
//var bulletGroup = createGroup();

function preload() {
    player_img = loadImage("images/player.png");
    player1 = loadImage("images/player1.png");
    player2 = loadImage("images/player2.png");
    enemy_img = loadImage("images/enemy.png");
    enemy1_img = loadImage("images/enemy1.png");
    enemy2_img = loadImage("images/enemy2.png");
    background_img = loadImage("images/bg.jpg");
    bullet_img = loadImage("images/bullet.png");
}

function setup(){
    createCanvas(1600,1000);

    background1 = createSprite(1000,50,1600,1000);
    background1.addImage("background",background_img);
    background1.velocityX= -2;
    background1.scale=9;
    background1.x = background1.width/2;

    player = createSprite(200,400,20,20);
    player.addImage("player",player_img);
    player.scale=0.4;

    bullet = createSprite(245,380,20,20);
    bullet.addImage("bullet",bullet_img);
    bullet.scale=0.05;
    bullet.visible = false
    
    enemy = createSprite(1200,400,20,20);
    enemy.addImage("enemy",enemy2_img);
    enemy.scale=0.5;
    enemy.velocityX=-6;
   
}

function draw(){
    //background(background_img);
    fill("red");
    text("Score: "+ score,1200,150);
    score = score + Math.round(getFrameRate()/60);

    if(background1.x<0){
        background1.x=background1.width/2;
    }
    
    if(keyDown("space")&&bullet.y>200) {
       bullet.velocityX = 16;
       bullet.visible = true
       bullet.x=player.x+40;
     //  bulletGroup.add(bullet);
    }

    if(keyDown(RIGHT_ARROW)){
        player.x=player.x+5;
    }

    if(keyDown(LEFT_ARROW)){
        player.x=player.x-5;
    }

  //  if (bulletGroup.isTouching(enemyGroup)) {
   //     enemyGroup.destroyEach();
    //    bulletGroup.destroyEach();
   // }
     
    drawSprites();
}


  