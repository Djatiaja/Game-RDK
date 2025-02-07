import { NPC, npcs } from "./const";
import { Player } from "./Player";

export class Npc {

    scene: Phaser.Scene;
    player: Player;
    data: NPC;
    sprite!: Phaser.Physics.Arcade.Sprite;


    constructor(scene: Phaser.Scene,  player: Player, npc: NPC)
    {
        this.data= npc;
        this.player = player;
        this.scene = scene;
        this.create();
    }

    create()
    {
        this.data.isInteracted = false;

        this.sprite = this.scene.physics.add.sprite(this.data.position.x, this.data.position.y, this.data.frames[0]).play(`${this.data.name}_idle`);
        this.sprite.setImmovable(true);
        this.scene.physics.add.collider(this.player.object, this.sprite);
        this.sprite.setBodySize(this.sprite.width, this.sprite.height - 10, false);
        this.sprite.setOffset(0, 10);
    }

    interact()
    {
        if(!this.data.isInteracted){
            this.data.isInteracted = true;
            this.player.data.NpcInteraction ++;

            const NpcQuantity = npcs.length;
            if(this.player.data.NpcInteraction === NpcQuantity){
                this.player.data.Achievements.achievement1.isAchieved = true;
            }

            console.log(this.player.data.NpcInteraction);
            console.log(NpcQuantity);
        }

        this.scene.scene.launch("Textbox", { player: this.player, text: [...this.data.dialogs], order:  JSON.parse(JSON.stringify(this.data.order)), callback: null, correctAnswer: [...this.data.correctAnswer] });
    }

    
}