import { Scene } from "phaser";
import { npcs } from "./utils/const";
import { npcsAnims } from "./utils/anims";

export class Preloader extends Scene {
    preload() {
        this.load.image('tiles', 'assets/game/spritesheet.png');
        this.load.image('play-button', 'assets/game/Play Button.png');
        this.load.image("exit-button", 'assets/game/Quit Button.png');
        this.load.image('background', 'assets/game/VILLAGE.png');
        this.load.spritesheet('player', 'assets/game/spritesheet.png', {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.image('spritesheet', 'assets/game/spritesheet.png');

        this.load.tilemapTiledJSON("GameRDK", 'assets/game/GAME-RDK2.json');
        this.load.spritesheet("Maskam", 'assets/game/Maskam Fixed-07-07.png', {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("Tangga", 'assets/game/Tangga Fixed-09.png', {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("Papan", 'assets/game/Papan Fixed-11.png', {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("brikbaibrik", 'assets/game/brikbaibrik-12.png', {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("Grass", 'assets/game/Rumput aw aw-13.png', {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("Rumput", 'assets/game/Rumput aw aw-13.png', {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("ALA-14", 'assets/game/ALA-14.png', {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("ALA-14-14", 'assets/game/ALA-14-14.png', {
            frameWidth: 16,
            frameHeight: 16
        });

        npcs.forEach(npc => {
            npc.src.forEach((src, index) => {
            this.load.image(npc.frames[index], src);
            });
        });

        // Papan Pengumuman
        this.load.image("papan", 'assets/game/Pengumuman/Pengumuman Board.png');
        this.load.image("close-button", 'assets/game/Pengumuman/Exit Icon.png');
        this.load.image("poster-competition", 'assets/game/Pengumuman/RDk-Competition.png');

        // Pause Menu
        this.load.image("Pause-box", 'assets/game/Pause/Pause Board.png');
        this.load.image("Achivement", 'assets/game/Pause/Achievement PB.png');
        this.load.image("Pause-Button", 'assets/game/Pause/Pause Icon.png');
        this.load.image("Resume-Button", 'assets/game/Pause/Resume Button.png');
        this.load.image("Item-Holder", 'assets/game/Pause/Item PB.png');
        
        // Pause item
        this.load.image("Kupon", 'assets/game/Item/Kupon RDK.png');
        this.load.image("Makanan-Kucing", 'assets/game/Item/Makanan Kucing.png');
        this.load.image("Makanan-RDK", 'assets/game/Item/Makanan RDK.png');
        this.load.image("Uang", 'assets/game/Item/Uang.png');

        // Masjid
        this.load.image("Masjid", 'assets/game/ganjar-isi-ceramah-di-maskam-UGM.jpg');

        // Player 
        this.load.image("lkbelakang1", 'assets/game/Karakter Cowo Cewe/idle lk/belakang/MC-43.png');
        this.load.image("lkbelakang2", 'assets/game/Karakter Cowo Cewe/idle lk/belakang/MC-44.png');

        this.load.image("lkdepan1", 'assets/game/Karakter Cowo Cewe/idle lk/Depan/MC-31.png');
        this.load.image("lkdepan2", 'assets/game/Karakter Cowo Cewe/idle lk/Depan/MC-32.png');

        this.load.image("lkkanan1", 'assets/game/Karakter Cowo Cewe/idle lk/Kanan/MC-35.png');
        this.load.image("lkkanan2", 'assets/game/Karakter Cowo Cewe/idle lk/Kanan/MC-36.png');

        this.load.image("lkkiri1", 'assets/game/Karakter Cowo Cewe/idle lk/Kiri/MC-39.png');
        this.load.image("lkkiri2", 'assets/game/Karakter Cowo Cewe/idle lk/Kiri/MC-40.png');

        this.load.image("lkbelakang1-walk", 'assets/game/Karakter Cowo Cewe/LK Jalan/Belakang/MC-45.png');
        this.load.image("lkbelakang2-walk", 'assets/game/Karakter Cowo Cewe/LK Jalan/Belakang/MC-46.png');

        this.load.image("lkdepan1-walk", 'assets/game/Karakter Cowo Cewe/LK Jalan/Depan/MC-33.png');
        this.load.image("lkdepan2-walk", 'assets/game/Karakter Cowo Cewe/LK Jalan/Depan/MC-34.png');

        this.load.image("lkkanan1-walk", 'assets/game/Karakter Cowo Cewe/LK Jalan/Kanan/MC-37.png');
        this.load.image("lkkanan2-walk", 'assets/game/Karakter Cowo Cewe/LK Jalan/Kanan/MC-38.png');

        this.load.image("lkkiri1-walk", 'assets/game/Karakter Cowo Cewe/LK Jalan/Kiri/MC-41.png');
        this.load.image("lkkiri2-walk", 'assets/game/Karakter Cowo Cewe/LK Jalan/Kiri/MC-42.png');

        // Player Perempuang
        this.load.image("prbelakang1", 'assets/game/Karakter Cowo Cewe/PR Idle/Belakang/MC-59.png');
        this.load.image("prbelakang2", 'assets/game/Karakter Cowo Cewe/PR Idle/Belakang/MC-60.png');

        this.load.image("prdepan1", 'assets/game/Karakter Cowo Cewe/PR Idle/Depan/MC-47.png');
        this.load.image("prdepan2", 'assets/game/Karakter Cowo Cewe/PR Idle/Depan/MC-48.png');

        this.load.image("prkanan1", 'assets/game/Karakter Cowo Cewe/PR Idle/Kanan/MC-51.png');
        this.load.image("prkanan2", 'assets/game/Karakter Cowo Cewe/PR Idle/Kanan/MC-52.png');

        this.load.image("prkiri1", 'assets/game/Karakter Cowo Cewe/PR Idle/Kiri/MC-55.png');
        this.load.image("prkiri2", 'assets/game/Karakter Cowo Cewe/PR Idle/Kiri/MC-56.png');

        this.load.image("prbelakang1-walk", 'assets/game/Karakter Cowo Cewe/PR Jalan/Belakang/MC-61.png');
        this.load.image("prbelakang2-walk", 'assets/game/Karakter Cowo Cewe/PR Jalan/Belakang/MC-62.png');

        this.load.image("prdepan1-walk", 'assets/game/Karakter Cowo Cewe/PR Jalan/Depan/MC-49.png');
        this.load.image("prdepan2-walk", 'assets/game/Karakter Cowo Cewe/PR Jalan/Depan/MC-50.png');

        this.load.image("prkanan1-walk", 'assets/game/Karakter Cowo Cewe/PR Jalan/Kanan/MC-53.png');
        this.load.image("prkanan2-walk", 'assets/game/Karakter Cowo Cewe/PR Jalan/Kanan/MC-54.png');

        this.load.image("prkiri1-walk", 'assets/game/Karakter Cowo Cewe/PR Jalan/Kiri/MC-57.png');
        this.load.image("prkiri2-walk", 'assets/game/Karakter Cowo Cewe/PR Jalan/Kiri/MC-58.png');

        // Ending
        this.load.image("Ending", 'assets/game/Ending Game/Ending-11.png');
        this.load.image("Ending-Button", 'assets/game/Ending Game/Ending-12.png');

        this.load.plugin('rexVirtualJoystickPlugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexvirtualjoystickplugin.min.js', true);
    }

    create() {
        this.scene.start("Menu");
    }
}
