var monster_img;
var cookie_img;
var points;
var monster_x, monster_y;
var cookie_x, cookie_y;
var misses;
var cake_img;
var pie_img
var pie_x, pie_y;
var cake_x, cake_y;
var speed;

function preload() {
  monster_img = loadImage("assets/cookie_monster.png");
  cookie_img = loadImage("assets/cookie.png");
  cake_img = loadImage("assets/cake.png");
  pie_img = loadImage("assets/pie.png");
  soundFormats('mp3');
  mySound = loadSound("libraries/yum.mp3");
}

function setup() {
  createCanvas(720, 400);
  monster_x = 150
  monster_y = height-150;
  cookie_x = 725;
  cookie_y = random(350);
  cake_x = 725;
  cake_y = random(350);
  pie_x = 725;
  pie_y = random(350);
  points = 0;
  misses = 0;
  button = createButton('restart for redemption');
  speed = 0;
}

function draw() {
  if(misses < 3) {
    background(200);
    displayPoints();
    displayMisses();
    
    image(monster_img, monster_x, monster_y);
    image(cookie_img, cookie_x, cookie_y);
    image(cake_img, cake_x, cake_y);
    image(pie_img, pie_x, pie_y);
    
    moveCookie();
    moveCake();
    movePie();
    moveMonster();
    checkForChomp();
    checkForPie();
    checkForCake();
  }
  
  else {
    gameOver();
  }
  //if (misses >= 3) {
    //gameOver();
  //}
}

function displayMisses() {
  fill(160,0,0);
  textSize(150);
  text(misses,10,130);
  fill(160,0,0);
  textSize(50);
  text("misses",100,70);
}

function displayPoints() {
  fill(160);
  textSize(150);
  text(points,10,370);
  fill(160);
  textSize(50);
  text("points",100,350);
}

function moveCookie() {
  if(cookie_x < 0) {
    cookie_x = 725;
    cookie_y = random(350);
    //misses++;
  }
  else 
    cookie_x -= 3+speed;
}

function movePie() {
  if(pie_x < 0) {
    pie_x = 725;
    pie_y = random(350);
  }
  else 
    pie_x -= 5+speed;
}

function moveCake() {
  if(cake_x < 0) {
    cake_x = 725;
    cake_y = random(350);
  }
  else 
    cake_x -= 7+speed;
}

function moveMonster() {
  if(keyIsDown(UP_ARROW) && monster_y > 0)
    monster_y -= 10;
  if(keyIsDown(DOWN_ARROW) && monster_y < height-150)
    monster_y += 10;
    if(keyIsDown(LEFT_ARROW) && monster_x > 0)
    monster_x -= 10;
  if(keyIsDown(RIGHT_ARROW) && monster_x < 550)
    monster_x += 10;
}

function checkForChomp() {
  var d = dist(cookie_x, cookie_y, monster_x, monster_y);
  if (d < 100) {
    points += 1;
    cookie_x = 725;
    cookie_y = random(350);
    speed+=1;
    mySound.play();
  }
}

function gameOver() {
  if (misses >= 3) {
    background(250,0,0);
    fill(150);
    textSize(50);
    text("Gameover u loser",160,200);
    button.show();
    button.position(250, 250);
    button.mousePressed(restart);
    speed = 0;
    }
}

function restart(){
  misses = 0;
  points = 0;
  //button.position(-100,-100);
  button.hide();
}

function checkForPie() {
  var d = dist(pie_x, pie_y, monster_x, monster_y);
  if (d < 50) {
    misses += 1;
    pie_x = 725;
    pie_y = random(350);
    speed+=2;
    
  }
}

function checkForCake() {
  var d = dist(cake_x, cake_y, monster_x, monster_y);
  if (d < 50) {
    misses += 1;
    cake_x = 725;
    cake_y = random(350);
    speed+=2;
  }
}