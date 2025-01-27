import direction, { npcs } from "./const";


export class Control 
{
    scene: Phaser.Scene;
    keys: Phaser.Types.Input.Keyboard.CursorKeys;

    keysW: Phaser.Input.Keyboard.Key;
    keysA: Phaser.Input.Keyboard.Key;
    keysS: Phaser.Input.Keyboard.Key;
    keysD: Phaser.Input.Keyboard.Key;
    keysSpace: Phaser.Input.Keyboard.Key;
    C: Phaser.Input.Keyboard.Key;
    mouse: Phaser.Input.Pointer;

    inInteraction: boolean = false;

    constructor(scene: Phaser.Scene){
        this.scene = scene;
        this.keys = this.scene.input.keyboard!.createCursorKeys();
        this.keysW = this.scene.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.keysA = this.scene.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keysS = this.scene.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keysD = this.scene.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keysSpace = this.scene.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.C = this.scene.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.C);
        this.mouse = this.scene.input.activePointer;
    }

    getDirectionKeysPressDown(): number[] {
        
        let directionPlayer: number[] = [];

        if (!this.keys || this.inInteraction) {
            return [direction.NONE];
        }

        if (this.keys.up.isDown || this.keysW.isDown) {
            directionPlayer.push(direction.UP);
        }
        if (this.keys.down.isDown || this.keysS.isDown) {
            const index = directionPlayer.indexOf(direction.UP);
            if (index > -1) {
                directionPlayer.splice(index, 1);
            }else{
                directionPlayer.push(direction.DOWN); 
            }
        }
        if (this.keys.left.isDown || this.keysA.isDown) {
            directionPlayer.push(direction.LEFT);
        }
        if (this.keys.right.isDown || this.keysD.isDown) {
            
            const index = directionPlayer.indexOf(direction.LEFT);
            if (index > -1) {
                directionPlayer.splice(index, 1);
            }else{
                directionPlayer.push(direction.RIGHT);
            }
        }
        if (directionPlayer.length < 1) {
            return [direction.NONE];
        }
        return directionPlayer;
    }

    getKeysPressDown() {
        
        if (this.keysSpace.isDown && !this.inInteraction) {
            return "space";
        }

        if(this.mouse.leftButtonDown() || this.keysSpace.isDown){
            return "mouse";
        }

        if(this.C.isDown){
            return "C"
        }
        

        return "none";
    }

    setInInteraction(value: boolean){
        this.inInteraction = value;
    }

    
}