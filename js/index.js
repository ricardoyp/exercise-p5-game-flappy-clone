let bird;
let floor;
let pipes = [];
let pipesUpsideDown = [];

let backgroundImg;
let img1;
let imgBase;
let imgPipe;
let imgPipeUpsideDown;

let speed = 1.5 ;
let pipesSpaces = 250;
let lastPositionPipe = 0;
let difficulty = 400;

let finish = false;

function preload(){
    backgroundImg = loadImage('background-day.png');
    img1 = loadImage('yellowbird-midflap.png');
    imgBase = loadImage('base.png')
    imgPipe = loadImage('tube.png')
    imgPipeUpsideDown = loadImage('tubeUpsideDown.png');

}

function setup(){  
    bird = new Bird((backgroundImg.width / 2) - (img1.width) / 2, 100, 30 , 2, img1); //posicina al pajaro en el medio
    floor = new Floor(0, speed, imgBase);
    createCanvas(backgroundImg.width, backgroundImg.height);

}

function makePipes(){
    let random = Math.floor(Math.random() * (325 - 175 + 1)) + 175;
    if(lastPositionPipe < lastPositionPipe + pipesSpaces){
        pipes.push(new Pipe(lastPositionPipe, random,  speed, imgPipe));
        pipesUpsideDown.push(new Pipe(lastPositionPipe, random - difficulty, speed, imgPipeUpsideDown));
        lastPositionPipe += pipesSpaces;
    }

    for(i = pipes.length - 1 ; i >= 0 ; i--){
        pipes[i].move();
        pipesUpsideDown[i].move();
        pipes[i].draw();
        pipesUpsideDown[i].draw();

        bird.isCollidingPipe(pipes[i])
        bird.isCollidingPipe(pipesUpsideDown[i])

        if (pipes[i].positionX + imgPipe.width < 0) {
            pipes.splice(i, 1);
        }
    }
}

function draw(){
    background(backgroundImg);
    bird.update();
    bird.draw();
    bird.isCollisionFloor(backgroundImg, imgBase);
    floor.move(backgroundImg);

    makePipes();

    floor.draw();
}

class Pipe{
    constructor(positionX, positionY, speed, imgPipe) {
        this.positionX = positionX;
        this.speed = speed;
        this.imgPipe = imgPipe;
        this.positionY = positionY;
      }
    
      draw() {
        image(this.imgPipe, this.positionX, this.positionY);
      }

    move(){
        if(!finish)
        this.positionX -= this.speed;
    }
}
