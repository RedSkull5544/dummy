const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies; 

var engine,world;
var ball,ground;

function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;
  
  var ground_options={
    isStatic:true
  }
  var ball_options={
    restitution:1
  }
   ball=Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);

  ground=Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);
  console.log(ground);
}

function draw() {
  background(255,255,255); 
  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
 // drawSprites();
}