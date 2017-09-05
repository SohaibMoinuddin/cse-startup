var leftPaddle_x, leftPaddle_y;
var rightPaddle_x, rightPaddle_y;
var ball_x, ball_y;
var speedx;
var speedy;
var bounces;
var misses;

function setup() {
  createCanvas(720, 400);
  leftPaddle_x = 20;
  leftPaddle_y = height-150;
  rightPaddle_x = 680;
  rightPaddle_y = height-150;
  ball_x = 340;
  ball_y = random(350);
  button = createButton('restart for redemption');
  speedx = -3;
  speedy = 0;
  bounces = 0;
  misses = 0;
}

function draw() {
  if(misses < 4) {
    background(200);
    displayBounces();
    fill(250, 9, 0);
    rect(leftPaddle_x, leftPaddle_y, 10, 50);
    rect(rightPaddle_x, leftPaddle_y, 10, 50);
    rect(ball_x, ball_y, 10,10);
    
   
  for (i = 0; i < 400; i+=20) {
    fill(random(255),random(255),random(255));
    rect(357, i, 6, 10);
  }
    moveCookie();
    movePaddles();
    checkForLeftHit();
    checkForRightHit();
    checkWalls();
  }
  
  else {
   gameOver();
  }
}

function displayBounces() {
  fill(160,0,0);
  textSize(50);
  text(bounces,380,60);
  fill(160,0,0);
  textSize(50);
  text("Bounces",150,60);
}

function movePaddles() {
  if(keyIsDown(UP_ARROW) && leftPaddle_y > 0 && rightPaddle_y > 0)
    leftPaddle_y -= 10;
    rightPaddle_y -= 10;
  if(keyIsDown(DOWN_ARROW) && leftPaddle_y < 350 && rightPaddle_y < 350)
    leftPaddle_y += 10;
    rightPaddle_y += 10;
}

function moveCookie() {
  if(ball_x < 0) {
    restart();
    misses +=1;
  }
  if(ball_x > 720) {
    restart();
    misses += 1;
  }
    ball_x += speedx;
    ball_y += speedy;
}

function checkForLeftHit() {
  //var d = dist(cookie_x, cookie_y+37, leftPaddle_x, leftPaddle_y);
  if (leftPaddle_x+10 >= ball_x && leftPaddle_y < ball_y && leftPaddle_y+60 > ball_y+10) {
    bounces += 1;
    speedx *= -1.1;
    millis(500);
    speedy += 6*Math.random()-3;
    //mySound.play();
  }
}

function checkForRightHit() {
  //var d = dist(cookie_x, cookie_y+37, leftPaddle_x, leftPaddle_y);
  if (rightPaddle_x <= ball_x+10 && leftPaddle_y < ball_y && leftPaddle_y+60 > ball_y+10) {
    bounces += 1;
    speedx *= -1.1;
    millis(500);
    speedy += 6*Math.random()-3;
    //mySound.play();
  }
}

function gameOver() {
  if (misses > 3) {
    background(250,0,0);
    fill(150);
    textSize(50);
    text("Gameover u loser",160,200);
    button.show();
    button.position(250, 250);
    button.mousePressed(restart2);
    speed = 3;
    }
}

function restart(){
  bounces = 0;
  ball_x = 360;
  ball_y = 200;
  text("Restart and do it right this time", 100,200);
}

function restart2(){
  bounces = 0;
  misses = 0;
  ball_x = 360;
  ball_y = 200;
  //button.position(-100,-100);
  button.hide();
}

function checkWalls () {
  if (ball_y < 0 || ball_y+10 > 400) {
    speedy *= -1;
  }
}