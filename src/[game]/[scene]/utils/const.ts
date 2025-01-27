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
    position: { x: number, y: number };
    frames: string[];
    src: string[];
}

export interface DIALOG {
    name: string;
    dialogs: string;
}
const base = "src/assets/game/";

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
    position: { x: 100, y: 200 },
    frames: ["panitiaidle1", "panitiaidle2"],
    src: [base + "Karakter RDK/Panitia RDK/Panit lk (1).png", base + "Karakter RDK/Panitia RDK/Panit lk (2).png"],
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
        position: { x: 116, y: 200 },
        frames: ["PengunjungIjoLk1", "PengunjungIjoLk2"],
        src: [base + "Karakter RDK/Pengunjung/Ijo/Peng ijo lk (1).png", base + "Karakter RDK/Pengunjung/Ijo/Peng ijo lk (2).png"],
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
        position: { x: 132, y: 200 },
        frames: ["PengunjungIjoPr1", "PengunjungIjoPr2"],
        src: [base + "Karakter RDK/Pengunjung/Ijo/Peng ijo pr (1).png", base + "Karakter RDK/Pengunjung/Ijo/Peng ijo pr (2).png"],
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
        position: { x: 148, y: 200 },
        frames: ["PengunjungMerahLk1", "PengunjungMerahLk2"],
        src: [base + "Karakter RDK/Pengunjung/Merah/Peng merah lk (1).png", base + "Karakter RDK/Pengunjung/Merah/Peng merah lk (2).png"],
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
        position: { x: 164, y: 200 },
        frames: ["PengunjungMerahPr1", "PengunjungMerahPr2"],
        src: [base + "Karakter RDK/Pengunjung/Merah/Peng merah pr (1).png", base + "Karakter RDK/Pengunjung/Merah/Peng merah pr (2).png"],
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
        position: { x: 180, y: 200 },
        frames: ["PengunjungPutihBiruLk1", "PengunjungPutihBiruLk2"],
        src: [base + "Karakter RDK/Pengunjung/Putih-Biru/putih biru lk (1).png", base + "Karakter RDK/Pengunjung/Putih-Biru/putih biru lk (2).png"],
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
        position: { x: 196, y: 200 },
        frames: ["PengunjungPutihBiruPr1", "PengunjungPutihBiruPr2"],
        src: [base + "Karakter RDK/Pengunjung/Putih-Biru/putih biru pr (1).png", base + "Karakter RDK/Pengunjung/Putih-Biru/putih biru pr (2).png"],
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
        position: { x: 212, y: 200 },
        frames: ["PengunjungPutihPutihLk1", "PengunjungPutihPutihLk2"],
        src: [base + "Karakter RDK/Pengunjung/Putih-Putih/Peng putih lk (1).png", base + "Karakter RDK/Pengunjung/Putih-Putih/Peng putih lk (2).png"],
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
        position: { x: 228, y: 200 },
        frames: ["PengunjungPutihPutihPr1", "PengunjungPutihPutihPr2"],
        src: [base + "Karakter RDK/Pengunjung/Putih-Putih/Peng outih pr (1).png", base + "Karakter RDK/Pengunjung/Putih-Putih/Peng outih pr (2).png"],
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
        position: { x: 244, y: 200 },
        frames: ["PengunjungPutihMerahLk1", "PengunjungPutihMerahLk2"],
        src: [base + "Karakter RDK/Pengunjung/Putih-Merah/putih merah lk (1).png", base + "Karakter RDK/Pengunjung/Putih-Merah/putih merah lk (2).png"],
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
        position: { x: 260, y: 200 },
        frames: ["PengunjungPutihMerahPr1", "PengunjungPutihMerahPr2"],
        src: [base + "Karakter RDK/Pengunjung/Putih-Merah/putih merah pr (1).png", base + "Karakter RDK/Pengunjung/Putih-Merah/putih merah pr (2).png"],
    }
]

export default direction;
