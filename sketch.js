var ball 
function setup() {
  createCanvas(400,400);
  ball = createSprite(200, 200, 10, 10)

}

function draw() 
{
  background(30);

  if (keyDown("right")) {
    ball.position.x = ball.position.x + 3
  }
  if (keyDown("left")) {
    ball.position.x = ball.position.x - 3
  }

  drawSprites ()
}




