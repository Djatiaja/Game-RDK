import { AUTO, Game } from 'phaser';
import { Menu } from './[scene]/main-menu';
import { GameScene } from './[scene]/game';
import { Preloader } from './[scene]/Preloader';
import { papan } from './[scene]/utils/papan';

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Phaser.Types.Core.GameConfig = {
    type: AUTO,
    parent: "game-containter",
    width: 1024,
    height: 708,
    backgroundColor: '#028af8',
    render: {
        pixelArt: true,
        roundPixels: true,
    },
    scene:[
        Preloader,
        Menu,
        GameScene,
        papan
    ],
    scale: {
    },
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