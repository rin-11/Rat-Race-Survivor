export class HealthMetric {
    constructor(game){
        this.game = game;
        this.fontSize = 45;
        this.fontFamily = 'SmackBoom';
      
    };
    
    draw(context){
        // if(this.time > this.maxTime) this.endGame = true;
        //     this.background.update();
        //     this.player.update(this.input.keys)
            ;
        // health bar properties
        context.font = this.fontSize + 'px ' + this.fontFamily;
        context.textAlign = 'center';
        context.fillStyle = this.game.fontColor;


    // .fillText() for text to appear on progress bar
    // pull in health value from game class that is linked to collision()
        context.fillText('Score: ' + this.game.score, 100, 50)
        context.font = this.fontSize + 'px ' + this.fontFamily;
        context.fillText('Timer: ' + (this.game.time * 0.0001).toFixed(1), 120, 100)
//end game
    }}
