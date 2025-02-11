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
        const background = this.add.image(0, 0, 'background').setOrigin(0, 0);
        background.displayWidth = this.sys.canvas.width;
        background.displayHeight = this.sys.canvas.height;

        // UI Container
        const container = this.add.container(this.sys.canvas.width / 2, this.sys.canvas.height / 2);
        // Blue box with rounded corners
        const box = this.add.rectangle(0, 0, 1000, 680, 0x3acef0).setOrigin(0.5);
        const boxBorder = this.add.rectangle(0, 0, 1000, 680)
            .setStrokeStyle(4, 0xffffff)
            .setOrigin(0.5);
        container.add([box, boxBorder]);

        let selectedValue: 'Pria' | 'Wanita'  = 'Pria';

        let player = this.add.sprite(this.sys.canvas.width / 2, 200, "lkdepan1").setScale(15);

        const priaBox = this.add.rectangle(-150, 100, 200, 50, 0x999999).setOrigin(0.5);
        priaBox.setInteractive();
        const priaText = this.add.text(-150, 100, 'Laki - laki', {
            fontSize: '20px',
            color: '#000',
            fontFamily: 'Arial',
        }).setOrigin(0.5);


        priaBox.on('pointerover', () =>{
            if (selectedValue === 'Pria') { return};
            priaBox.setFillStyle(0xcccccc)});
        priaBox.on('pointerout', () =>{
            if (selectedValue === 'Pria') return;
            priaBox.setFillStyle(0xffffff)});
        priaBox.on('pointerdown', () => {
            if (selectedValue === 'Pria') return;
            selectedValue = 'Pria';
            priaBox.setFillStyle(0x999999);
            priaBox.setInteractive(false);
            wanitaBox.setInteractive(true);
            wanitaBox.setFillStyle(0xffffff);
            player.setTexture("lkdepan1");
        });
        container.add([priaBox, priaText]);

        const wanitaBox = this.add.rectangle(150, 100, 200, 50, 0xffffff).setOrigin(0.5);
        wanitaBox.setInteractive();
        const wanitaText = this.add.text(150, 100, 'Perempuan', {
            fontSize: '20px',
            color: '#000',
            fontFamily: 'Arial',
        }).setOrigin(0.5);

        wanitaBox.on('pointerover', () =>{
            if (selectedValue === 'Wanita') return;
            wanitaBox.setFillStyle(0xcccccc)});
        wanitaBox.on('pointerout', () => {
            if (selectedValue === 'Wanita') return;
            wanitaBox.setFillStyle(0xffffff)});
        wanitaBox.on('pointerdown', () => {
            if (selectedValue === 'Wanita') return;
            selectedValue = 'Wanita';
            wanitaBox.setFillStyle(0x999999);
            wanitaBox.setInteractive(false);
            priaBox.setInteractive(true);
            priaBox.setFillStyle(0xffffff);
            player.setTexture("prdepan1");

        });

        container.add([wanitaBox, wanitaText]);        

        // Play Button
        const playButton = this.add.image(0, 250, 'play-button').setOrigin(0.5);
        playButton.setScale(0.5);
        playButton.setInteractive();
        playButton.on('pointerdown', () => {
            // this.scene.start('Pause', { player: new Player(this, selectedValue), text: [] });
            // this.scene.start('Textbox', { player: new Player(this, selectedValue), text: [], order: [], callback: null, correctAnswer: [] });
            // this.scene.start('Ending');
        });

        playButton.on('pointerup',() => { 
            this.scene.start('testing', { gender: selectedValue });
          })
          
        playButton.on('pointerover', () => playButton.setScale(0.55));
        playButton.on('pointerout', () => playButton.setScale(0.5));
        container.add(playButton);


        
        EventBus.emit('current-scene-ready', this);
    }

    

}