const direction = {
    UP: 0,
    DOWN: 1,
    LEFT: 2,
    RIGHT: 3,
    NONE: 4
};

export const tilesize = 16;

interface NPC {
    name: string;
    dialogs: DIALOG[];
    position: { x: number, y: number };
    frames: string[];
    src: string[];
}

interface DIALOG {
    name: string;
    dialogs: string;
}
const base = "src/assets/game/";

export const npcs: NPC[] = [{
    name: "panitia",
    dialogs: [
        {
            name: "panitia",
            dialogs: "Halo, apa kabar?"
        },
        {
            name: "Player",
            dialogs: "Baik-baik saja, terima kasih."
        }
    ],
    position: { x: 100, y: 100 },
    frames: ["panitiaidle1", "panitiaidle2"],
    src: [base + "Karakter RDK/Panitia RDK/Panit lk (1).png", base + "Karakter RDK/Panitia RDK/Panit lk (2).png"],
    },
    {
        name: "PengunjungIjoLk",
        dialogs: [
            {
                name: "PengunjungIjoLk",
                dialogs: "Halo, apa kabar?"
            },
            {
                name: "Player",
                dialogs: "Baik-baik saja, terima kasih."
            }
        ],
        position: { x: 116, y: 100 },
        frames: ["PengunjungIjoLk1", "PengunjungIjoLk2"],
        src: [base + "Karakter RDK/Pengunjung/Ijo/Peng ijo lk (1).png", base + "Karakter RDK/Pengunjung/Ijo/Peng ijo lk (2).png"],
    },
    {
        name: "PengunjungIjoPr",
        dialogs: [
            {
                name: "PengunjungIjoPr",
                dialogs: "Halo, apa kabar?"
            },
            {
                name: "Player",
                dialogs: "Baik-baik saja, terima kasih."
            }
        ],
        position: { x: 132, y: 100 },
        frames: ["PengunjungIjoPr1", "PengunjungIjoPr2"],
        src: [base + "Karakter RDK/Pengunjung/Ijo/Peng ijo pr (1).png", base + "Karakter RDK/Pengunjung/Ijo/Peng ijo pr (2).png"],
    },
    {
        name: "PengunjungMerahLk",
        dialogs: [
            {
                name: "PengunjungMerahLk",
                dialogs: "Halo, apa kabar?"
            },
            {
                name: "Player",
                dialogs: "Baik-baik saja, terima kasih."
            }
        ],
        position: { x: 148, y: 100 },
        frames: ["PengunjungMerahLk1", "PengunjungMerahLk2"],
        src: [base + "Karakter RDK/Pengunjung/Merah/Peng merah lk (1).png", base + "Karakter RDK/Pengunjung/Merah/Peng merah lk (2).png"],
    },
    {
        name: "PengunjungMerahPr",
        dialogs: [
            {
                name: "PengunjungMerahPr",
                dialogs: "Halo, apa kabar?"
            },
            {
                name: "Player",
                dialogs: "Baik-baik saja, terima kasih."
            }
        ],
        position: { x: 164, y: 100 },
        frames: ["PengunjungMerahPr1", "PengunjungMerahPr2"],
        src: [base + "Karakter RDK/Pengunjung/Merah/Peng merah pr (1).png", base + "Karakter RDK/Pengunjung/Merah/Peng merah pr (2).png"],
    },
    {
        name: "PengunjungPutihBiruLk",
        dialogs: [
            {
                name: "PengunjungPutihBiruLk",
                dialogs: "Halo, apa kabar?"
            },
            {
                name: "Player",
                dialogs: "Baik-baik saja, terima kasih."
            }
        ],
        position: { x: 180, y: 100 },
        frames: ["PengunjungPutihBiruLk1", "PengunjungPutihBiruLk2"],
        src: [base + "Karakter RDK/Pengunjung/Putih-Biru/putih biru lk (1).png", base + "Karakter RDK/Pengunjung/Putih-Biru/putih biru lk (2).png"],
    },
    {
        name: "PengunjungPutihBiruPr",
        dialogs: [
            {
                name: "PengunjungPutihBiruPr",
                dialogs: "Halo, apa kabar?"
            },
            {
                name: "Player",
                dialogs: "Baik-baik saja, terima kasih."
            }
        ],
        position: { x: 196, y: 100 },
        frames: ["PengunjungPutihBiruPr1", "PengunjungPutihBiruPr2"],
        src: [base + "Karakter RDK/Pengunjung/Putih-Biru/putih biru pr (1).png", base + "Karakter RDK/Pengunjung/Putih-Biru/putih biru pr (2).png"],
    },
    {
        name: "PengunjungPutihPutihLk",
        dialogs: [
            {
                name: "PengunjungPutihPutihLk",
                dialogs: "Halo, apa kabar?"
            },
            {
                name: "Player",
                dialogs: "Baik-baik saja, terima kasih."
            }
        ],
        position: { x: 212, y: 100 },
        frames: ["PengunjungPutihPutihLk1", "PengunjungPutihPutihLk2"],
        src: [base + "Karakter RDK/Pengunjung/Putih-Putih/Peng putih lk (1).png", base + "Karakter RDK/Pengunjung/Putih-Putih/Peng putih lk (2).png"],
    },
    {
        name: "PengunjungPutihPutihPr",
        dialogs: [
            {
                name: "PengunjungPutihPutihPr",
                dialogs: "Halo, apa kabar?"
            },
            {
                name: "Player",
                dialogs: "Baik-baik saja, terima kasih."
            }
        ],
        position: { x: 228, y: 100 },
        frames: ["PengunjungPutihPutihPr1", "PengunjungPutihPutihPr2"],
        src: [base + "Karakter RDK/Pengunjung/Putih-Putih/Peng outih pr (1).png", base + "Karakter RDK/Pengunjung/Putih-Putih/Peng outih pr (2).png"],
    },
    {
        name: "PengunjungPutihMerahLk",
        dialogs: [
            {
                name: "PengunjungPutihMerahLk",
                dialogs: "Halo, apa kabar?"
            },
            {
                name: "Player",
                dialogs: "Baik-baik saja, terima kasih."
            }
        ],
        position: { x: 244, y: 100 },
        frames: ["PengunjungPutihMerahLk1", "PengunjungPutihMerahLk2"],
        src: [base + "Karakter RDK/Pengunjung/Putih-Merah/putih merah lk (1).png", base + "Karakter RDK/Pengunjung/Putih-Merah/putih merah lk (2).png"],
    },
    {
        name: "PengunjungPutihMerahPr",
        dialogs: [
            {
                name: "PengunjungPutihMerahPr",
                dialogs: "Halo, apa kabar?"
            },
            {
                name: "Player",
                dialogs: "Baik-baik saja, terima kasih."
            }
        ],
        position: { x: 260, y: 100 },
        frames: ["PengunjungPutihMerahPr1", "PengunjungPutihMerahPr2"],
        src: [base + "Karakter RDK/Pengunjung/Putih-Merah/putih merah pr (1).png", base + "Karakter RDK/Pengunjung/Putih-Merah/putih merah pr (2).png"],
    }
    
]

export default direction;
