
// create player class to draw character
export class Player {
    constructor(game){ //game object as an argument

        // point to the game object
        this.game = game;

        // player size
        this.width = 150;
        this.height = 200;

        // player position
        this.x = 0;
        this.y = this.game.height - this.height;

        // vertical speed
        this.vy = 0;
        // use weight to come down from jump
        this.weight = 1; 

//      // grab player image from HTML
        this.image = document.getElementById('player');

        // player movement
        this.speed = 0;
        this.maxSpeed = 10;
    }

    update(input){ 

        // horizontal movements
        this.x += this.speed;
        // if(userinput.includes('ArrowRight')) this.x++;
        if(input.includes('ArrowRight')) this.speed = this.maxSpeed;
        // else if (userinput.includes('ArrowLeft')) this.x--;
        else if (input.includes('ArrowLeft')) this.speed = -this.maxSpeed;
        else this.speed = 0; // no horizontal movement when key is not being pressed
        
        // set boundary so player cannot leave canvas screen
        if (this.x <0) this.x = 0;
        if (this.x > this.game.width- this.width) this.x = this.game.width- this.width;

        // vertical movement
        if (input.includes('ArrowUp') && this.onGround()) this.vy -= 20; 
        this.y += this.vy; 
        // use weight to bring player back from jump
        if (!this.onGround()) this.vy += this.weight;
        // reset back to 0 to stop vertical movement
        else this.vy = 0;
    }

    draw(context){ // context is an argument to specify which canvas element we want to draw on 
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    
    onGround(){ 
        return this.y >= this.game.height - this.height;
    }
}

























