
// Use JavaScript Modules in order to keep code organized
// have one main game js linked to HTML which I can export all of my other js files to
// using modules requires live serve (I can do this by hitting "Go Live" on VS code)
    
// - main game js ( HTML- <script type= "module" src="game.js"></script>)


    // in main game class include (pass through) all of the propeties/methods for the game in contructor object
        // make constructor argument in child module classes (game) 
        // & put "this.game" as a property in constructor object to point to main game class
        // instantiate other classes once imported 
            //-- when (game) is imported classes argument pass through (this) to point to main game object housing imported class

    // module universal methods throughout game
        // update () -- method for calculations and updating animation
            // movement from player keys, character array, collision, health bar


        // draw (context) -- method for drawing all of the images/ (context) points to canvas
                // declare imported classes draw methods (context)



    // instantiate game class() <--- pass through canvas width/heigh that are outside of game class but on the same script
            // "canvas.height" "canvas.width"
    
    // animation loop function to update and draw 60 times/second
        // pass in game.draw method and point to canvas.getContext

// ---------------------------------------------------------------------------------

        // classes to import to main game

                // backgrounds js
                
                // - player js
                
                // - user input js for key functions
                    // keydown event -- fired when a key is pressed
                            // use addEventListener & an arrow function
                            // property: event.key
                                // returns a string representing the key value of the key represented by the event
                            // only count each key once when held down
                            // push keys into array after checking if in current draw 
                    // keyup event -- fired when a key is released
                            // SPLICE method to remove event.key


                // -- health bar js
                
                // -- characters js

























