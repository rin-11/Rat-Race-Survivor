export class HealthMetric {
    constructor(game){
        this.game = game;
        this.fontSize = 40;
        this.fontFamily = 'SmackBoom';
    };
    
    draw(context){
        // health bar properties
        context.font = this.fontSize + 'px ' + this.fontFamily;
        context.textAlign = 'center';
        context.fillStyle = this.game.fontColor;


    // .fillText() for text to appear on progress bar
    // pull in health value from game class that is linked to collision()
        context.fillText('Health: ' + this.game.health, 600, 50)
    };
}