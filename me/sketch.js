let img;
let xs = 2, ys=3 , tempY=3, tempX = 2;
var startX=0;
var startY=0;

let x = 0 , y = 0;
function preload(){
  img = loadImage("assets/logoyt.png");
}
function setup() {
  var canvas = createCanvas(windowWidth,windowHeight);
  canvas.parent('home');
}

function draw() {
  background(11,12,16);
  if(x> (windowWidth-80) || x<0)
    xs =  -1*xs;
  if(y> (windowHeight-50) || y<0)
    ys = -1*ys;
  x+=xs;
  y+=ys;

  image(img,x,y,80,50);
  
}
function mousePressed() {
	 startX = mouseX;
    startY = mouseY;
    tempY = ys;
  tempX =xs;
      xs=0;
      ys=0;
}
function mouseReleased() {
	
      xs=tempX;
      ys=tempY;
}
function mouseDragged() {
	var diff = startX - mouseX;
    var diff2 = startY - mouseY;
  x = x-diff;
  y=y-diff2;
    if(x<0)
    x=0;
  if(x> (windowWidth-80))
    x=windowWidth-80;
  if(y> (windowHeight-50) )
    y= windowHeight-50;
  if(y<0)
    y=0;
  startX = mouseX;
  startY = mouseY;
}