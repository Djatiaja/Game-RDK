import Phaser from "phaser";


export default class testing extends Phaser.Scene {
    private player!: Phaser.Physics.Arcade.Sprite;
    private joystick!: any;

    constructor() {
        super({ key: "testing" });
    }

    preload() {
        // Load asset karakter (ganti dengan asset yang sesuai)
        this.load.plugin('rexVirtualJoystickPlugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexvirtualjoystickplugin.min.js', true);
    }

    create() {
        // Tambahkan player ke scene
        this.player = this.physics.add.sprite(400, 300, "player");
        this.player.setCollideWorldBounds(true);

        this.joystick = this.plugins.get('rexVirtualJoystickPlugin')!.add(this, {
            x: 100, // Posisi X Joystick
            y: 400, // Posisi Y Joystick
            radius: 50, // Radius lingkaran joystick
            base: this.add.circle(0, 0, 50, 0x888888), // Warna base
            thumb: this.add.circle(0, 0, 25, 0x00000), // Warna thumb
        });

        // Debug: Tampilkan posisi joystick di console
        this.joystick.on('update', () => {
            console.log("Angle:", this.joystick.angle, "Force:", this.joystick.force);
        });
    }

    update() {
        if (!this.joystick) return;

        let cursorKeys = this.joystick.createCursorKeys();

        if (cursorKeys.left.isDown) {
            this.player.setVelocityX(-200);
        } else if (cursorKeys.right.isDown) {
            this.player.setVelocityX(200);
        } else {
            this.player.setVelocityX(0);
        }

        if (cursorKeys.up.isDown) {
            this.player.setVelocityY(-200);
        } else if (cursorKeys.down.isDown) {
            this.player.setVelocityY(200);
        } else {
            this.player.setVelocityY(0);
        }
    }
}
