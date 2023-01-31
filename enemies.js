// Enemy Parent Class -- properties/methods for all three enemies
class Enemy {
    constructor(){ //game object as an argument

    }
    // move enemy around
    update(){ 
        // enemy movement- decrease x coordinate by speed property
        this.x -= this.speedX;
        // this.y -= this.speedY // use this for enemies moving vertical
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
        this.speedX= 3;
        // this.speedY= 0; // use this for enemies moving vertical

        // grab image element
        this.image= document.getElementById('enemy1Cat');
    }
    update(){
        super.update();

    }
}

export class Poison extends Enemy {
    
}

export class Trap extends Enemy {

}























