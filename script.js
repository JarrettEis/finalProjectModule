let numOfStars = 800;
let windowOffSet = 20;
let playerRotation = 0;
let playerRotationVel = 0;
let playerX = 0;
let playerY = 0;
let playerXPos = 0;
let playerYPos = 0;
let playerColor = (220,220,220);
let stars = [];
class Star{
    constructor(){
        this.x = random();
        this.y = random();
        this.size = random(0.25, 3);
        this.xPos = width * this.x;
        this.yPos = height * this.y;
    }
    draw(){
        this.xPos = width * this.x;
        this.yPos = height * this.y;
        noStroke();
        circle(this.xPos,this.yPos,this.size);
    }
}
class Player{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.size = 40;
    }
    draw(){

    }
}
function setup(){
    createCanvas(windowWidth - windowOffSet, windowHeight - windowOffSet);
    for (var i = 0; i < numOfStars; i++) {
		stars[i] = new Star();
	}
    angleMode(DEGREES);
    playerX = width/2;
    playerY = height/2;
}
function windowResized(){
    resizeCanvas(windowWidth - windowOffSet, windowHeight - windowOffSet);
}
function draw(){
    background(5,5,10);
    for (var i = 0; i < stars.length; i++) {
		stars[i].draw();
	}
    if (keyIsDown(65)){
        playerRotationVel -= .05;
    }
    if (keyIsDown(68)){
        playerRotationVel += .05;
    }
    playerRotation += playerRotationVel;
    drawPlayerBackpack();
    drawPlayerHead();
}
//start of player draw functions
let backpackWidth = 75;
let backpackHeight = 115;
let headSize = 55;
function drawPlayerBackpack(){
    push();
    stroke(0)
    fill(playerColor);
    translate(playerX,playerY);
    rotate(playerRotation);
    rect((backpackWidth/2)*-1,(backpackHeight/2)*-1,backpackWidth, backpackHeight, 10);
    pop();
}
function drawPlayerHead(){
    push();
    stroke(0)
    fill(playerColor);
    translate(playerX,playerY);
    rotate(playerRotation);
    circle(0,((backpackHeight/2) + (headSize/8))*-1, headSize);
    stroke(0)
    fill(0);
    rect((headSize/2.5)*-1,((backpackHeight/2) + (headSize/2.5))*-1, headSize - (headSize/5),headSize/2,10)
    pop();
}
