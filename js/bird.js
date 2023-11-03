class Bird {
  constructor(positionX, positionY, speed, gravity, img1) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.speed = speed;
    this.gravity = gravity;
    this.img1 = img1;
    this.isKeyPressed = false;
  }

  update() {
    if (keyIsPressed && !this.isKeyPressed) {
      this.move();
      this.isKeyPressed = true;
    } else if (!keyIsPressed) {
      this.isKeyPressed = false;
    }
    this.moveDown();
  }

  move() {
    this.positionY -= this.speed;
  }

  moveDown() {
    this.positionY += this.gravity;
  }

  isCollisionFloor(backgroundImg, floor) {
    if (this.positionY + this.img1.height > backgroundImg.height - floor.height) { //le tengo que sumar la altura del pajaro
      this.gravity = 0;
      finish = true;
    } 
  }

  isCollidingPipe(pipe) {
    let pipeX = pipe.positionX;
    let pipeY = pipe.positionY;
    let pipeWidth = pipe.imgPipe.width;
    let pipeHeight = pipe.imgPipe.height;
  
    if (
      this.positionX + this.img1.width > pipeX &&
      this.positionX < pipeX + pipeWidth &&
      this.positionY + this.img1.height > pipeY &&
      this.positionY < pipeY + pipeHeight
    ) {
      finish = true;
      this.gravity = 0;
    }
  };
  

  draw() {
    image(img1, this.positionX, this.positionY);
  }


}
