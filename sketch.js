const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber1, rubber2, rubber3, rubber4, rubber5;
var stone;
var iron;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    //stone is grey piece
    //

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber1 = new Rubber(520, 100, 30);
    rubber2 = new Rubber(100, 100, 30);
    rubber3 = new Rubber(180, 100, 30);
    rubber4 = new Rubber(260, 100, 30);
    rubber5 = new Rubber(340, 100, 30);
    stone = new Stone(150, 40);
    iron = new Iron(400, 40);
    


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    stone.display();
    iron.display();

    
 
}