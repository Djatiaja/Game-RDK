import { Scene } from "phaser";
import { EventBus } from "../EventBus";




export class Masjid extends Scene
{
    constructor(){
        super('Masjid');
    }

    create(){


        EventBus.emit('current-scene-ready', this);
        
    }
}
