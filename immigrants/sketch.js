//var readDer= false;
immigrants=0;
starsX=[];
starsY=[];
otherX=[0,10,20,30,40,50,60,70,80,90,100];
otherY=[0,20,30,40,50,60,70,80,90,100,110];
var img;
var police;

function setup() {
  createCanvas(600,600);
  img= loadImage("map.png");
  police= loadImage("police.png");
   for (var i=0;i<100;i++){
      starsX[i]=int(random(width));
      starsY[i]=int(random(height-250));
   }
   //noStroke();
}

function draw() {
  background(img,0,0);

  
//positioned circles; american citizens 
  ellipse(100,100,5,5);
  ellipse(15,20,5,5);
  ellipse(75,75,5,5);
  ellipse(590,400,5,5);
  ellipse(500,370,5,5);
  ellipse(355,520,5,5);
  ellipse(200,510,5,5);
  ellipse(412,312,5,5);
  ellipse(15,400,5,5);
  ellipse(40,500,5,5);
fill(255,0,0);
  //illegal immigrants randomly positioned
  for (var i=0;i<starsX.length;i++){
     ellipse(starsX[i],starsY[i],5,5);
  }
  stroke(99,249,219);
  fill(0,0,255);
  image(police,mouseX,mouseY);
  for (var a=0;a<starsX.length;a++){
   hit=collideRectCircle(mouseX,mouseY,20,20,starsX[a],starsY[a],2);
   if (hit){
      starsX[a]=-5;
      starsY[a]=-5;
      immigrants++;
   }
  }
  text("Capture The Red Dots!" +immigrants,300,400);
  textSize(20);
  if (immigrants==100){
    background(0);
    text('Congratulations America Is Now Free Of All Illegal Immigrants',100,300);
  }
}




