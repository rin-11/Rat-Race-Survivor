// capture and keep track of user input

export class UserInput {
    constructor(game){
        this.game = game;

        // empty array to push keys that are pressed
        this.keys = [];

        window.addEventListener('keydown', event => {
            console.log(event.key, this.keys);
            
            
            
            // only log key pressed one time
                // create if statement for when button is pressed 
                // push element from aray if not specified key used in game (arrow keys)
            
            // if any of the keys to be assigned functions are pressed
            if ((   event.key === 'ArrowUp'   ||    
                    event.key === 'ArrowLeft' ||
                    event.key === 'ArrowRight')
                
                    // and they are not already in current draw array

            && this.keys.indexOf(event.key) === -1) // setting element = to -1 means not present in array
                                            {
                this.keys.push(event.key); // add key to array




         // collision detection
            } else if (event.key === 'd') this.game.debug = !this.game.debug;
    
            // console.log(e.key, this.keys);
        });
        window.addEventListener('keyup', event => {
            if (    event.key === 'ArrowUp'   ||
                    event.key === 'ArrowLeft' ||
                    event.key === 'ArrowRight') {
                // use splice method to remove from this.keys array
                //splice arguments(index of the element we want to remove, how many elements to remove at that index)
                this.keys.splice(this.keys.indexOf(event.key), 1); 
            }
            console.log(event.key, this.keys);
        });
    }
}



















