// Enemy Parent Class -- properties/methods for all three enemies
class Enemy {
    constructor(){ //game object as an argument

    }
    // move enemy around
    update(){ 
        // enemy movement- decrease x coordinate by speed property
        // this.x -= this.speedX;
        // this.y --;
    }

    // draw image
    draw(context){
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}  

// Seperate enemies in subclasses for different movements
// Enemies subclasses (child classes)
// use extends keyword to point to parent class

export class Cat extends Enemy {
    constructor(game){
// super keyword is used to access and call functions of an object's parent
        super();
        this.game = game;

        // cat size
        this.width = 150;
        this.height = 200;

        // starting coordinates
        this.x= this.game.width; //start from edge of canvas
        this.y= 300; // same y coordinate as rat player

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

export class Poison extends Enemy {
        constructor(game){
            // super keyword is used to access and call functions of an object's parent
            super();
            this.game = game;
            
            // posion size
            this.width = 500;
            this.height = 600;
            
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

export class Trap extends Enemy {
    constructor(game){
        // super keyword is used to access and call functions of an object's parent
                super();
                this.game = game;
        
                // trap size
                this.width = 400;
                this.height = 250;
        
                // starting coordinates
                this.x= this.game.width; //start from edge of canvas
                this.y= 250; 
        
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























