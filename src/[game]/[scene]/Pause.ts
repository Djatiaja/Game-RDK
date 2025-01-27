import { EventBus } from "../EventBus";
import { Player } from "./utils/Player";



export class Pause extends Phaser.Scene {
    constructor() {
        super('Pause');
    }
    private pauseContainer!: Phaser.GameObjects.Container;
    player!: Player;

    init(data: { player: Player }) {
        this.player = data.player;
    }

    create() {
        this.hide();

        EventBus.emit('current-scene-ready', this);
    }

    clear() {
        this.pauseContainer.removeAll(true);
    }

    show() {
        const PauseBox = this.add.image(0, 0, 'Pause-box').setScale(0.582);
        const Resume = this.add.image(0, 0, 'Resume-Button').setScale(0.4);

        PauseBox.setPosition(this.sys.canvas.width / 2, this.sys.canvas.height / 2);
        Resume.setPosition(this.sys.canvas.width / 2 + 390, 50);

        Resume.setInteractive(new Phaser.Geom.Rectangle(0, 0, Resume.width, Resume.height), Phaser.Geom.Rectangle.Contains);
        Resume.on('pointerdown', () => {
            this.hide();
            Resume.destroy();
            EventBus.emit('game-resumed');
        });

        

        this.pauseContainer = this.add.container(0, 0, [PauseBox, Resume]);

        this.setUpAchivement();
        this.setUpItem();
    }

    hide() {

        const Pause = this.add.image(0, 0, 'Pause-Button').setScale(0.5);

        Pause.setPosition(this.sys.canvas.width / 2 + 450, 50);

        Pause.setInteractive(new Phaser.Geom.Rectangle(0, 0, Pause.width, Pause.height), Phaser.Geom.Rectangle.Contains);
        Pause.on('pointerdown', () => {
            this.show();
            Pause.destroy();
            EventBus.emit('game-paused');
        });


        if(this.pauseContainer !== undefined){
            this.clear()
        }

    }


    setUpAchivement() {

        for (let achivement of Object.values(this.player.data.Achievements)) {
            const achievementImage = this.add.image(0, 0, 'Achivement').setScale(0.582);
            achievementImage.setPosition(this.sys.canvas.width / 2 +  achivement.position.x, achivement.position.y);
            this.pauseContainer.add(achievementImage);

            let achievementText = this.add.text(0, 0, achivement.name, {
                fontSize: '20px',
                color: '#000',
                fontFamily: 'Arial',
            }).setOrigin(0.5);

            if (achivement.isAchieved) {
                achievementText = this.add.text(0, 0, achivement.name, {
                    fontSize: '20px',
                    color: '#fff',
                    fontFamily: 'Arial',
                }).setOrigin(0.5);
            }

            achievementText.setPosition(this.sys.canvas.width / 2 +  achivement.position.x, achivement.position.y);
            this.pauseContainer.add(achievementText);
        }       

        
    }


    setUpItem() {
        const itemsContainer = this.add.container(0, 0);
        const SPACE = 20;
        const ITEM_WIDTH = 70;
        const offset = this.sys.canvas.width / 2 - 390

        const positions = [
            { x: 0, y: 460 },
            { x:   90, y: 460 },
            { x:  180, y: 460 },
            { x:  270, y: 460 }
        ];

        for (const item of Object.values(this.player.data.Items)) {
            const itemHolder = this.add.image(0, 0, 'Item-Holder').setScale(0.5);
            itemHolder.setPosition(offset+item.position.x,item.position.y);
            itemsContainer.add(itemHolder);

            if(item.quantity > 0){
                const kupon = this.add.image(0, 0, item.image).setScale(1);
                kupon.setPosition(offset+item.position.x, item.position.y);
                itemsContainer.add(kupon);
    
                const kuponText = this.add.text(0, 0, item.quantity.toString(), {
                fontSize: '20px',
                color: '#fff',
                fontFamily: 'Arial',
                fontStyle: 'bold'
                }).setOrigin(0.5);
    
                kuponText.setPosition(offset+item.position.x + 20, item.position.y + 33);
                itemsContainer.add(kuponText);
            }
            

        }

        this.pauseContainer.add(itemsContainer);

    }
}