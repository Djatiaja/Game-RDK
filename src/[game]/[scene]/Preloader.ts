import { Scene } from "phaser";
import { npcs } from "./utils/const";
import { npcsAnims } from "./utils/anims";

export class Preloader extends Scene {
    preload() {
        const baseUrl = "/assets/game/";

        this.load.image('tiles', `${baseUrl}spritesheet.png`);
        this.load.image('play-button', `${baseUrl}Play Button.png`);
        this.load.image("exit-button", `${baseUrl}Quit Button.png`);
        this.load.image('background', `${baseUrl}VILLAGE.png`);
        this.load.spritesheet('player', `${baseUrl}spritesheet.png`, {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.image('spritesheet', `${baseUrl}spritesheet.png`);

        this.load.tilemapTiledJSON("GameRDK", `${baseUrl}Game-RDK2.json`);
        this.load.spritesheet("Maskam", `${baseUrl}Maskam Fixed-07-07.png`, {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("Tangga", `${baseUrl}Tangga Fixed-09.png`, {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("Papan", `${baseUrl}Papan Fixed-11.png`, {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("brikbaibrik", `${baseUrl}brikbaibrik-12.png`, {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("Grass", `${baseUrl}Rumput aw aw-13.png`, {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("Rumput", `${baseUrl}Rumput aw aw-13.png`, {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("ALA-14", `${baseUrl}ALA-14.png`, {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("ALA-14-14", `${baseUrl}ALA-14-14.png`, {
            frameWidth: 16,
            frameHeight: 16
        });

        npcs.forEach(npc => {
            npc.src.forEach((src, index) => {
                this.load.image(npc.frames[index], src);
            });
        });

        // Papan Pengumuman
        this.load.image("papan", `${baseUrl}Pengumuman/Pengumuman Board.png`);
        this.load.image("close-button", `${baseUrl}Pengumuman/Exit icon.png`);
        this.load.image("poster-competition", `${baseUrl}Pengumuman/RDk-Competition.png`);

        // Pause Menu
        this.load.image("Pause-box", `${baseUrl}Pause/Pause Board.png`);
        this.load.image("Achivement", `${baseUrl}Pause/Achievement PB.png`);
        this.load.image("Pause-Button", `${baseUrl}Pause/Pause Icon.png`);
        this.load.image("Resume-Button", `${baseUrl}Pause/Resume Button.png`);
        this.load.image("Item-Holder", `${baseUrl}Pause/Item PB.png`);
        
        // Pause item
        this.load.image("Kupon", `${baseUrl}Item/Kupon RDK.png`);
        this.load.image("Makanan-Kucing", `${baseUrl}Item/Makanan Kucing.png`);
        this.load.image("Makanan-RDK", `${baseUrl}Item/Makanan RDK.png`);
        this.load.image("Uang", `${baseUrl}Item/Uang.png`);

        // Masjid
        this.load.image("Masjid", `${baseUrl}ganjar-isi-ceramah-di-maskam-UGM.jpg`);

        // Player 
        this.load.image("lkbelakang1", `${baseUrl}Karakter Cowo Cewe/idle lk/belakang/MC-43.png`);
        this.load.image("lkbelakang2", `${baseUrl}Karakter Cowo Cewe/idle lk/belakang/MC-44.png`);

        this.load.image("lkdepan1", `${baseUrl}Karakter Cowo Cewe/idle lk/Depan/MC-31.png`);
        this.load.image("lkdepan2", `${baseUrl}Karakter Cowo Cewe/idle lk/Depan/MC-32.png`);

        this.load.image("lkkanan1", `${baseUrl}Karakter Cowo Cewe/idle lk/Kanan/MC-35.png`);
        this.load.image("lkkanan2", `${baseUrl}Karakter Cowo Cewe/idle lk/Kanan/MC-36.png`);

        this.load.image("lkkiri1", `${baseUrl}Karakter Cowo Cewe/idle lk/Kiri/MC-39.png`);
        this.load.image("lkkiri2", `${baseUrl}Karakter Cowo Cewe/idle lk/Kiri/MC-40.png`);

        this.load.image("lkbelakang1-walk", `${baseUrl}Karakter Cowo Cewe/LK Jalan/Belakang/MC-45.png`);
        this.load.image("lkbelakang2-walk", `${baseUrl}Karakter Cowo Cewe/LK Jalan/Belakang/MC-46.png`);

        this.load.image("lkdepan1-walk", `${baseUrl}Karakter Cowo Cewe/LK Jalan/Depan/MC-33.png`);
        this.load.image("lkdepan2-walk", `${baseUrl}Karakter Cowo Cewe/LK Jalan/Depan/MC-34.png`);

        this.load.image("lkkanan1-walk", `${baseUrl}Karakter Cowo Cewe/LK Jalan/Kanan/MC-37.png`);
        this.load.image("lkkanan2-walk", `${baseUrl}Karakter Cowo Cewe/LK Jalan/Kanan/MC-38.png`);

        this.load.image("lkkiri1-walk", `${baseUrl}Karakter Cowo Cewe/LK Jalan/Kiri/MC-41.png`);
        this.load.image("lkkiri2-walk", `${baseUrl}Karakter Cowo Cewe/LK Jalan/Kiri/MC-42.png`);

        // Player Perempuang
        this.load.image("prbelakang1", `${baseUrl}Karakter Cowo Cewe/PR Idle/Belakang/MC-59.png`);
        this.load.image("prbelakang2", `${baseUrl}Karakter Cowo Cewe/PR Idle/Belakang/MC-60.png`);

        this.load.image("prdepan1", `${baseUrl}Karakter Cowo Cewe/PR Idle/Depan/MC-47.png`);
        this.load.image("prdepan2", `${baseUrl}Karakter Cowo Cewe/PR Idle/Depan/MC-48.png`);

        this.load.image("prkanan1", `${baseUrl}Karakter Cowo Cewe/PR Idle/Kanan/MC-51.png`);
        this.load.image("prkanan2", `${baseUrl}Karakter Cowo Cewe/PR Idle/Kanan/MC-52.png`);

        this.load.image("prkiri1", `${baseUrl}Karakter Cowo Cewe/PR Idle/Kiri/MC-55.png`);
        this.load.image("prkiri2", `${baseUrl}Karakter Cowo Cewe/PR Idle/Kiri/MC-56.png`);

        this.load.image("prbelakang1-walk", `${baseUrl}Karakter Cowo Cewe/PR Jalan/Belakang/MC-61.png`);
        this.load.image("prbelakang2-walk", `${baseUrl}Karakter Cowo Cewe/PR Jalan/Belakang/MC-62.png`);

        this.load.image("prdepan1-walk", `${baseUrl}Karakter Cowo Cewe/PR Jalan/Depan/MC-49.png`);
        this.load.image("prdepan2-walk", `${baseUrl}Karakter Cowo Cewe/PR Jalan/Depan/MC-50.png`);

        this.load.image("prkanan1-walk", `${baseUrl}Karakter Cowo Cewe/PR Jalan/Kanan/MC-53.png`);
        this.load.image("prkanan2-walk", `${baseUrl}Karakter Cowo Cewe/PR Jalan/Kanan/MC-54.png`);

        this.load.image("prkiri1-walk", `${baseUrl}Karakter Cowo Cewe/PR Jalan/Kiri/MC-57.png`);
        this.load.image("prkiri2-walk", `${baseUrl}Karakter Cowo Cewe/PR Jalan/Kiri/MC-58.png`);

        // Ending
        this.load.image("Ending", `${baseUrl}Ending Game/Ending-11.png`);
        this.load.image("Ending-Button", `${baseUrl}Ending Game/Ending-12.png`);

        this.load.plugin('rexVirtualJoystickPlugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexvirtualjoystickplugin.min.js', true);
    }

    create() {
        this.scene.start("Menu");
    }
}
