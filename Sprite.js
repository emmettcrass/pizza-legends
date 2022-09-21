class Sprite {
    constructor(config) {

        //set up images
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;
        }

        //shadow
        this.shadow = new Image();
        this.useShadow = true; //config.useShadow || false
        if (this.useShadow) {
            this.shadow.src = "/images/characters/shadow.png"
        }

        this.shadow.onload = () => {
            this.isShadowLoaded = true;
        }

        //config animation and init state
        this.animations = config.animations || {
            idleDown: [
                [0,0]
            ]
        }
        this.currentAnimation = config.currentAnimation || "idleDown";
        this.currentAnimationFrame = 0;

        //ref game obj
        this.gameObject = config.gameObject;
    }

    draw(cxt) {
        const x = this.gameObject.x - 8;
        const y = this.gameObject.y - 18;

        this.isShadowLoaded && cxt.drawImage(this.shadow, x, y)

        this.isLoaded && cxt.drawImage(
            this.image,
            0,0,
            32,32,
            x,y,
            32,32,
            )
    }
}