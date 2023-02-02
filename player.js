
// player class for main character who will move with keys pressed
// ---------------------------------------------------------------------------------------------
export class Player {
    constructor(game){ 

        // point to the game object
        this.game = game;

        // player size
        this.width = 150;
        this.height = 100;

        // player starting position
        this.x = 0;
        this.y = this.game.height - this.height; // bottom of canvas

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

// ---------------------------------------------------------------------------------------------
// update method to link to user input keys module
    update(input){  
        this.collision();
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
        if (input.includes('ArrowUp') && this.onGround()) this.vy -= 25; 
        this.y += this.vy; 
        // use weight to bring player back from jump
        if (!this.onGround()) this.vy += this.weight;
        // reset back to 0 to stop vertical movement
        else this.vy = 0;
    }

    // draw method for player image
    draw(context){ // context is an argument to point to game canvas
        // .strokeRect = canvas 2D method to draw rectangle outline
        if(this.game.debug) context.strokeRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.x, this.y, this.width, this.height); //(image, player starting position, player size)
    }
    
    onGround(){ 
        return this.y >= this.game.height - this.height;
    }
    collision(){
        this.game.characters.forEach(character => {
            // collision 

            // set different hit point value for each character
            
                        // horizontal check
            if( character.x < this.x + this.width &&
                character.x + character.width > this.x &&
                        // vertical check
                character.y < this.y + this.height &&
                character.y + character.height > this.y
            ){ // minus health points
            //    this.game.health + this.game.character.hitPoints;
               // further develop this by creating an array for enemies with different
               // hitpoint values and subtract based on which collision
            } else {
            }
         });
    }
}