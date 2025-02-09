import { Scene } from "phaser";




export class Ending extends Scene
{
    constructor()
    {
        super('Ending');
    }


    create()
    {
        this.add.image(0, 0, 'Ending').setOrigin(0, 0).setDisplaySize(this.scale.width, this.scale.height);   
    }
}