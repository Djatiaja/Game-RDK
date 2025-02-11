import { Scene } from "phaser";




export class Ending extends Scene
{
    constructor()
    {
        super('Ending');
    }


    create()
    {
        const ending = this.add.image(0, 0, 'Ending').setOrigin(0.5, 0.5).setScale(0.6);   
        ending.setPosition(this.sys.canvas.width / 2, this.sys.canvas.height / 2);
    }
}