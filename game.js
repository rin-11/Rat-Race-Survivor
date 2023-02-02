
// TO DO
//     create instructions page and play button
//     setInterval for length of game to win
//     create hitpoints for each character and set min/max for health score
//     create gameOver() for when health hits 0
//     add collision sound effects/graphics

// ------------------------------------------------------------------------------------

import { Player } from './player.js';
import { Cat, Poison, Trap, Cheese } from './characters.js';
import { UserInput } from './input.js';
import { Background } from './backgrounds.js';
import { HealthMetric } from './metric.js';

// ------------------------------------------------------------------------------------

// put all JS inside callback function LOAD event 
// so JS waits for all images to be fully loaded before running
window.addEventListener('load', function(){
    const canvas = document.getElementById('gamecanvas');
    const canvasgame = canvas.getContext('2d');
    canvas.width = 1200;
    canvas.height = 500;

// ------------------------------------------------------------------------------------

// ALL LOGIC MUST BE PASSED THROUGH THIS CLASS
    class Game {
        constructor(width, height){
            // convert to class properties
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


            // timer for adding characters
            this.characterTimer = 0; // time starts at 0
            this.characterInterval = 500; // time to add new character
           
            

            // collision detection
            this.debug = false;

            // health property
            this.health = 100;


            // health bar design
            this.fontColor = 'gold';

        };

// ------------------------------------------------------------------------------------

        // method for calculations and updating animations
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
        };

// ------------------------------------------------------------------------------------

    // method for drawing all of the images 
        draw(context){
            this.background.draw(context);
            this.player.draw(context);
            this.healthmetric.draw(context);
            this.characters.forEach(character => {
                character.draw(context)
            });
        }

// ------------------------------------------------------------------------------------
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
        }
    }

// ------------------------------------------------------------------------------------
// method for ending the game or winning the game
        // gameOver(){
        //     if (this.health <= 0){
        //         // end game
        // }


// ------------------------------------------------------------------------------------
    //create an instance of game class -- trigger class constructor game which triggers new player
        // triggers class constructor (pull in canvas elements outside game class)
    const game = new Game(canvas.width, canvas.height); 
    console.log(game);


// ------------------------------------------------------------------------------------
    //animation loop so game updates/draws 60 times per second
    function animate(){

        // clear canvas after each new draw 
        canvasgame.clearRect(0, 0, canvas.width, canvas.height); 
                // keeps the player/charcter images from dragging

        game.update();
        game.draw(canvasgame);

        // animation loop
        requestAnimationFrame(animate);
                // used in place of setTimeout/ setInterval for animations
    }
    animate();
});



















