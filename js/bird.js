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
    this.positionY -= this.speed*10;
  }

  moveDown() {
    this.positionY += this.gravity;
  }

  isCollisionFloor(backgroundImg, floor) {
    if ((this.position) > (backgroundImg.height - floor.height)) { //le tengo que sumar la altura del pajaro
      console.log("ayudajaja")
    }
  }

  draw() {
    image(img1, this.positionX, this.positionY);
  }


}
