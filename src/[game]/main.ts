import { AUTO, Game } from 'phaser';
import { Menu } from './[scene]/main-menu';
import { GameScene } from './[scene]/game';
import { Preloader } from './[scene]/Preloader';
import { papan } from './[scene]/papan';
import { Masjid } from './[scene]/Masjid';
import { Textbox } from './[scene]/Textbox';
import { Pause } from './[scene]/Pause';
import { Ending } from './[scene]/Ending';
import testing from './[scene]/testing';
import rexVirtualJoystickPlugin from 'phaser3-rex-plugins/plugins/virtualjoystick-plugin';
import { ControllerScene } from './[scene]/ControllerScene';
import { PhaserNavMeshPlugin } from "phaser-navmesh/src";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig




const config: Phaser.Types.Core.GameConfig = {
    type: AUTO,
    parent: "game-containter",
    width: 1024,
    height: 708,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
      plugins: {
        global: [
            { key: "rexVirtualJoystickPlugin", plugin: rexVirtualJoystickPlugin, start: true }
        ],
        scene: [
            {
                key: "PhaserNavMeshPlugin", // Key to store the plugin class under in cache
                plugin: PhaserNavMeshPlugin, // Class that constructs plugins
                mapping: "navMeshPlugin", // Property mapping to use for the scene, e.g. this.navMeshPlugin
                start: true
              }
        ]
    },
    backgroundColor: '#028af8',
    render: {
        pixelArt: true,
    },
    scene:[
        Preloader,
        Menu,
        GameScene,
        papan,
        Masjid,
        Textbox,
        Pause,
        Ending,
        testing,
        ControllerScene
    ],

    physics: {
        default: 'Arcade',
        arcade: {
            debug: false
        }
    },
    
    

};

const StartGame = (parent: string) => {
    return new Game({ ...config, parent });
}

export default StartGame;