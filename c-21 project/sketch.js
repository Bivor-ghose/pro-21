var music;
var mBox;
var surface1;
var surface2;
var surface3;
var surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    createCanvas(800,600);
   surface1=createSprite(100, 550, 190, 30);
   surface1.shapeColor="red";
   surface2=createSprite(300, 550, 190, 30);
   surface2.shapeColor="blue";
   surface3=createSprite(500, 550, 190, 30);
   surface3.shapeColor="yellow";
   surface4=createSprite(700, 550, 190, 30);
   surface4.shapeColor="green";
   mBox=createSprite(random(50,750) ,50, 30, 30);
   mBox.shapeColor="white";
   mBox.velocityX=4;
   mBox.velocityY=4;

}

function draw() {
   background(rgb(169,169,169));
   
    //create edgeSprite
    edges=createEdgeSprites();
    mBox.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if (surface1.y-mBox.y<(surface1.height+mBox.height)/2){
        mBox.bounceOff(surface1);
        mBox.shapeColor="red";
        music.play();
    }
    if (surface2.y-mBox.y<(surface2.height+mBox.height)/2){
        mBox.bounceOff(surface2);
        mBox.shapeColor="blue";
        music.play();
    }
    if (surface3.y-mBox.y<(surface3.height+mBox.height)/2){
        mBox.bounceOff(surface3);
        mBox.shapeColor="yellow";
        music.play();
    }
    if (surface4.y-mBox.y<(surface4.height+mBox.height)/2){
        mBox.velocityX=0;
        mBox.velocityY=0;
        mBox.shapeColor="green";
        music.stop();
    }
    drawSprites(); 
}
