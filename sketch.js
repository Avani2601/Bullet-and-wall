
var bullet, wall;
var speed, weight, thickness;

function setup() 
{
  createCanvas(1600,400);

  thickness = random(22, 83);

  bullet = createSprite(50, 200, 50, 20);
  wall = createSprite(1200, 200, thickness, height/2);

  speed = random(223, 321);
  weight = random(30, 52);

  bullet.velocityX = speed;
}

function draw() 
{
  background("black");

  bullet.shapeColor="white";
  wall.shapeColor="white";

  if(hasCollided(bullet, wall))
  {
    bullet.velocityX=0;
    d = 0.5 * weight * speed * speed / (thickness * thickness * thickness)

    if(d>10)
    {
      wall.shapeColor=color(255,0,0);
    }

    if(d<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}

function hasCollided(lbullet, lwall)
{
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;

  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
    return false;
}