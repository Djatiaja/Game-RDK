import { Scene } from "phaser";
import { EventBus } from "../EventBus";
import { Player } from "./utils/Player";
import { Control } from "./utils/control";
import { npcsAnims } from "./utils/anims";
import direction, { npcs } from "./utils/const";


interface Dictinary<T> {
    [key: string]: T;
}

export class GameScene extends Scene
{
    player!: Player;
    control!: Control;
    gender: string;
    textBoxContainer!: Phaser.GameObjects.Container;
    zoom!: number;
    objects:Dictinary<Phaser.Geom.Rectangle> = {};
    isInInteraction: boolean = false;

    constructor ()
    {
        super('GameScene');
        this.gender= "Pria";
    }

    init(data:{gender: string}){
        this.gender = data.gender
        this.zoom = 4;
    }

    preload()
    {
        this.loadAnimations();

    }

    create()
    {
        let map = this.make.tilemap({ key: 'GameRDK' });

        const tilesetNames = ['Maskam', 'Tangga', 'Papan', 'brikbaibrik', 'Grass', 'Rumput', 'ALA-14', 'ALA-14-14'];
        tilesetNames.forEach(name => {
            map.addTilesetImage(name, name);
        });
        
        map.createLayer("Tile Layer 1", tilesetNames)
        map.createLayer("Tile Layer 2", tilesetNames)
        map.createLayer("Tile Layer 3", tilesetNames)
        map.createFromObjects("Bounderies", {}, false);

        this.player = new Player(this, this.gender);
        this.control = new Control( this);

        this.cameras.main.startFollow(this.player.object).setScroll(0, 0);
        this.cameras.main.setZoom(4)



        

        this.addNpcs();

        this.player.object.setCollideWorldBounds(true);

        this.addCollision(map)

        EventBus.emit('current-scene-ready', this);
    }

    update()
    {
        let directionPlayer:number[] = this.control.getDirectionKeysPressDown()!;
        this.player.move(directionPlayer);
        this.setupCameras()
        this.player.animate()

        let keys:string = this.control.getKeysPressDown();

        this.GameEvent(keys)
        this.player.PlayerInteraction();
    }

    addCollision(map: Phaser.Tilemaps.Tilemap){
        map.objects.forEach(layer => {
            if (layer.name === "Bounderies"){
                layer.objects.forEach(object => {
                    if (object){
                        const bound = this.add.rectangle(object.x! + object.width! / 2, object.y! + object.height! / 2, object.width!, object.height!, 0x000000, 0);
                        this.physics.add.existing(bound, true);
                        this.physics.add.collider(this.player.object, bound);
                    }
                });
            }
            if (layer.name == "Object Layer 1")
            {
                layer.objects.forEach(object => {
                    if (object.name){
                        const bound = this.add.rectangle(object.x! + object.width! / 2, object.y! + object.height! / 2, object.width!, object.height!, 0x000000, 0);
                        this.physics.add.existing(bound, true);
                        this.physics.add.collider(this.player.object, bound);
                        this.objects[object.name!] = new Phaser.Geom.Rectangle(object.x!, object.y!, object.width!, object.height!);
                    
                    }
                });
            }

        })
    }


    addNpcs(){

        npcs.forEach(npc => {

            const sprite = this.physics.add.sprite(npc.position.x, npc.position.y, npc.frames[0]).play(`${npc.name}_idle`);
            sprite.setImmovable(true);
            this.physics.add.collider(this.player.object, sprite);
            sprite.setBodySize(sprite.width, sprite.height - 10, false);
            sprite.setOffset(0, 10);
        });

    }

    loadAnimations(){
        
        for(let key in npcsAnims){
            for(let anim in npcsAnims[key]){
                const animConfig:any = npcsAnims[key][anim];
                animConfig.frames = animConfig.frames.map((frame: string) => ({ key: frame }));
                this.anims.create(animConfig);
            }
        }

    }
    
    setupCameras(){
        this.cameras.main.setBounds(0, 0,32*16, 28*16);
    }

    setupTextBox(){
        const graphics = this.add.graphics();
        graphics.fillStyle(0x000000, 0.8); 
        const boxWidth = 600;
        const boxHeight = 100;
        graphics.fillRect(this.cameras.main.x, this.cameras.main.y, boxWidth, boxHeight);

        const text = this.add.text(0, 0, "Hello, this is a text box!", {
            fontSize: `${20 }px`,
            color: "#ffffff",
            wordWrap: { width: boxWidth - 20 },
        });

        this.textBoxContainer = this.add.container(0, this.cameras.main.height - boxHeight, [graphics, text]);
        this.textBoxContainer.setScale(1/this.zoom); 
        this.textBoxContainer.setScrollFactor(0); 
        this.textBoxContainer.setPosition((this.cameras.main.centerX -( 600 / this.zoom/2)), (this.cameras.main.centerY +(200/ this.zoom)));

    }

    GameEvent(keys:string){
        if(this.isInInteraction){
            return
        }
        if (keys === "space") {
            const playerRect = this.player.rectangle.getBounds();
            console.log(this.objects);
            Object.keys(this.objects).forEach(key => {
                const object: Phaser.Geom.Rectangle = this.objects[key];
                const objectRect = new Phaser.Geom.Rectangle(object.x, object.y, object.width, object.height);
                if (Phaser.Geom.Intersects.RectangleToRectangle(playerRect, objectRect)){
                    console.log("Intersect");
                    this.isInInteraction = true;

                    if (key === "Papan pengumuman"){
                        this.scene.launch('papan');
                        this.scene.get('papan').events.once('shutdown', () => {
                            this.isInInteraction = false;
                        });
                    }
                }
            });
        }
    }

    showPapan(){

    }
}