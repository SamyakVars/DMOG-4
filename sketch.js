var tgroup, collidergroup, obgroup;

var player, panimation, pidle, pjump, pdeath;

var level, gamestate = true;
var GOimg, blank;

var levelState


// Bug 1: Random borders appear     Maybe solved: windowWidth, windowHeight
// Bug 2: Death Animation not playing



function preload(){
  bg = loadImage("Images/Bg.png")
  GOimg = loadImage("Images/GO.png")
  blank = loadImage("Images/Blank.png")

  pdeath = loadAnimation("Images/Dyso/Other/d1.png", "Images/Dyso/Other/d2.png", "Images/Dyso/Other/d3.png", "Images/Dyso/Other/d4.png", "Images/Dyso/Other/d5.png", "Images/Dyso/Other/d6.png", "Images/Dyso/Other/d7.png", "Images/Dyso/Other/d8.png", "Images/Dyso/Other/d9.png", "Images/Dyso/Other/d10.png")
  
}
function setup() {
  

  tgroup = createGroup()
  collidergroup = createGroup()
  obgroup = createGroup()

  level = new lvl1()

  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(200); 
  
  level.play()

  drawSprites();
  
}

function mousePressed(){
  console.log(mouseX, mouseY)
}

