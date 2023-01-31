// capture and keep track of user input

export class UserInput {
    constructor(){
        this.keys = [];
        window.addEventListener('keydown', e => {
            console.log(e.key, this.keys);
            // only log key pressed one time
            // setting element = to -1 means not present in array
            // create if statement for when button is pressed 
            // push element if not specified key used in game (arrow keys)
            if ((   e.key === 'ArrowUp'   ||
                    e.key === 'ArrowLeft' ||
                    e.key === 'ArrowRight')
            && this.keys.indexOf(e.key) === -1){
                this.keys.push(e.key);
            }
            console.log(e.key, this.keys);
        });
        window.addEventListener('keyup', e => {
            if (    e.key === 'ArrowUp'   ||
                    e.key === 'ArrowLeft' ||
                    e.key === 'ArrowRight') {
                // use splice method to remove arrowleft from this.keys array
                //splice arguments(index of the element we want to remove, how many elements to remove at that index)
                this.keys.splice(this.keys.indexOf(e.key), 1); 
            }
            console.log(e.key, this.keys);
        });
    }
}



















