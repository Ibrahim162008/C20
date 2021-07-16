
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var rock;
var ball;
var ground;
var wall;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }

  var rock_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };

   var wall_options ={
    isStatic: true
  };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  wall = Bodies.rectangle(200,390,20,800,wall_options);
  World.add(world,wall);

  ball = Bodies.circle(50,10,50,ball_options);
  World.add(world,ball);

  rock = Bodies.circle(300,10,50,rock_options);
  World.add(world,rock);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,50);
  ellipse(rock.position.x,rock.position.y,50);
  rect(ground.position.x,ground.position.y,400,20);
  rect(wall.position.x,wall.position.y,20,800);

  
}

