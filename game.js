
import { Player } from './player.js';
import { Cat, Poison, Trap } from './enemies.js';
import { UserInput } from './input.js';
import { Background } from './backgrounds.js';


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
            this.input = new UserInput(); 

            // enemies array
            this.enemies = [];

            // timer for adding enemies
            this.enemyTimer = 0; // time starts at 0
            this.enemyInterval = 500; // time to add new enemy


        }
        update(){
            this.background.update();
            this.player.update(this.input.keys); // add key input as argument
            
            //enemies timer 
            if(this.enemyTimer > this.enemyInterval){
                this.addEnemy();
                // reset timer back to 0 once enemy is added
                this.enemyTimer = 0;
            } else {
                this.enemyTimer += 1;
            }
            this.enemies.forEach(enemy => {
                enemy.update();
            })
        
        }
        draw(context){
            this.background.draw(context);
            this.player.draw(context);
            this.enemies.forEach(enemy => {
                enemy.draw(context);
            });
        }

        // method for enemy movements
        addEnemy(){
             // only add posion when the player is moving
             if (this.speed > 0) this.enemies.push(new Poison(this));

            // push method from enemies array
            this.enemies.push(new Cat(this));
            this.enemies.push(new Trap(this));

            console.log(this.enemies);
        }
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



















