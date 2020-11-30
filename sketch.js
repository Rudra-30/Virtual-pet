//Create variables here
var Dog;
var Happydog;
var database;
var foodS
var foodStock;

function preload()
{
  //load images here
  dogImage      = loadImage("dogImg.png");
  happydogImage = loadImage("dogImg1.png");
  
}

function setup() {

database = firebase.database();  
	createCanvas(500, 500);
  
Dog = createSprite(250,250,100,100);
Dog.addImage(dogImage);

foodStock = database.ref('Food');
foodStock.on("value",readStock);



}

function draw() {  

background(46,139,87);

if(keyWentDown(UP_ARROW)){

writeStock(foodS)
dog.addImage(happydogImage)
}


  drawSprites();
  //add styles here

textSize(12)
fill("red")
stroke("black")
text("Note: Press UP_ARROW key to feed Drago Milk!",450,20)


}
function readStock(data){
  foodS=data.val();
  
  }

function writeStock(x){

if(x<=0){
x=0;
}else{

x=x-1;
}

database.ref('/').update({
 Food:x 
})

}
