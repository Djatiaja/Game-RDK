import { Scene } from "phaser";
import { Control } from "./utils/control";
import { Player } from "./utils/Player";
import { DIALOG } from "./utils/const";



export class Textbox extends Scene
{
    textBoxContainer!: Phaser.GameObjects.Container;
    player!: Player;
    text!: DIALOG[];
    isLoading: boolean = false;
    currentText: string = "";
    


    constructor(){
        super('Textbox');
    }

    init(data:{player: Player, text: DIALOG[]}){
        this.player = data.player;
        this.text = data.text;
    }

    create(){

        const graphics = this.add.graphics();
        graphics.fillStyle(0x000000, 0.8); 
        const boxWidth = 600;
        const boxHeight = 100;
        graphics.fillRect(0, 0, boxWidth, boxHeight);


        this.currentText = this.text.shift()?.dialogs!;
        
        const text = this.add.text(0, 0, this.currentText , {
            fontSize: `${20}px`,
            color: "#ffffff",
            wordWrap: { width: boxWidth - 20 }, 
            padding: { x: 10, y: 10 },
        });

        this.isLoading = true;
        this.animateText(text, 50).then(() => {
            this.isLoading = false;
        });

        this.textBoxContainer = this.add.container(0, 0, [graphics, text]);
        this.textBoxContainer.setPosition(this.cameras.main.width / 2 - boxWidth / 2, this.cameras.main.height / 2 + 200);
        let isTextUpdated = false;

        this.input.on('pointerdown', () => {

            if (this.isLoading) {
                this.isLoading = false;
                (this.textBoxContainer.list[1] as Phaser.GameObjects.Text).setText(this.currentText);
                return;
            }

            if (!isTextUpdated) {
                this.updateText();
                isTextUpdated = true;
            }
        });

        this.input.on('pointerup', () => {
            isTextUpdated = false;
        });
        
    }

    updateText(){
        if(this.text.length === 0){
            this.scene.stop();
            return;
        }
        this.currentText = this.text.shift()!.dialogs;
        (this.textBoxContainer.list[1] as Phaser.GameObjects.Text).setText(this.currentText);

        this.animateText(this.textBoxContainer.list[1] as Phaser.GameObjects.Text, 50).then(() => {
            this.isLoading = false;
        });
    }

    animateText(target: Phaser.GameObjects.Text, speedInMs: number = 25): Promise<void> {
        this.isLoading = true;
        const message = target.text;
        const invisibleMessage = message.replace(/[^ ]/g, " ");
      
        target.text = "";
      
        let visibleText = "";
      
        return new Promise((resolve) => {
          const timer = target.scene.time.addEvent({
            delay: speedInMs,
            loop: true,
            callback: () => {
              if (target.text === message) {
                timer.destroy();
                return resolve();
              }
      
              visibleText += message[visibleText.length];
      
              const invisibleText = invisibleMessage.substring(visibleText.length);
      
              target.text = visibleText + invisibleText;
            },
          });
        });
    }
}

