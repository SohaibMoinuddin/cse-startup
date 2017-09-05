var bodyColor = 255;

function setup() {
  createCanvas(400,400);
  background(0,150,200);
  hill(-100,500,400,500);
  hill(100,500,700,600);
  hill(0,600,600,500);
  strangecloud();
}

function draw() {
  noStroke();
  head();
  mouth();
  torso();
  legs();
  arms();
  hill();
  eyestate();
}

function keyPressed() {
  bodyColor = color(random(250),random(250),random(250))
}

function eyesopen() {
  fill(0,0,0);
  ellipse(200,120,20,20);
  ellipse(170,120,20,20);
  ellipse(230,120,20,20);
  
  fill(250,250,250);
  ellipse(200,120,10,10);
  ellipse(170,120,10,10);
  ellipse(230,120,10,10);
}

function eyesclosed(){
  fill(0,0,0);
  rect(160,120,20,5);
  rect(190,120,20,5);
  rect(220,120,20,5);
}

function eyestate(){
  if (mouseIsPressed){
    eyesclosed();
  }
  else {
    eyesopen();
  }
}

function head(){
  fill(bodyColor);
  triangle(100,100, 300,100,200,200);
}

function mouth(){
  fill(250,0,0);
  arc(200, 155, 40, 40, PI-QUARTER_PI,QUARTER_PI, CHORD);
}

function torso(){
  fill(bodyColor)
  ellipse(200,250,200,100);
}

function legs(){
  fill(bodyColor);
  rect(100,293,50,50);
  rect(250,293,50,50);
}

function arms(){
  fill(bodyColor);
  triangle(50,200,50,250,100,250);
  triangle(350,200,350,250,300,250);
}

function hill(x,y,w,h){
  fill(color(0,250,0));
  arc(x+(w/2),y,w,h,PI,0,PIE);
}

function strangecloud(){
  noStroke();
  fill(250,250,250);
  locationx1 = random(50,200);
  locationy1 = random(0,50);
  ellipse(locationx1,locationy1,100,20);
  ellipse(locationx1+35,locationy1+10,50,30);
  ellipse(locationx1-15,locationy1+10,90,35);
  locationx2 = random(200,350);
  locationy2 = random(0,50);
  ellipse(locationx2,locationy2,100,20);
  ellipse(locationx2+35,locationy2+10,50,30);
  ellipse(locationx2-15,locationy2+10,90,35);
}
