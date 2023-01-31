
import { Player } from './player.js';
import { UserInput } from './input.js';


// put all JS inside callback function LOAD event 
// so JS waits for all images to be fully loaded before
// running

window.addEventListener('load', function(){
    const canvas = document.getElementById('streetcanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1500;
    canvas.height = 500;

    class Game {
        constructor(width, height){
            this.width = width;
            this.height = height;
            
            // import player class 
            this.player = new Player(this);
            
            // keys pressed log in console
            this.input = new UserInput(); 
        }
        update(){
            this.player.update(this.input.keys); // add key input as argument
        }
        draw(context){
            this.player.draw(context);
        }
    }
    //create an instance of game class -- trigger class constructor game which triggers new player
    const game = new Game(canvas.width, canvas.height); 
    console.log(game);
    // let lastTime = 0;

    // add animation loop so game updates/draws 60 times per second
    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height); // keeps the player image from dragging
        game.update(); //run animation
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate();
});



















