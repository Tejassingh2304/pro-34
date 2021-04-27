//Create variables here
var  dog, happyDog, database, foodS, foodStock, db;

function preload()
{
	//load images here
  dogimage= loadImage("Dog.png");
  happydogimage= loadImage("happyDog.png");

  
}

function setup() {
	createCanvas(800, 700);

  dog= createSprite(250,250.10,10);
  dog.addImage(dogimage)
  db= firebase.database();

  foodStock= db.ref('FOOD');
  foodStock.on("value", readStock);
}


function draw() {  
  background (46,139,87);

  drawSprites();
  //add styles here

  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happydogimage);
  }
  fill ("black");
stroke ("black");
  text ("food remaining = " +foodS,170,20)
  textSize (15);
  text ("press up arrow to feed the dog",130,10)
}

function readStock(data ){
  foodS= data.val();
}

function writeStock(x){
  if (x<=0){
    x=0;
  }
  else {
    x=x-1;
  }
  db.ref ("/").update ({
FOOD:x
  })
}



