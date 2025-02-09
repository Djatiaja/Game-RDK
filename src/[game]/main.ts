import { AUTO, Game } from 'phaser';
import { Menu } from './[scene]/main-menu';
import { GameScene } from './[scene]/game';
import { Preloader } from './[scene]/Preloader';
import { papan } from './[scene]/papan';
import { Masjid } from './[scene]/Masjid';
import { Textbox } from './[scene]/Textbox';
import { Pause } from './[scene]/Pause';
import { Ending } from './[scene]/Ending';

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig




const config: Phaser.Types.Core.GameConfig = {
    type: AUTO,
    parent: "game-containter",
    width: 1024,
    height: 708,
    scale: {
      },
    backgroundColor: '#028af8',
    render: {
        pixelArt: true,
        roundPixels: true,
    },
    scene:[
        Preloader,
        Menu,
        GameScene,
        papan,
        Masjid,
        Textbox,
        Pause,
        Ending
    ],

    physics: {
        default: 'Arcade',
        arcade: {
            debug: false
        }
    }
};

const StartGame = (parent: string) => {
    return new Game({ ...config, parent });
}

export default StartGame;