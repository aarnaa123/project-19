var hunter,jungle,cub,hunter_img,jungle_img,cub_img;

function preload(){

hunter_img=loadImage("hunter.jpg")
jungle_img=loadImage("jungle.jpg")
cub_img=loadImage("tigercub.jpg")
}
function setup(){
    createCanvas(600,300)

    jungle=createSprite(300,150,1200,10)
    jungle.addImage(jungle_img)
    jungle.velocityX=-2
    jungle.scale=2
   
    hunter=createSprite(60,290,10,10)
    hunter.addImage(hunter_img);
    hunter.scale=0.4

    cub=createSprite()
}
function draw(){
if(jungle.x<0){
    jungle.x=jungle.width/2
}






drawSprites();
}
