import { Scene } from "phaser";
import { npcs } from "./utils/const";
import { npcsAnims } from "./utils/anims";




export class Preloader extends Scene
{
    preload()
    {
        this.load.image('tiles', "src/assets/game/spritesheet.png");
        this.load.image('play-button',"src/assets/game/Play Button.png");
        this.load.image("exit-button", "src/assets/game/Quit Button.png");
        this.load.image('background', "src/assets/game/VILLAGE.png");
        this.load.spritesheet('player', "src/assets/game/spritesheet.png", {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.image('spritesheet', "src/assets/game/spritesheet.png");

        this.load.tilemapTiledJSON("GameRDK","src/assets/game/Game-RDK2.json");
        this.load.spritesheet("Maskam","src/assets/game/Maskam Fixed-07-07.png", {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("Tangga","src/assets/game/Tangga Fixed-09.png", {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("Papan","src/assets/game/Papan Fixed-11.png", {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("brikbaibrik","src/assets/game/brikbaibrik-12.png", {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("Grass","src/assets/game/Rumput aw aw-13.png", {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("Rumput","src/assets/game/Rumput aw aw-13.png", {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("ALA-14","src/assets/game/ALA-14.png", {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("ALA-14-14","src/assets/game/ALA-14-14.png", {
            frameWidth: 16,
            frameHeight: 16
        });

        npcs.forEach(npc => {
            npc.src.forEach((src, index) => {
                this.load.image(npc.frames[index], src);
            });
        });

        this.load.image("papan", "src/assets/game/Pengumuman/Pengumuman Board.png");
        this.load.image("close-button", "src/assets/game/Pengumuman/Exit icon.png");
        this.load.image("poster-competition", "src/assets/game/Pengumuman/RDk-Competition.png");

    }

    create()
    {
        this.scene.start("Menu")
    }



}