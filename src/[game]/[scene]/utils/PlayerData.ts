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
    frames: integer[];
    frameRate: number;
    repeat: number;
}

export interface PlayerData{
    name: string;
    Achievements: Dictinary<Achievement>;
    Items: Dictinary<Item>;
    animations: Animation[];
    position: {x: number, y: number};
    
}

export const PlayerDatas: PlayerData[] = [
    {
        name: "Player",
        Achievements: {
            achievement1: {
                name: "First Achievement",
                isAchieved: false,
                image: "achievement1.png",
                position: { x: - 290, y: 240 }
            },
            achievement2: {
                name: "Second Achievement",
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
                frames: [936, 937, 938, 939],
                frameRate: 4,
                repeat: -1
            },
            {
                key: 'walk-up',
                frames: [1014, 1015, 1016, 1017],
                frameRate: 4,
                repeat: -1
            },
            {
                key: 'walk-right',
                frames: [975, 976, 977, 978],
                frameRate: 4,
                repeat: -1
            },
            {
                key: 'walk-left',
                frames: [1053, 1054, 1055, 1056],
                frameRate: 4,
                repeat: -1
            },
            {
                key: 'idle-down',
                frames: [936],
                frameRate: 4,
                repeat: -1
            },
            {
                key: 'idle-up',
                frames: [1014],
                frameRate: 4,
                repeat: -1
            },
            {
                key: 'idle-right',
                frames: [975],
                frameRate: 4,
                repeat: -1
            },
            {
                key: 'idle-left',
                frames: [1053],
                frameRate: 4,
                repeat: -1
            }
        ],
        position: { x: 0, y: 0 },
    },
    {
        name: "Player",
        Achievements: {},
        Items: {},
        animations: [
            {
                key: 'walk-down',
                frames: [956, 957, 958, 959],
                frameRate: 4,
                repeat: -1
            },
            {
                key: 'walk-up',
                frames: [1034, 1035, 1036, 1037],
                frameRate: 4,
                repeat: -1
            },
            {
                key: 'walk-right',
                frames: [995, 996, 997, 998],
                frameRate: 4,
                repeat: -1
            },
            {
                key: 'walk-left',
                frames: [1073, 1074, 1075, 1076],
                frameRate: 4,
                repeat: -1
            },
            {
                key: 'idle-down',
                frames: [956],
                frameRate: 4,
                repeat: -1
            },
            {
                key: 'idle-up',
                frames: [1034],
                frameRate: 4,
                repeat: -1
            },
            {
                key: 'idle-right',
                frames: [995],
                frameRate: 4,
                repeat: -1
            },
            {
                key: 'idle-left',
                frames: [1073],
                frameRate: 4,
                repeat: -1
            }
        ],
        position: { x: 0, y: 0 }
    },
]