import direction, { npcs } from "./const";

export class Control {
  scene: Phaser.Scene;
  keys: Phaser.Types.Input.Keyboard.CursorKeys;

  keysW: Phaser.Input.Keyboard.Key;
  keysA: Phaser.Input.Keyboard.Key;
  keysS: Phaser.Input.Keyboard.Key;
  keysD: Phaser.Input.Keyboard.Key;
  keysSpace: Phaser.Input.Keyboard.Key;
  C: Phaser.Input.Keyboard.Key;
  mouse: Phaser.Input.Pointer;
  joystick!: any;
  action = false;

  inInteraction: boolean = false;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.keys = this.scene.input.keyboard!.createCursorKeys();
    this.keysW = this.scene.input.keyboard!.addKey(
      Phaser.Input.Keyboard.KeyCodes.W
    );
    this.keysA = this.scene.input.keyboard!.addKey(
      Phaser.Input.Keyboard.KeyCodes.A
    );
    this.keysS = this.scene.input.keyboard!.addKey(
      Phaser.Input.Keyboard.KeyCodes.S
    );
    this.keysD = this.scene.input.keyboard!.addKey(
      Phaser.Input.Keyboard.KeyCodes.D
    );
    this.keysSpace = this.scene.input.keyboard!.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
    this.C = this.scene.input.keyboard!.addKey(
      Phaser.Input.Keyboard.KeyCodes.C
    );
    this.mouse = this.scene.input.activePointer;

    // this.joystick = joystick
    // this.joystick.on('update', () => {
    //     console.log(this.joystick.direction);
    // });
  }

  getDirectionKeysPressDown(): number[] {
    let directionPlayer: number[] = [];

    if (this.joystick && this.joystick.force > 0.1) {
      if (this.joystick.angle < 45 && this.joystick.angle > -45) {
        directionPlayer.push(direction.RIGHT);
      } else if (this.joystick.angle < 135 && this.joystick.angle > 45) {
        directionPlayer.push(direction.DOWN);
      } else if (this.joystick.angle < -135 || this.joystick.angle > 135) {
        directionPlayer.push(direction.LEFT);
      } else if (this.joystick.angle < -45 && this.joystick.angle > -135) {
        directionPlayer.push(direction.UP);
      }
    }

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
      } else {
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
      } else {
        directionPlayer.push(direction.RIGHT);
      }
    }
    if (directionPlayer.length < 1) {
      return [direction.NONE];
    }
    return directionPlayer;
  }

  getKeysPressDown() {
    if (this.keysSpace.isDown && !this.inInteraction || this.action) {
        this.action = false;
      return "space";
    }

    if (this.mouse.leftButtonDown() || this.keysSpace.isDown) {
      return "mouse";
    }

    if (this.C.isDown) {
      return "C";
    }
    
    return "none";
  }

  setInInteraction(value: boolean) {
    this.inInteraction = value;
  }

  public setJoystick(joystick: any) {
    this.joystick = joystick;
  }

  public actionButtonPressed() {
    this.action = true;
}
}
