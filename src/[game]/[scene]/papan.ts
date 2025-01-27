import { Scene } from "phaser";


export class papan extends Scene
{
    constructor(){
        super('papan');
    }

    create(){
        const papan = this.add.image(0, 0, 'papan').setScale(0.62);
        const close = this.add.image(0,0, 'close-button').setScale(0.7);

        papan.setPosition(this.sys.canvas.width / 2, this.sys.canvas.height / 2);
        close.setPosition(this.sys.canvas.width / 2 +460, 50);

        close.setInteractive(new Phaser.Geom.Rectangle(0, 0, close.width, close.height), Phaser.Geom.Rectangle.Contains);

        close.on('pointerdown', () => {
            this.scene.stop();
        });

        const poster_compe = this.add.image(0, 0, 'poster-competition');
        poster_compe.setScale(0.25);
        poster_compe.setPosition(this.sys.canvas.width / 2 -200, this.sys.canvas.height / 2+30);

        poster_compe.setInteractive(new Phaser.Geom.Rectangle(0, 0, poster_compe.width, poster_compe.height), Phaser.Geom.Rectangle.Contains);
         
        poster_compe.on('pointerdown', () => {
            if(poster_compe.scaleX === 0.25){
                poster_compe.setScale(.56)
                poster_compe.setPosition(this.sys.canvas.width / 2 , this.sys.canvas.height / 2);
            }else
            {
                poster_compe.setScale(.25)
                poster_compe.setPosition(this.sys.canvas.width / 2 -200, this.sys.canvas.height / 2+30);
            }

        });

    }
}