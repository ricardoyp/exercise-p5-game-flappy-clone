class Floor {
  constructor(positionX, speed, imgBase) {
    this.positionX = positionX;
    this.speed = speed;
    this.imgBase = imgBase;
  }

  move() {
    if (!finish) {
      this.positionX -= this.speed;
      if (this.positionX + this.imgBase.width < width) {
        this.positionX = 0;
      }
    }
  }

  draw() {
    image(this.imgBase, this.positionX, height - this.imgBase.height); //posiciona el suelo
  }
}
