class Rock {
    constructor(x, y, w, h) {
        this.x = x
        this.w = w

        this.y = y
        this.h = h

        this.body = createSprite(x, y, w, h)
        this.rock = loadImage("bestrock.png")
        this.body.addImage(this.rock)
        this.body.debug = false
        this.body.setCollider("rectangle", 0, -60, 300, 600)

        this.body.rotation = 180;
       this.body.rotateToDirection = true;


    }
    display() {
        if (person1.isTouching(this.body)) {
            this.body.velocityY = 10;
           // this.body.rotation = 180;
        //this.body.rotateToDirection = true;
        }

        this.body.scale = 0.2;

        drawSprites()

    }
}