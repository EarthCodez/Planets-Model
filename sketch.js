var i1;
var i2;
var i3;
var i4;
var i5;
var i6;
var i7;
var i8;
var i9;

function setup() {
  createCanvas(1000,1000,WEBGL);
  i1=loadImage("unnamed(1).jpg");
  i2=loadImage("unnamed(2).jpg");
  i3=loadImage("unnamed(3).jpg");
  i4=loadImage("unnamed(4).jpg");
  i5=loadImage("unnamed(5).jpg");
  i6=loadImage("unnamed(6).jpg");
  i7=loadImage("unnamed(7).jpg");
  i8=loadImage("unnamed(8).jpg");
  i9=loadImage("unnamed(9).jpg");
}

function draw(){
  background("black");
  noStroke();
  rotateY(millis() / 10000);
  if(key=='1'){
  texture(i9);
  sphere(200);
  }
  if(key=='2'){
  texture(i1);
  sphere(200);
  }
    if(key=='3'){
  texture(i2);
  sphere(200);
  rotateY(-millis() / 10000);
    }
  if(key=='4'){
  texture(i3);
  sphere(200);
  }
  if(key=='5'){
  texture(i4);
  sphere(200);
  }
  if(key=='6'){
  texture(i5);
  sphere(200);
  }
  if(key=='7'){
  texture(i6);
  sphere(200);
      texture(i8);
  torus(230);
  }
  if(key=='8'){
    texture(i8)
    sphere(200);

  }
    if(key=='9'){
    texture(i7)
    sphere(200);

  }
  if(mouseIsPressed){
    rotateX(mouseX);
  }
    orbitControl(3);
}
