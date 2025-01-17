interface Dictinary<T> {
    [key: string]: T;
}

interface animation {
    key: string;
    frames: string[];
    duration?: number;
    repeat?: number;
}

export const npcsAnims: Dictinary<Dictinary<animation>> = {
    "panitia": {
        "panitia_idle":
        {
            key: 'panitia_idle',
            frames:
                [
                    'panitiaidle1',
                    'panitiaidle2'
                ],
            duration: 1000,
            repeat: -1
        }
    },
    "PengunjungIjoLk": {
        "PengunjungIjoLk_idle":
        {
            key: 'PengunjungIjoLk_idle',
            frames:
                [
                    'PengunjungIjoLk1',
                    'PengunjungIjoLk2'
                ],
            duration: 1000,
            repeat: -1
        }
    },
    "PengunjungIjoPr": {
        "PengunjungIjoPr_idle":
        {
            key: 'PengunjungIjoPr_idle',
            frames:
                [
                    'PengunjungIjoPr1',
                    'PengunjungIjoPr2'
                ],
            duration: 1000,
            repeat: -1
        }
    },
    "PengunjungMerahLk": {
        "PengunjungMerahLk_idle":
        {
            key: 'PengunjungMerahLk_idle',
            frames:
                [
                    'PengunjungMerahLk1',
                    'PengunjungMerahLk2'
                ],
            duration: 1000,
            repeat: -1
        }
    },
    "PengunjungMerahPr": {
        "PengunjungMerahPr_idle":
        {
            key: 'PengunjungMerahPr_idle',
            frames:
                [
                    'PengunjungMerahPr1',
                    'PengunjungMerahPr2'
                ],
            duration: 1000,
            repeat: -1
        }
    },
    "PengunjungPutihBiruLk": {
        "PengunjungPutihBiruLk_idle":
        {
            key: 'PengunjungPutihBiruLk_idle',
            frames:
                [
                    'PengunjungPutihBiruLk1',
                    'PengunjungPutihBiruLk2'
                ],
            duration: 1000,
            repeat: -1
        }
    },
    "PengunjungPutihBiruPr": {
        "PengunjungPutihBiruPr_idle":
        {
            key: 'PengunjungPutihBiruPr_idle',
            frames:
                [
                    'PengunjungPutihBiruPr1',
                    'PengunjungPutihBiruPr2'
                ],
            duration: 1000,
            repeat: -1
        }
    },
    "PengunjungPutihPutihLk": {
        "PengunjungPutihPutihLk_idle":
        {
            key: 'PengunjungPutihPutihLk_idle',
            frames:
                [
                    'PengunjungPutihPutihLk1',
                    'PengunjungPutihPutihLk2'
                ],
            duration: 1000,
            repeat: -1
        }
    },
    "PengunjungPutihPutihPr": {
        "PengunjungPutihPutihPr_idle":
        {
            key: 'PengunjungPutihPutihPr_idle',
            frames:
                [
                    'PengunjungPutihPutihPr1',
                    'PengunjungPutihPutihPr2'
                ],
            duration: 1000,
            repeat: -1
        }
    },
    "PengunjungPutihMerahLk": {
        "PengunjungPutihMerahLk_idle":
        {
            key: 'PengunjungPutihMerahLk_idle',
            frames:
                [
                    'PengunjungPutihMerahLk1',
                    'PengunjungPutihMerahLk2'
                ],
            duration: 1000,
            repeat: -1
        }
    },
    "PengunjungPutihMerahPr": {
        "PengunjungPutihMerahPr_idle":
        {
            key: 'PengunjungPutihMerahPr_idle',
            frames:
                [
                    'PengunjungPutihMerahPr1',
                    'PengunjungPutihMerahPr2'
                ],
            duration: 1000,
            repeat: -1
        }
    },
};
