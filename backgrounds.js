// Parallax Backgrounds

// HELPER Layer class
class Layer {
    constructor(game, width, height, speedModifier, image){
    this.game = game;
    this.width = width;
    this.height = height;
    this.speedModifier = speedModifier;
    this.image = image;
    this.x = 0;
    this.y = 0;
    }
    update(){
        // method to restart image once it scrolls to the end
        if (this.x < -this.width) this.x = 0;
        else this.x -= this.game.speed * this.speedModifier;
    }
    draw(context){
        context.drawImage(this.image, this.x, this.y, this.width, this.height);

    }
}

export class Background {
    constructor(game){
        this.game = game;
        this.width = 1500;
        this.height = 500;
        this.layer1image = document.getElementById('layer1');
        this.layer2image = document.getElementById('layer2');
        this.layer3image = document.getElementById('layer3');
        this.layer1 = new Layer(this.game, this.width, this.height, 0.9, this.layer1image)
        this.layer2 = new Layer(this.game, this.width, this.height, 0.6, this.layer2image)
        this.layer3 = new Layer(this.game, this.width, this.height, 0.3, this.layer3image)
        // background layers array
        this.backgroundLayers = [this.layer1, this.layer2, this.layer3];
    }
    update() {
        this.backgroundLayers.forEach(layer => {
            layer.update();
        })
    }
    draw(context) {
        this.backgroundLayers.forEach(layer => {
            layer.draw(context);
        })
    }
}




















