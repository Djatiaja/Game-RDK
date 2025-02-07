import { Scene } from "phaser";
import { Player } from "./utils/Player";
import { DIALOG } from "./utils/const";



export class Textbox extends Scene
{
    textBoxContainer!: Phaser.GameObjects.Container;
    player!: Player;
    text!: DIALOG[];
    isLoading: boolean = false;
    currentText: string = "";
    order: number[][][] = [];
    currentOrder: number[][] = [];
    onAsking: boolean = false;
    callback: Function | null = null;
    correctAnswer:number[]= [];
    isCorrect: boolean = true;

    constructor(){
        super('Textbox');
    }

    init(data:{player: Player, text: DIALOG[], order: number[][][], callback: Function|null, correctAnswer: number[]}){
        this.player = data.player;
        this.text = data.text;
        this.order = data.order;
        this.callback = data.callback;
        this.correctAnswer = data.correctAnswer;
    }

    create(){

        // this.player = new Player(this, "Pria");
        // this.text = [
        //     {
        //         name: "panitia",
        //         dialogs: "Halo, selamat datang di acara kami!"
        //     },
        //     {
        //         name: "Player",
        //         dialogs: "Terima kasih, senang berada di sini."
        //     },
        //     {
        //         name: "panitia",
        //         dialogs: "Apakah kamu sudah mendaftar?"
        //     },
        //     {
        //         name: "Player",
        //         dialogs: "Belum, saya akan mendaftar sekarang."
        //     },
        //     {
        //         name:"player",
        //         dialogs: "Saya sudah mendaftar, apa yang harus saya lakukan selanjutnya?"
        //     }
        // ]
        // this.order = [[[0,1], [4,0],[4,1]],[[0,1]]];

        // this.callback = () => {
        //     console.log("callback")
        // }

        // this.correctAnswer = [1, 1]
        const graphics = this.add.graphics();
        graphics.fillStyle(0x000000, 0.8); 
        const boxWidth = 600;
        const boxHeight = 100;
        graphics.fillRect(0, 0, boxWidth, boxHeight);

        this.currentOrder = this.order.shift()!;
        this.currentText = this.text[this.currentOrder[0].shift()!].dialogs;
        
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

            if(this.onAsking){
                return
            }

            if (this.currentOrder.length >= 2 && this.currentOrder[0].length === 0) {
                this.twoChoiceBox()
            }

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
        if(this.currentOrder.length <= 1 && this.currentOrder[0].length ===0 && this.order.length <= 0){
            this.scene.stop();

            if(this.callback !== null){
                if(this.isCorrect){
                    this.callback()
                }
            }
            this.isCorrect = true
            return;
        }

        if(this.currentOrder[0].length === 0){
            this.currentOrder.shift()!;
        }
        if(this.currentOrder.length === 0){
            this.currentOrder = this.order.shift()!
        }

        this.currentText = this.text[this.currentOrder[0].shift()!].dialogs;
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

    twoChoiceBox(){
        const choiceTextContent1 = this.text[this.currentOrder[1].shift()!].dialogs;
        const choiceTextContent2 = this.text[this.currentOrder[2].shift()!].dialogs;
        const choiceBoxWidth = 600; // Fixed width

        const choiceText1 = this.add.text(0, 0, choiceTextContent1, {
            fontSize: `${20}px`,
            color: "#ffffff",
            wordWrap: { width: choiceBoxWidth - 20 }, 
            padding: { x: 10, y: 10 },
        });

        const choiceText2 = this.add.text(0, 0, choiceTextContent2, {
            fontSize: `${20}px`,
            color: "#ffffff",
            wordWrap: { width: choiceBoxWidth - 20 }, 
            padding: { x: 10, y: 10 },
        });

        const choiceBoxHeight1 = choiceText1.height + 20; // Adjust height based on text content
        const choiceBoxHeight2 = choiceText2.height + 20; // Adjust height based on text content

        const choiceBox1 = this.add.graphics();
        choiceBox1.fillStyle(0x000000, 0.8);
        choiceBox1.fillRect(0, 0, choiceBoxWidth, choiceBoxHeight1);

        const choiceBox2 = this.add.graphics();
        choiceBox2.fillStyle(0x000000, 0.8);
        choiceBox2.fillRect(0, 0, choiceBoxWidth, choiceBoxHeight2);

        // Center the text within the choice box
        choiceText1.setPosition(
            choiceBoxWidth / 2 - choiceText1.width / 2,
            choiceBoxHeight1 / 2 - choiceText1.height / 2
        );

        choiceText2.setPosition(
            choiceBoxWidth / 2 - choiceText2.width / 2,
            choiceBoxHeight2 / 2 - choiceText2.height / 2
        );

        const choiceContainer1 = this.add.container(0, 0, [choiceBox1, choiceText1]);
        choiceContainer1.setPosition(
            this.cameras.main.width / 2 - choiceBoxWidth / 2,
            this.cameras.main.height / 2 - choiceBoxHeight1 / 2 - 50
        );

        const choiceContainer2 = this.add.container(0, 0, [choiceBox2, choiceText2]);
        choiceContainer2.setPosition(
            this.cameras.main.width / 2 - choiceBoxWidth / 2,
            this.cameras.main.height / 2 - choiceBoxHeight2 / 2 + 50
        );

        choiceBox1.setInteractive(new Phaser.Geom.Rectangle(0, 0, choiceBoxWidth, choiceBoxHeight1), Phaser.Geom.Rectangle.Contains);

        choiceBox1.on("pointerdown", () => {
            this.currentOrder.shift()!
            this.currentOrder.pop()
            this.onAsking = false
            choiceContainer1.destroy()
            choiceContainer2.destroy()

            if(this.correctAnswer.length >0 && this.correctAnswer.shift() !== 1){
                this.isCorrect = false
            }

        })

        choiceBox2.setInteractive(new Phaser.Geom.Rectangle(0, 0, choiceBoxWidth, choiceBoxHeight2), Phaser.Geom.Rectangle.Contains);

        choiceBox2.on("pointerdown", () => {
            this.currentOrder.shift()!
            this.currentOrder.shift()!
            this.onAsking = false
            choiceContainer1.destroy()
            choiceContainer2.destroy()

            if( this.correctAnswer.length >0 && this.correctAnswer.shift() !== 2){
                this.isCorrect = false
            }
        })

        this.onAsking = true
    }
}

