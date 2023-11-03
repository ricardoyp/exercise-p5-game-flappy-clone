let bird;
let backgroundImg;
let img1;
let floor;

function preload(){
    backgroundImg = loadImage('background-day.png');
    img1 = loadImage('yellowbird-midflap.png');
    floor = loadImage('base.png')
}

function setup(){  
    bird = new Bird((backgroundImg.width / 2) - (img1.width) / 2, 100, 3, 1, img1); //posicina al pajaro en el medio
    createCanvas(backgroundImg.width, backgroundImg.height);

}

function draw(){
    background(backgroundImg);
    bird.update();
    bird.draw();
    image(floor, 0, backgroundImg.height - floor.height); //posiciona el suelo
    bird.isCollisionFloor(backgroundImg, floor);
}



