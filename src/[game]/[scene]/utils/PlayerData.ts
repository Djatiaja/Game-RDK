interface imageLoader {
    key: string;
    src: string;
}


export const images: imageLoader[] = [

]

interface Achievement {
    name: string;
    isAchieved: boolean;
    image: string;
    position: {x: number, y: number};
}

interface Item {
    name: string;
    image: string;
    quantity: number;
    position: {x: number, y: number};
}

interface Dictinary<T> {
    [key: string]: T;
}

interface Animation {
    key: string;
    frames: string[];
    frameRate: number;
    repeat: number;
}

export interface PlayerData{
    name: string;
    Achievements: Dictinary<Achievement>;
    Items: Dictinary<Item>;
    animations: Animation[];
    position: {x: number, y: number};
    NpcInteraction:number;
    profile: string;
}

export const PlayerDatas: PlayerData[] = [
    {
        name: "Player",
        Achievements: {
            achievement1: {
                name: "Social Butterfly",
                isAchieved: false,
                image: "achievement1.png",
                position: { x: - 290, y: 240 }
            },
            achievement2: {
                name: "BerOtak Senku",
                isAchieved: false,
                image: "achievement2.png",
                position: { x: 0, y: 240 }
            },
            achievement3: {
                name: "Third Achievement",
                isAchieved: false,
                image: "achievement3.png",
                position: { x: 290, y: 240 }
            },
            achievement4: {
                name: "Fourth Achievement",
                isAchieved: false,
                image: "achievement4.png",
                position: { x:  - 290, y: 310 }
            },
            achievement5: {
                name: "Fifth Achievement",
                isAchieved: false,
                image: "achievement5.png",
                position: { x: 0, y: 310 }
            },
            achievement6: {
                name: "Sixth Achievement",
                isAchieved: false,
                image: "achievement6.png",
                position: { x: 290, y: 310 }
            }
        },
        Items: {
            Kupon: {
                name: "Kupon RDK",
                image: "Kupon",
                quantity: 0,
                position: { x: 0, y: 460 }
            },
            MakananKucing: {
                name: "Makanan Kucing",
                image: "Makanan-Kucing",
                quantity: 0,
                position: { x: 90, y: 460 }
            },
            MakananRDK: {
                name: "Makanan",
                image: "Makanan-RDK",
                quantity: 0,
                position: { x: 180, y: 460 }
            },
            Uang: {
                name: "Uang",
                image: "Uang",
                quantity: 0,
                position: { x: 270, y: 460 }
            },
        }
        ,
        animations: [
            {
                key: 'walk-down',
                frames: ["lkdepan1-walk", "lkdepan1" ,"lkdepan2-walk","lkdepan1" ],
                frameRate: 4,
                repeat: -1
            },
            {
                key: 'walk-up',
                frames: ["lkbelakang1-walk", "lkbelakang1" ,"lkbelakang2-walk","lkbelakang1"],
                frameRate: 4,
                repeat: -1
            },
            {
                key: 'walk-right',
                frames: ["lkkanan1-walk","lkkanan1" ,"lkkanan2-walk", "lkkanan1" ],
                frameRate: 4,
                repeat: -1
            },
            {
                key: 'walk-left',
                frames: ["lkkiri1-walk","lkkiri1" ,"lkkiri2-walk", "lkkiri1" ],
                frameRate: 4,
                repeat: -1
            },
            {
                key: 'idle-down',
                frames: ["lkdepan1", "lkdepan2"],
                frameRate: 2,
                repeat: -1
            },
            {
                key: 'idle-up',
                frames: ["lkbelakang1", "lkbelakang2"],
                frameRate: 2,
                repeat: -1
            },
            {
                key: 'idle-right',
                frames: ["lkkanan1", "lkkanan2"],
                frameRate: 2,
                repeat: -1
            },
            {
                key: 'idle-left',
                frames: ["lkkiri1", "lkkiri2"],
                frameRate: 2,
                repeat: -1
            }
        ],
        position: { x: 256, y: 445.33 },
        NpcInteraction: 0,
        profile: "lkdepan1"
    },
    {
        name: "Player",
        Achievements: {
            achievement1: {
                name: "Social Butterfly",
                isAchieved: false,
                image: "achievement1.png",
                position: { x: - 290, y: 240 }
            },
            achievement2: {
                name: "BerOtak Senku",
                isAchieved: false,
                image: "achievement2.png",
                position: { x: 0, y: 240 }
            },
            achievement3: {
                name: "Third Achievement",
                isAchieved: false,
                image: "achievement3.png",
                position: { x: 290, y: 240 }
            },
            achievement4: {
                name: "Fourth Achievement",
                isAchieved: false,
                image: "achievement4.png",
                position: { x:  - 290, y: 310 }
            },
            achievement5: {
                name: "Fifth Achievement",
                isAchieved: false,
                image: "achievement5.png",
                position: { x: 0, y: 310 }
            },
            achievement6: {
                name: "Sixth Achievement",
                isAchieved: false,
                image: "achievement6.png",
                position: { x: 290, y: 310 }
            }
        },
        Items: {
            Kupon: {
                name: "Kupon RDK",
                image: "Kupon",
                quantity: 1,
                position: { x: 0, y: 460 }
            },
            MakananKucing: {
                name: "Makanan Kucing",
                image: "Makanan-Kucing",
                quantity: 1,
                position: { x: 90, y: 460 }
            },
            MakananRDK: {
                name: "Makanan",
                image: "Makanan-RDK",
                quantity: 1,
                position: { x: 180, y: 460 }
            },
            Uang: {
                name: "Uang",
                image: "Uang",
                quantity: 1,
                position: { x: 270, y: 460 }
            },
        },
        animations: [
            {
                key: 'walk-down',
                frames: ["prdepan1-walk", "prdepan2-walk"],
                frameRate: 2,
                repeat: -1
            },
            {
                key: 'walk-up',
                frames: ["prbelakang1-walk", "prbelakang2-walk"],
                frameRate: 2,
                repeat: -1
            },
            {
                key: 'walk-right',
                frames: ["prkanan1-walk", "prkanan2-walk"],
                frameRate: 2,
                repeat: -1
            },
            {
                key: 'walk-left',
                frames: ["prkiri1-walk", "prkiri2-walk"],
                frameRate: 2,
                repeat: -1
            },
            {
                key: 'idle-down',
                frames: ["prdepan1", "prdepan2"],
                frameRate: 2,
                repeat: -1
            },
            {
                key: 'idle-up',
                frames: ["prbelakang1", "prbelakang2"],
                frameRate: 2,
                repeat: -1
            },
            {
                key: 'idle-right',
                frames: ["prkanan1", "prkanan2"],
                frameRate: 2,
                repeat: -1
            },
            {
                key: 'idle-left',
                frames: ["prkiri1", "prkiri2"],
                frameRate: 2,
                repeat: -1
            }
        ],
        position: {x: 256, y: 445.33 },
        NpcInteraction: 0,
        profile: "prdepan1"
    },
]