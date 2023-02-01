// Character Parent Class -- properties/methods for all three enemies
class Character {
    constructor(){ //game object as an argument

    }
    // move character around
    update(){ 
        // character movement- decrease x coordinate by speed property
        // console out to use specific movements per character
        // this.x -= this.speedX;
        // this.y --;
    }

    // draw image
    draw(context){
        if (this.game.debug) context.strokeRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}  

// Seperate enemies in subclasses for different movements
// Enemies subclasses (child classes)
// use extends keyword to point to parent class

export class Cat extends Character {
    constructor(game){
// super keyword is used to access and call functions of an object's parent
        super();
        this.game = game;

        // cat size
        this.width = 100;
        this.height = 150;

        // starting coordinates
        this.x= this.game.width; //start from edge of canvas
        this.y= this.game.height- this.height; // same y coordinate as rat player

        //speed
        this.speedX= 4;
        // this.speedY= 0;

        // grab image element
        this.image= document.getElementById('enemy1Cat');
    }
    update(){
        super.update();
        this.x -= this.speedX;
    }
}

export class Poison extends Character {
        constructor(game){
            // super keyword is used to access and call functions of an object's parent
            super();
            this.game = game;
            
            // posion size
            this.width = 50;
            this.height = 100;
            
            // starting coordinates
            this.x= Math.random() * this.game.width * 0.5; // -- have poison move vertically and come in at random x location
            this.y= 0 - this.game.height; // scale down from top of canvas
            
            //speed
            this.speedY= 2;
            
            // grab image element
            this.image= document.getElementById('enemy2Poison');
                }
            update(){
                super.update();
                this.y += this.speedY;
         }       
    
    }

export class Trap extends Character {
    constructor(game){
        // super keyword is used to access and call functions of an object's parent
                super();
                this.game = game;
        
                // trap size
                this.width = 100;
                this.height = 50;
        
                // starting coordinates
                this.x= this.game.width; //start from edge of canvas
                this.y= this.game.height- this.height; 
        
                //speed
                this.speedX= 2;
        
                // grab image element
                this.image= document.getElementById('enemy3Trap');
            }
            update(){
                super.update();
                this.x -= this.speedX;
            }
}
export class Cheese extends Character {
    constructor(game){
        // super keyword is used to access and call functions of an object's parent
                super();
                this.game = game;
        
                // trap size
                this.width = 100;
                this.height = 50;
        
                // starting coordinates
                this.x= Math.random() * this.game.width * 0.5; //start from edge of canvas
                this.y= Math.random() * this.game.height * 0.5;
        
                //speed
                this.speedX= 2;
                this.speedY= 2;
        
                // grab image element
                this.image= document.getElementById('food');
            }
            update(){
                super.update();
                this.x -= this.speedX;
                this.y -= this.speedY;
            }
}

// collision logic
// set debugging mode when you press 'd' which sets a rectangle around player/character/food
// when player hits poison -50
// when player hits trap -50
// when player hits cat -25
// when player hits cheese +10

// 1. create collisions detecting method inside of player class (player.js)
// 2. create a comaprision between x & y between the player and enemies using if/else statements
// 3. if collision occurs subtract hit points from 
// Cheese
// 1. create a comaprision between x & y between the player and the cheese using if/else statements





















