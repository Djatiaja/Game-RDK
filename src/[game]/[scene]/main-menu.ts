import { Scene, Tilemaps } from "phaser";
import { EventBus } from "../EventBus";
import { Player } from "./utils/Player";



export class Menu extends Scene
{
    constructor ()
    {
        super('Menu');
    }

    preload()
    {
        
    }   

    create()
    {
        const background = this.add.image(0, 0, 'MenuBackground').setOrigin(0, 0);
        background.displayWidth = this.sys.canvas.width;
        background.displayHeight = this.sys.canvas.height;

        // UI Container
        const container = this.add.container(this.sys.canvas.width / 2, this.sys.canvas.height / 2);
``

        let selectedValue: 'Pria' | 'Wanita'  = 'Pria';

        let player = this.add.sprite(this.sys.canvas.width / 2, 250, "lkdepan1").setScale(10);

        const priaBox = this.add.image(-150, 100, "Btn-laki-On").setOrigin(0.5);
        priaBox.setDisplaySize(100, 150)
        priaBox.setInteractive();

        priaBox.on('pointerdown', () => {
            if (selectedValue === 'Pria') return;
            selectedValue = 'Pria';
            priaBox.setTexture("Btn-laki-On");
            priaBox.setInteractive(false);
            wanitaBox.setInteractive(true);
            wanitaBox.setTexture("Btn-perempuan-Off");
            player.setTexture("lkdepan1");
        });
        container.add([priaBox]);

        const wanitaBox = this.add.image(150, 100,"Btn-perempuan-Off").setOrigin(0.5);
        wanitaBox.setDisplaySize(100, 150)
        wanitaBox.setInteractive();

        wanitaBox.on('pointerdown', () => {
            if (selectedValue === 'Wanita') return;
            selectedValue = 'Wanita';
            wanitaBox.setTexture("Btn-perempuan-On");
            wanitaBox.setInteractive(false);
            priaBox.setInteractive(true);
            priaBox.setTexture("Btn-laki-Off");
            player.setTexture("prdepan1");

        });

        container.add([wanitaBox]);        

        // Play Button
        const playButton = this.add.image(0, 190, 'PlayButton').setOrigin(0.5);
        playButton.setScale(3);
        playButton.setInteractive();
        playButton.on('pointerdown', () => {
            // this.scene.start('Pause', { player: new Player(this, selectedValue), text: [] });
            // this.scene.start('Textbox', { player: new Player(this, selectedValue), text: [], order: [], callback: null, correctAnswer: [] });
            // this.scene.start('Ending');
        });

        playButton.on('pointerup',() => { 
            this.lockOrientation()
            // this.scene.start('Textbox', { player: new Player(this, selectedValue), text: [], order: [], callback: null, correctAnswer: [], npcProfile: 'npcProfile' });
            // this.scene.start( 'Ending', { player: new Player(this, selectedValue) });
            this.scene.start('GameScene', { gender: selectedValue });
          })
          
        playButton.on('pointerover', () => playButton.setScale(3.15));
        playButton.on('pointerout', () => playButton.setScale(3));
        container.add(playButton);


        
        EventBus.emit('current-scene-ready', this);
    }

    async lockOrientation() {
        try {
            if (!("orientation" in screen && "lock" in screen.orientation)) {
                console.error("Screen orientation API is not supported.");
                return;
            }

            // Request fullscreen first (required by most browsers)
            if (!document.fullscreenElement) {
                await this.scale.startFullscreen();
            }

            // Lock the orientation to landscape
            await screen.orientation.lock("landscape");
            console.log("Orientation locked to landscape.");
        } catch (error) {
            console.error("Failed to lock orientation:", error);
        }
    }

    

}