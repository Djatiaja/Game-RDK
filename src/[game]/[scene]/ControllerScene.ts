import { Scene } from "phaser";
import { Player } from "./utils/Player";
import { Control } from "./utils/control";




export class ControllerScene extends Scene
{

    control!: Control;

    constructor()
    {
        super('ControllerScene');
    }

    init( data: {control: Control})
    {
        this.control = data.control;
    }
    preload()
    {
        const url = 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexvirtualjoystickplugin.min.js';
        this.load.plugin('rexvirtualjoystickplugin', url, true);   
    }

    create()
    {   


        const  joyStick = this.plugins.get('rexvirtualjoystickplugin')!.add(this, {
            x: 200,
            y: 550,
            radius: 50,
            base: this.add.circle(0, 0, 50, 0x888888),
            thumb: this.add.circle(0, 0, 25, 0xcccccc),
            // dir: '8dir',   // 'up&down'|0|'left&right'|1|'4dir'|2|'8dir'|3
            // forceMin: 16,
            // enable: true
        })



        const actionButton = this.add.circle(800, 550, 30, 0x888888).setInteractive();
        actionButton.setInteractive(new Phaser.Geom.Circle(0, 0, 30), Phaser.Geom.Circle.Contains);
        
        actionButton.on('pointerdown', () => {
            this.control.actionButtonPressed();
            actionButton.setFillStyle(0x555555); // Change color to a darker grey on click
        });

        actionButton.on('pointerup', () => {
            actionButton.setFillStyle(0x888888); // Change color back to grey when released
        });

        this.control.setJoystick(joyStick)

    }

    
}