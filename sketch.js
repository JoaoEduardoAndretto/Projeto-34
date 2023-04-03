
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var platform1, platform2,platform3,platform4;
var wall1, wall2, wall3;
var boneco;
var ground;



function setup() {
  createCanvas(600,500);

  engine = Engine.create();
  world = engine.world;

  var boneco_options = 
  {
    isStatic: false,
    restitution: 0.3,
    friction: 0.5,
    density: 1.2
  };

  var ground_options = 
	{
		isStatic: true
	};

  var platform_options = 
  {
    isStatic: true
  };
  
  var wall_options = 
  {
    isStatic: true
  };

  ground = Bodies.rectangle(10,504,1200,10,ground_options);
  World.add(world,ground);


  boneco = Bodies.rectangle(300,90,50,50,boneco_options);
  World.add(world,boneco);



  platform1 = Bodies.rectangle(300,100,100,20,platform_options);
  World.add(world,platform1);

  platform2 = Bodies.rectangle(130,250,100,20,platform_options);
  World.add(world,platform2);
  
  platform3 = Bodies.rectangle(470,250,100,20,platform_options);
  World.add(world,platform3);

  platform4 = Bodies.rectangle(300,400,100,20,platform_options);
  World.add(world,platform4);



  wall1 = Bodies.rectangle(-4,501,10,1000,wall_options);
  World.add(world,wall1);

  wall2 = Bodies.rectangle(604,10,10,1000,wall_options);
  World.add(world,wall2);

  wall3 = Bodies.rectangle(601,-4,1200,10,wall_options);
  World.add(world,wall3);



  Engine.run(engine);

}


function draw() 
{
  rectMode(CENTER);
  background("yellow");
  
  Engine.update(engine);


  rect(ground.position.x,ground.position.y,1200,10);

  rect(boneco.position.x,boneco.position.y,50,50);

  rect(platform1.position.x,platform1.position.y,100,20);
  rect(platform2.position.x,platform2.position.y,100,20);
  rect(platform3.position.x,platform3.position.y,100,20);
  rect(platform4.position.x,platform4.position.y,100,20);


  rect(wall1.position.x,wall1.position.y,10,1000);
  rect(wall2.position.x,wall2.position.y,10,1000);
  rect(wall3.position.x,wall3.position.y,1200,10);

  if (keyIsDown (RIGHT_ARROW))
  {
    Matter.Body.applyForce(boneco,boneco.position,{x:5,y:0})
  }

  if (keyIsDown (LEFT_ARROW))
  {
    Matter.Body.applyForce(boneco,boneco.position,{x:-5,y:0})
  }

  if (keyIsDown (UP_ARROW))
  {
    Matter.Body.applyForce(boneco,boneco.position,{x:0,y:-10})
  }

}

