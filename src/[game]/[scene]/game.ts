import { Scene } from "phaser";
import { EventBus } from "../EventBus";
import { Player } from "./utils/Player";
import { Control } from "./utils/control";
import { npcsAnims } from "./utils/anims";
import direction, { npcs, tilesize } from "./utils/const";
import { Npc } from "./utils/Npc";
import { Panitia } from "./utils/Spesial NPC/Panitia";


interface Dictinary<T> {
    [key: string]: T;
}

export class GameScene extends Scene
{
    player!: Player;
    control!: Control;
    gender: string="Pria";
    textBoxContainer!: Phaser.GameObjects.Container;
    zoom!: number;
    objects:Dictinary<Phaser.Geom.Rectangle> = {};
    isInInteraction: boolean = false;
    npcs: Npc[]= [];


    constructor ()
    {
        super('GameScene');
        
    }

    init(data:{gender: string}){
        this.gender = data.gender
        this.zoom = 4;
    }

    preload()
    { 


    }

    create()
    {

        
        this.loadAnimations();
        this.loadMap();

        this.scene.launch('Pause', { player: this.player });

        EventBus.on('game-paused', () => {
            this.scene.pause();
            this.scene.stop('ControllerScene');

        });

        EventBus.on('game-resumed', () => {
            this.scene.resume();
            this.scene.launch('ControllerScene', {control: this.control});
        });

        this.scene.launch("ControllerScene", {control: this.control});

        // this.scale.startFullscreen();
        if (screen.orientation) {
            screen.orientation.lock('landscape').catch(function(error) {
                console.error('Orientation lock failed: ', error);
            });
        }

          EventBus.emit('current-scene-ready', this);

    }

    loadMap(){
       
        console.log(this.make.tilemap({ key: 'GameRDKVTWO' }));
        let map = this.make.tilemap({ key: 'GameRDKVTWO' });
        const tilesetNames = ['Maskam', 'Tangga', 'Papan', 'brikbaibrik', 'Grass', 'Rumput', 'ALA-14', 'ALA-14-14'];
        const tilesetNames2 = ["Basic_Grass_Biom_things", "Basic_Plants", "Wood_Bridge", "TEMPAT KUPON pria", "arumput", "brikbaibrik-08", "bunga love ", "Hills", "Kocheng-28", "kursi (3)", "Maskam Fixed-07-07", "Papan Fixed-11", "pohon", "rumput", "rumput (1)", "rumput (2)", "rumput (3)", "rumput (4)", "rumput (5)", "rumput (6)", "Rumput aw aw-13", "Tangga Fixed-09", "TEMPAT KUPON cewe"];
        const tilesetNames3 =["Maskam Fixed-07-07", "Tangga Fixed-09", "Papan Fixed-11", "brikbaibrik-08", "Basic_Grass_Biom_things", "Rumput aw aw-13", "Basic_Plants", "Kocheng-28", "kursi (3)", "TEMPAT KUPON cewe", "TEMPAT KUPON pria", "pohon", "bunga love ", "rumput (2)", "rumput (1)", "rumput (3)", "rumput (4)", "rumput (6)", "rumput (5)", "arumput", "Tilled_Dirt_v2", "Grass", "Hills", "Water", "rumput", "Wood_Bridge"];
        tilesetNames3.forEach(name => {
            map.addTilesetImage(name, name);
        });
        map.createLayer("Tile Layer 12", tilesetNames3)
        map.createLayer("Tile Layer 1", tilesetNames3)
        map.createLayer("Tile Layer 2", tilesetNames3)
        map.createLayer("Tile Layer 3", tilesetNames3)
        map.createLayer("pohon belakang", tilesetNames3)
        map.createLayer("pohon", tilesetNames3)
        map.createLayer("coba", tilesetNames3)
        map.createLayer("rumput", tilesetNames3)
        map.createLayer("Tile Layer 8", tilesetNames3)
        map.createLayer("Tile Layer 9", tilesetNames3)
        map.createLayer("Tile Layer 13", tilesetNames3)
        map.createLayer("jembatan", tilesetNames3)
        map.createLayer("kolam", tilesetNames3)




        this.player = new Player(this, this.gender);



        this.cameras.main.startFollow(this.player.object).setScroll(0, 0);
        this.cameras.main.setZoom(this.zoom)

        this.setupCameras()

        this.addNpcs();

        this.player.object.setCollideWorldBounds(true);

        this.addCollision(map)

        this.control = new Control( this);

    }

    update()
    {
        let directionPlayer:number[] = this.control.getDirectionKeysPressDown()!;
        this.player.move(directionPlayer);
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
            if(npc.class === "NPC"){
                this.npcs.push(new Npc(this, this.player, npc));
            }

            if(npc.class === "Panitia"){
                this.npcs.push(new Panitia(this, this.player, npc));
            }
            
        });

    }

    loadAnimations(){
        
        for(let key in npcsAnims){
            for(let anim in npcsAnims[key]){
                const animConfig: any = npcsAnims[key][anim];
                animConfig.frames = animConfig.frames.map((frame: string) => ({ key: frame }));
                animConfig.duration = animConfig.duration || 1000;
                animConfig.duration += Math.random() * 200 - 100;
                this.anims.create(animConfig);
            }
        }

    }
    
    setupCameras(){
        this.cameras.main.setBounds(0, 0,32*16, 28*16);
        this.cameras.main.setRoundPixels(true);
    }

    GameEvent(keys:string){
        if(this.isInInteraction){
            return
        }


        if (keys === "space") {
            const playerRect = this.player.rectangle.getBounds();
            Object.keys(this.objects).forEach(key => {
                const object: Phaser.Geom.Rectangle = this.objects[key];
                const objectRect = new Phaser.Geom.Rectangle(object.x, object.y, object.width, object.height);
                if (Phaser.Geom.Intersects.RectangleToRectangle(playerRect, objectRect)){

                    if (key === "Papan pengumuman"){
                        this.setInInteraction(true)
                        this.control.setInInteraction(true);
    
                        this.scene.launch('papan');
                        this.scene.get('papan').events.once('shutdown', () => {
                            this.setInInteraction(false);
                            this.control.setInInteraction(false);
                        });
                    }else if (key === "PM-Masjid"){
                        this.setInInteraction(true)
                        this.control.setInInteraction(true);
    
                        this.scene.launch('Masjid', {player: this.player});
                        this.scene.get('Masjid').events.once('shutdown', () => {
                            this.setInInteraction(false);
                            this.control.setInInteraction(false);
                            this.player.data.Items.Kupon.quantity =1;   
                        });
                    }
                }
            });

            this.npcs.forEach(npc => {
                const npcRect = npc.sprite.getBounds();
                if (Phaser.Geom.Intersects.RectangleToRectangle(playerRect, npcRect)){
                    this.setInInteraction(true)
                    this.control.setInInteraction(true);
                    npc.interact()
                    this.scene.get("Textbox").events.once('shutdown', () => {
                        this.setInInteraction(false);
                        this.control.setInInteraction(false);
                    });
                }
            })
        }
    }

    public setInInteraction(value: boolean){
        this.isInInteraction = value;

        if (value){
            this.scene.stop('Pause');
            this.scene.stop('ControllerScene');
        }else{
            this.scene.launch('Pause');
            this.scene.launch('ControllerScene', {control: this.control});
        }
    }
}