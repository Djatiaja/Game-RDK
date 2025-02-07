import { NPC, npcs } from "../const";
import { Npc } from "../Npc";
import { Player } from "../Player";





export class Panitia extends Npc
{
    constructor(scene: Phaser.Scene,  player: Player, npc: NPC)
    {
        super(scene, player, npc)
    }

    override interact(): void {
        if(!this.data.isInteracted){
            this.data.isInteracted = true;
            this.player.data.NpcInteraction ++;

            const NpcQuantity = npcs.length;
            if(this.player.data.NpcInteraction === NpcQuantity){
                this.player.data.Achievements.achievement1.isAchieved = true;
            }
        }
        this.scene.scene.launch("Textbox", { player: this.player, text: [...this.data.dialogs], order:  JSON.parse(JSON.stringify(this.data.order)), callback: null, correctAnswer: [...this.data.correctAnswer] });
    }

}