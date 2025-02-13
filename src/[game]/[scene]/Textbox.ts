import { Scene } from "phaser";
import { Player } from "./utils/Player";
import { DIALOG } from "./utils/const";
import { images } from "./utils/PlayerData";



export class Textbox extends Scene
{
    textBoxContainer!: Phaser.GameObjects.Container;
    player!: Player;
    text!: DIALOG[];
    isLoading: boolean = false;
    currentDialog:DIALOG = {name: "", dialogs: ""};
    currentText: string = "";
    order: number[][][] = [];
    currentOrder: number[][] = [];
    onAsking: boolean = false;
    callback: Function | null = null;
    correctAnswer:number[]= [];
    isCorrect: boolean = true;
    npcProfile: string = "";

    constructor(){
        super('Textbox');
    }

init(data:{player: Player, text: DIALOG[], order: number[][][], callback: Function|null, correctAnswer: number[], npcProfile: string}){
        this.player = data.player;
        this.text = data.text;
        this.order = data.order;
        this.callback = data.callback;
        this.correctAnswer = data.correctAnswer;
        this.npcProfile = data.npcProfile;
    }

    create(){

        // this.player = new Player(this, "Pria");
        // this.text = [
        //     {
        //         name: "panitia",
        //         dialogs: "Halo, selamat datang di acara kamisa asdasd asdasdas adas dasd asdasd asdasd asdas dasd adas dasd asdas !"
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
        // this.order = [[[0,1], [4,0],[3,1]],[[0,1], [0,1]]];

        // this.callback = () => {
        //     console.log("callback")
        // }

        // this.npcProfile = "PengunjungIjoPr1"
        // this.correctAnswer = [1, 1]

        const boxWidth = 800;
        const boxHeight = 200;
        const graphics = this.add.image(0, 0, 'Textbox').setDisplaySize(boxWidth, boxHeight);
        graphics.setPosition(0 + boxWidth/2, 0 );
        this.currentOrder = this.order.shift()!;
        this.currentDialog =this.text[this.currentOrder[0].shift()!] 
        this.currentText = this.currentDialog.dialogs;
        
const profile = this.add.image(685, 20, (this.currentDialog.name==="Player")? this.player.data.profile : this.npcProfile ).setScale(5);

        const text = this.add.text(20 , -80, this.currentText , {
            fontSize: `${20}px`,
            color: "#000000",
            wordWrap: { width: boxWidth - 275 }, 
            padding: { x: 10, y: 10 },
            fixedWidth: boxWidth - 40
        });

        const name = this.add.text(0, 0, this.currentDialog.name, {
            fontSize: `${20}px`,
            color: "#000000",
            padding: { x: 10, y: 10 },
            fontStyle: "bold"
        });

        name.setPosition(180/2 - name.width/4, 0);
        console.log(name.width/2)
        const nameContainer = this.add.container(660 - 100, -80, [name]);
        nameContainer.setSize(260, 200);
        name.setPosition(nameContainer.width/2 - name.width/2, 0);

        this.isLoading = true;
        this.animateText(text, 50).then(() => {
            this.isLoading = false;
        });

        this.textBoxContainer = this.add.container(0, 0, [graphics, text, profile, nameContainer]);
        this.textBoxContainer.setPosition(this.cameras.main.width / 2 - boxWidth / 2, this.cameras.main.height / 2 + 200);
        let isTextUpdated = false;

        this.input.on('pointerdown', () => {

            if(this.onAsking){
                return
            }

            if (this.currentOrder.length > 2 && this.currentOrder[0].length === 0) {
                this.twoChoiceBox()
            }

            if(this.currentOrder.length === 2 && this.currentOrder[0].length === 0){
                this.oneChoiceBox()
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

        this.currentDialog = this.text[this.currentOrder[0].shift()!];
        this.currentText = this.currentDialog.dialogs;
        (this.textBoxContainer.list[1] as Phaser.GameObjects.Text).setText(this.currentText);
        (this.textBoxContainer.list[2] as Phaser.GameObjects.Image).setTexture((this.currentDialog.name==="Player")? this.player.data.profile : this.npcProfile);
        ((this.textBoxContainer.list[3] as Phaser.GameObjects.Container).list[0] as Phaser.GameObjects.Text).setText(this.currentDialog.name);
        ((this.textBoxContainer.list[3] as Phaser.GameObjects.Container).list[0] as Phaser.GameObjects.Text).setPosition((this.textBoxContainer.list[3] as Phaser.GameObjects.Container).width/2 - ((this.textBoxContainer.list[3] as Phaser.GameObjects.Container).list[0] as Phaser.GameObjects.Text).width/2, 0);


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
        const choiceBoxWidth = 500; // Fixed width

        const choiceText1 = this.add.text(0, 0, choiceTextContent1, {
            fontSize: `${20}px`,
            color: "#000000",
            wordWrap: { width: choiceBoxWidth - 20 }, 
            padding: { x: 10, y: 10 },
        });

        const choiceText2 = this.add.text(0, 0, choiceTextContent2, {
            fontSize: `${20}px`,
            color: "#000000",
            wordWrap: { width: choiceBoxWidth - 20 }, 
            padding: { x: 10, y: 10 },
        });

        const choiceBoxHeight1 = choiceText1.height + 20; // Adjust height based on text content
        const choiceBoxHeight2 = choiceText2.height + 20; // Adjust height based on text content

        const choiceBox1 = this.add.image(choiceBoxWidth/2, 0, 'Choice').setDisplaySize(choiceBoxWidth, choiceBoxHeight1);

        const choiceBox2 = this.add.image(choiceBoxWidth/2, 0, 'Choice').setDisplaySize(choiceBoxWidth, choiceBoxHeight2);

        // Center the text within the choice box
        choiceText1.setPosition(
            choiceBoxWidth / 2 - choiceText1.width / 2,
            choiceBoxHeight1 / 2 - choiceText1.height- 20
        );

        choiceText2.setPosition(
            choiceBoxWidth / 2 - choiceText2.width / 2,
            choiceBoxHeight2 / 2 - choiceText2.height - 20
        );

        const choiceContainer1 = this.add.container(0, 0, [choiceBox1, choiceText1]);
        choiceContainer1.setPosition(
            this.cameras.main.width / 2 - choiceBoxWidth / 2,
            this.cameras.main.height / 2 - choiceBoxHeight1 / 2 - 100
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


    oneChoiceBox(){
        const choiceTextContent = this.text[this.currentOrder[1].shift()!].dialogs;
        const choiceBoxWidth = 500; // Fixed width

        const choiceText = this.add.text(0, 0, choiceTextContent, {
            fontSize: `${20}px`,
            color: "#000000",
            wordWrap: { width: choiceBoxWidth - 20 }, 
            padding: { x: 10, y: 10 },
        });

        const choiceBoxHeight = choiceText.height + 20; // Adjust height based on text content

        const choiceBox = this.add.image(choiceBoxWidth/2, 0, 'Choice').setDisplaySize(choiceBoxWidth, choiceBoxHeight);

        // Center the text within the choice box
        choiceText.setPosition(
            choiceBoxWidth / 2 - choiceText.width / 2,
            choiceBoxHeight / 2 - choiceText.height -20
        );  

        const choiceContainer = this.add.container(0, 0, [choiceBox, choiceText]);
        choiceContainer.setPosition(
            this.cameras.main.width / 2 - choiceBoxWidth / 2,
            this.cameras.main.height / 2 - choiceBoxHeight / 2
        );

        choiceBox.setInteractive(new Phaser.Geom.Rectangle(0, 0, choiceBoxWidth, choiceBoxHeight), Phaser.Geom.Rectangle.Contains);

        choiceBox.on("pointerdown", () => {
            this.currentOrder.shift()!
            this.onAsking = false
            choiceContainer.destroy()
        })

        this.onAsking = true
    }
}

