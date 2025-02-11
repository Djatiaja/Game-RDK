import Phaser from "phaser";


export default class testing extends Phaser.Scene {
    private player!: Phaser.Physics.Arcade.Sprite;
    private joystick!: any;

    constructor() {
        super({ key: "testing" });
    }

   

    create() {
        // Add a button to trigger orientation lock
        const lockButton = this.add.text(100, 100, "Lock Orientation", { fontSize: "24px", color: "#fff" })
            .setInteractive()
            .on("pointerdown", () => this.lockOrientation());

        // Optionally, listen for fullscreen changes
        this.scale.on("fullscreenchange", () => {
            console.log("Fullscreen changed!");
        });
    }

    async lockOrientation() {
        try {
            if (!("orientation" in screen && "lock" in screen.orientation)) {
                console.error("Screen orientation API is not supported.");
                return;
            }

            // Request fullscreen first (required by most browsers)
            if (!document.fullscreenElement) {
                await this.scale.startFullscreen();
            }

            // Lock the orientation to landscape
            await screen.orientation.lock("landscape");
            console.log("Orientation locked to landscape.");
        } catch (error) {
            console.error("Failed to lock orientation:", error);
        }
    }
}
