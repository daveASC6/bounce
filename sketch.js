let x= 30;
let y= 30;
let xspeed = 5;
let yspeed = 5;

let r = 25;

function setup() {
  createCanvas(600, 600);

}

function draw() {
  background(0, 0, 250);
  ellipse(x, y, r*2, r*2);
  x += xspeed;
  y += yspeed;
  if (x > width - r || x < r) {
    xspeed = -xspeed;
  }
  if (y > height - r || y < r) {
    yspeed = -yspeed;
  }
  rect(300, 300,50, 50);{
    if (
  }
      
}



/*function setup(){
    createCanvas(600,600);
    background(0,0,250);
};
function draw(){
    circle(x,y,50);
    y+=1;
    x+=1;
    if (x > w
    }
};*/
