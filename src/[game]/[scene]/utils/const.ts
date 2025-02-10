const direction = {
    UP: 0,
    DOWN: 1,
    LEFT: 2,
    RIGHT: 3,
    NONE: 4
};

export const tilesize = 16;

export interface NPC {
    name: string;
    dialogs: DIALOG[];
    order:number[][][];
    correctAnswer: number[];
    position: { x: number, y: number };
    frames: string[];
    src: string[]; 
    class: string;
    isInteracted?: boolean;
} 
export interface DIALOG {
    name: string;
    dialogs: string;
}
const base = "assets/game/";

export const npcs: NPC[] = [{
    name: "panitia",
    dialogs: [
        {
            name: "panitia",
            dialogs: "Halo, selamat datang di acara kami!"
        },
        {
            name: "Player",
            dialogs: "Terima kasih, senang berada di sini."
        }
    ],
    order: [[[0,1]]],
    correctAnswer:[],
    position: { x: 345.25, y: 216.25 },
    frames: ["panitiaidle1", "panitiaidle2"],
    src: [base + "Karakter RDK/Panitia RDK/Panit lk (1).png", base + "Karakter RDK/Panitia RDK/Panit lk (2).png"],
    class: "Panitia"
    },
    {
        name: "PengunjungIjoLk",
        dialogs: [
            {
                name: "PengunjungIjoLk",
                dialogs: "Hai, sudah lama tidak bertemu!"
            },
            {
                name: "Player",
                dialogs: "Iya, sudah lama sekali."
            }
        ],
        order: [[[0,1]]],
        correctAnswer:[], 
        position: { x: 492.67, y: 250.67 },
        frames: ["PengunjungIjoLk1", "PengunjungIjoLk2"],
        src: [base + "Karakter RDK/Pengunjung/Ijo/Peng ijo lk (1).png", base + "Karakter RDK/Pengunjung/Ijo/Peng ijo lk (2).png"],
        class: "NPC"
    },
    {
        name: "PengunjungIjoPr",
        dialogs: [
            {
                name: "PengunjungIjoPr",
                dialogs: "Selamat pagi, bagaimana kabarmu?"
            },
            {
                name: "Player",
                dialogs: "Pagi, kabar baik. Kamu?"
            }
        ],
        order: [[[0,1]]],
        correctAnswer:[],
        position: { x: 342.50, y: 45.50 },
        frames: ["PengunjungIjoPr1", "PengunjungIjoPr2"],
        src: [base + "Karakter RDK/Pengunjung/Ijo/Peng ijo pr (1).png", base + "Karakter RDK/Pengunjung/Ijo/Peng ijo pr (2).png"],
        class: "NPC"
    },
    {
        name: "PengunjungMerahLk",
        dialogs: [
            {
                name: "PengunjungMerahLk",
                dialogs: "Apa yang kamu lakukan di sini?"
            },
            {
                name: "Player",
                dialogs: "Hanya berjalan-jalan."
            }
        ],
        order: [[[0,1]]],
        correctAnswer:[],
        position: { x:  187.50, y: 246.50  },
        frames: ["PengunjungMerahLk1", "PengunjungMerahLk2"],
        src: [base + "Karakter RDK/Pengunjung/Merah/Peng merah lk (1).png", base + "Karakter RDK/Pengunjung/Merah/Peng merah lk (2).png"],
        class: "NPC"
    },
    {
        name: "PengunjungMerahPr",
        dialogs: [
            {
                name: "PengunjungMerahPr",
                dialogs: "Senang bertemu denganmu!"
            },
            {
                name: "Player",
                dialogs: "Senang bertemu denganmu juga!"
            }
        ],
        order: [[[0,1]]],
        correctAnswer:[],
        position: { x: 105.50, y: 154 },
        frames: ["PengunjungMerahPr1", "PengunjungMerahPr2"], 
        src: [base + "Karakter RDK/Pengunjung/Merah/Peng merah pr (1).png", base + "Karakter RDK/Pengunjung/Merah/Peng merah pr (2).png"],
        class: "NPC"
    },
    {
        name: "PengunjungPutihBiruLk",  
        dialogs: [
            {
                name: "PengunjungPutihBiruLk",
                dialogs: "Apakah kamu menikmati acara ini?"
            },
            {
                name: "Player",
                dialogs: "Ya, sangat menyenangkan!"
            }
        ],
        order: [[[0,1]]],
        correctAnswer:[],
        position: { x: 135.50, y: 40  },
        frames: ["PengunjungPutihBiruLk1", "PengunjungPutihBiruLk2"],
        src: [base + "Karakter RDK/Pengunjung/Putih-Biru/putih biru lk (1).png", base + "Karakter RDK/Pengunjung/Putih-Biru/putih biru lk (2).png"],
        class: "NPC"
    },
    {
        name: "PengunjungPutihBiruPr",
        dialogs: [
            {
                name: "PengunjungPutihBiruPr",
                dialogs: "Bagaimana pendapatmu tentang acara ini?"
            },
            {
                name: "Player",
                dialogs: "Acara ini sangat bagus!"
            }
        ],
        order: [[[0,1]]],
        correctAnswer:[],
        position: { x: 67.50 , y: 420  },
        frames: ["PengunjungPutihBiruPr1", "PengunjungPutihBiruPr2"],
        src: [base + "Karakter RDK/Pengunjung/Putih-Biru/putih biru pr (1).png", base + "Karakter RDK/Pengunjung/Putih-Biru/putih biru pr (2).png"],
        class: "NPC"
    },
    {
        name: "PengunjungPutihPutihLk",
        dialogs: [
            {
                name: "PengunjungPutihPutihLk",
                dialogs: "Apakah kamu sudah mencoba makanan di sini?"
            },
            {
                name: "Player",
                dialogs: "Belum, tapi aku akan mencobanya nanti."
            }
        ],
        order: [[[0,1]]],
        correctAnswer:[],
        position: { x: 212, y: 200 },
        frames: ["PengunjungPutihPutihLk1", "PengunjungPutihPutihLk2"],
        src: [base + "Karakter RDK/Pengunjung/Putih-Putih/Peng putih lk (1).png", base + "Karakter RDK/Pengunjung/Putih-Putih/Peng putih lk (2).png"],
        class: "NPC"
    },
    {
        name: "PengunjungPutihPutihPr",
        dialogs: [
            {
                name: "PengunjungPutihPutihPr",
                dialogs: "Apakah kamu datang sendirian?"
            },
            {
                name: "Player",
                dialogs: "Tidak, aku datang bersama teman-teman."
            }
        ],
        order: [[[0,1]]],
        correctAnswer:[],
        position: { x: 314, y: 410.33 },
        frames: ["PengunjungPutihPutihPr1", "PengunjungPutihPutihPr2"],
        src: [base + "Karakter RDK/Pengunjung/Putih-Putih/Peng outih pr (1).png", base + "Karakter RDK/Pengunjung/Putih-Putih/Peng outih pr (2).png"],
        class: "NPC"
    },
    {
        name: "PengunjungPutihMerahLk",
        dialogs: [
            {
                name: "PengunjungPutihMerahLk",
                dialogs: "Apakah kamu sudah melihat pertunjukan tadi?"
            },
            {
                name: "Player",
                dialogs: "Ya, pertunjukannya sangat menarik!"
            }
        ],
        order: [[[0,1]]],
        correctAnswer:[],
        position: { x: 314.50, y: 187.50 },
        frames: ["PengunjungPutihMerahLk1", "PengunjungPutihMerahLk2"],
        src: [base + "Karakter RDK/Pengunjung/Putih-Merah/putih merah lk (1).png", base + "Karakter RDK/Pengunjung/Putih-Merah/putih merah lk (2).png"],
        class: "NPC"
    },
    {
        name: "PengunjungPutihMerahPr",
        dialogs: [
            {
                name: "PengunjungPutihMerahPr",
                dialogs: "Apakah kamu suka musik yang dimainkan di sini?"
            },
            {
                name: "Player",
                dialogs: "Ya, musiknya sangat bagus!"
            }
        ],
        order: [[[0,1]]],
        correctAnswer:[],
        position: { x: 219, y: 135 },
        frames: ["PengunjungPutihMerahPr1", "PengunjungPutihMerahPr2"],
        src: [base + "Karakter RDK/Pengunjung/Putih-Merah/putih merah pr (1).png", base + "Karakter RDK/Pengunjung/Putih-Merah/putih merah pr (2).png"],
        class: "NPC"
    }
]

export default direction;
