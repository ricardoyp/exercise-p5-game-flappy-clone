let floor;
function preload(){
    floor = loadImage('base.png')
}
class Floor {
    constructor(positionX, speed){
        this.positionX = positionX;
        this.speed = speed;
    }

    draw(){
        image(floor, this.positionX, backgroundImg.height - floor.height); //posiciona el suelo
    }

    move(){
        this.positionX -= this.speed;
        if(this.x < floor.width) {
            this.positionX = 0;
        }
    }
}