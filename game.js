
// TO DO
//     create instructions page and play button
//     setInterval for length of game to win
//     create hitpoints for each character and set min/max for health score
//     create gameOver() for when health hits 0
//     fix backgrounds to be continuous
//     add collision sound effects/graphics



import { Player } from './player.js';
import { Cat, Poison, Trap, Cheese } from './characters.js';
import { UserInput } from './input.js';
import { Background } from './backgrounds.js';
import { HealthMetric } from './metric.js';



// put all JS inside callback function LOAD event 
// so JS waits for all images to be fully loaded before
// running

window.addEventListener('load', function(){
    const canvas = document.getElementById('streetcanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1200;
    canvas.height = 500;

    class Game {
        constructor(width, height){
            this.width = width;
            this.height = height;

            // background speed and class
            this.speed = 3;
            this.background = new Background(this);
            
            // import player class 
            this.player = new Player(this);
            
            // keys pressed log in console
            this.input = new UserInput(this);
            
            // health metric instantiate
            this.healthmetric = new HealthMetric(this);

            // characters array
            this.characters = [];

            // cheese metric
            // this.cheese = new Cheese(this);

            // timer for adding characters
            this.characterTimer = 0; // time starts at 0
            this.characterInterval = 500; // time to add new character
           
            // // timer for adding cheese
            // this.cheeseTimer = 0; // time starts at 0
            // this.cheeseInterval = 1000; // time to add new character

            // collision detection
            this.debug = false;

            // health property
            this.health = 100;

            //hitpoints
            // this.hitpoints= 10;

            // health bar design
            this.fontColor = 'gold';
            this.borderColor = 'gold';
        };

        update(){
            this.background.update();
            this.player.update(this.input.keys); // add key input as argument
            //enemies timer 
            if(this.characterTimer > this.characterInterval){
                this.addCharacter();
                // reset timer back to 0 once character is added
                this.characterTimer = 0;
            } else {
                this.characterTimer += 1;
            }
            this.characters.forEach(character => {
                character.update();
            });
            
            
            // if(this.cheeseTimer > this.characterInterval){
            //     this.addCheese();
            //     // reset timer back to 0 once character is added
            //     this.cheeseTimer = 0;
            // } else {
            //     this.cheeseTimer += 1;
            // }
            //     this.cheese.update();     
        };

        draw(context){
            this.background.draw(context);
            this.player.draw(context);
            this.healthmetric.draw(context);
            this.characters.forEach(character => {
                character.draw(context)
            });
        }

        // method for character movements
        addCharacter(){
             // only add posion when the player is moving
             if (this.speed > 0) this.characters.push(new Poison(this));


            // make character dissapear once collision occurs

            // push method from enemies array
            this.characters.push(new Cat(this));
            this.characters.push(new Trap(this));
            this.characters.push(new Cheese(this));

            console.log(this.characters);
    
        // game over method
        // gameOver(){
        //     if (this.health <= 0){
        //         // end game
        // }
        }
        // addCheese(){
        //     if (this.speed > 0)
        //     console.log(new Cheese(this))
        // }
    }

    //create an instance of game class -- trigger class constructor game which triggers new player
    const game = new Game(canvas.width, canvas.height); 
    console.log(game);

    // add animation loop so game updates/draws 60 times per second
    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height); // keeps the player image from dragging
        game.update(); //run animation
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate();
});



















