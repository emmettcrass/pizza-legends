/* class Overworld
{
	constructor(config)
	{
		this.element = config.element;
		this.canvas = this.element.querySelector(".gameCanvas");
		this.ctx = this.canvas.getContext("2d");
		this.map = null;
	}

	startGameLoop()
	{
		const step = () =>
		{

			//clears canvas after each frame so it is not messy gross
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            //establish camera person
            const cameraPerson = this.map.gameObjects.hero;


            //update all objects
            Object.values(this.map.gameObjects).forEach(object =>
                {
                    object.update(
                        {
                            arrow: this.directionInput.direction,
                            map: this.map,
                        })
                })


			//draw lower layer
			this.map.drawLowerImage(this.ctx, cameraPerson);

			//draw game objects here
			Object.values(this.map.gameObjects).forEach(object =>
			{
				object.sprite.draw(this.ctx, cameraPerson);
			})

			//draw upper layer
			this.map.drawUpperImage(this.ctx, cameraPerson);

			requestAnimationFrame(() =>
			{
				step();
			})
		}
		step();
	}

	init()
	{
		this.map = new OverworldMap(window.OverworldMap.DemoRoom);
        console.log(this.map.walls);
		this.directionInput = new DirectionInput();
		this.directionInput.init()
		this.startGameLoop();

	}
} */

class Overworld {
    constructor(config) {
      this.element = config.element;
      this.canvas = this.element.querySelector(".gameCanvas");
      this.ctx = this.canvas.getContext("2d");
      this.map = null;
    }
   
     startGameLoop() {
       const step = () => {
         //Clear off the canvas
         this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
   
         //Establish the camera person
         const cameraPerson = this.map.gameObjects.hero;
   
         //Update all objects
         Object.values(this.map.gameObjects).forEach(object => {
           object.update({
             arrow: this.directionInput.direction,
             map: this.map,
           })
         })
   
         //Draw Lower layer
         this.map.drawLowerImage(this.ctx, cameraPerson);
   
         //Draw Game Objects
         Object.values(this.map.gameObjects).forEach(object => {
           object.sprite.draw(this.ctx, cameraPerson);
         })
   
         //Draw Upper layer
         this.map.drawUpperImage(this.ctx, cameraPerson);
         
         requestAnimationFrame(() => {
           step();   
         })
       }
       step();
    }
   
    init() {
     this.map = new OverworldMap(window.OverworldMap.DemoRoom);
     this.map.mountObjects();
   
     this.directionInput = new DirectionInput();
     this.directionInput.init();
   
     this.startGameLoop();
    }
   }