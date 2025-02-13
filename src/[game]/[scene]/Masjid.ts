import { Data, Scene } from "phaser";
import { EventBus } from "../EventBus";
import { Player } from "./utils/Player";
import { DIALOG } from "./utils/const";


interface DataMasjid {
    text: DIALOG[];
    order: number[][][];
    callback: Function | null;
    correctAnswer: number[];
}

const data: DataMasjid = {
    text: [
        {
            name: "panitia",
            dialogs: "Halo, selamat datang di acara kami!"
        },
        {
            name: "Player",
            dialogs: "Terima kasih, senang berada di sini."
        },
        {
            name: "panitia",
            dialogs: "Apa itu ramadhan?"
        },
        {
            name: "Player",
            dialogs: "Ramadhan adalah bulan ke-9 dalam kalender Hijriah, bulan ini diwajibkan bagi umat muslim untuk berpuasa selama sebulan penuh."
        },
        {
            name:"player",
            dialogs: "Ramadhan adalah bulan ke-1 dalam kalender Hijriah, bulan ini diwajibkan bagi umat muslim untuk berpuasa selama sebulan penuh."
        },
        {   
            name: "panitia",
            dialogs: "Benar"
        },
        {
            name: "Panitia",
            dialogs: "Salah"
        }
    ],
    order:[[[0,1,2],[3,5],[4,6]]],
    callback: null,
    correctAnswer: [1]
}




export class Masjid extends Scene
{
    player!: Player;


    constructor(){
        super('Masjid');
    }

    init(data:{player: Player}){
        this.player = data.player;
    }

    create(){

        const { width, height } = this.scale;
        this.add.image(0, 0, 'Masjid').setOrigin(0, 0).setDisplaySize(width, height);
        data.callback = () => {
            this.player.data.Achievements.achievement2.isAchieved = true;
        }
        this.scene.launch('Textbox', {player: this.player, text:{ ...data.text}, order: JSON.parse(JSON.stringify(data.order)), callback: data.callback, correctAnswer: JSON.parse(JSON.stringify(data.correctAnswer))});
        this.scene.get('Textbox').events.on('shutdown', () => {
            this.scene.stop();
        });

        EventBus.emit('current-scene-ready', this);
    }
}
