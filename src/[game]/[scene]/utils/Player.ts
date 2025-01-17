import Direction, { tilesize } from "./const";

export class Player  {
    position: {x: number, y: number};
    speed: number;
    scene: Phaser.Scene;
    object: Phaser.Physics.Arcade.Sprite;
    sprite: number;
    lastDirection: number;
    isMoving: boolean = false;
    rectangle: Phaser.GameObjects.Rectangle;

    constructor(scene: Phaser.Scene, gender: string){
        this.position = {x: 3 * tilesize, y: 3 *tilesize};
        this.scene = scene;
        this.speed = 16;
        this.sprite = gender ==="Pria"? 936:956;
        this.lastDirection = Direction.DOWN;
        this.object =this.scene.physics.add.sprite(this.position.x, this.position.y, 'player' , this.sprite );


        this.scene.anims.create({
            key: 'walk-down',
            frames: this.scene.anims.generateFrameNumbers('player', {start: 936, end: 939}),
            frameRate: 4,
            repeat: -1
        });

        this.scene.anims.create({
            key: 'walk-up',
            frames: this.scene.anims.generateFrameNumbers('player', {start: 1014, end: 1017}),
            frameRate: 4,
            repeat: -1
        });

        this.scene.anims.create({
            key: 'walk-right',
            frames: this.scene.anims.generateFrameNumbers('player', {start: 975, end: 978}),
            frameRate: 4,
            repeat: -1
        });

        this.scene.anims.create({
            key: 'walk-left',
            frames: this.scene.anims.generateFrameNumbers('player', {start: 1053, end: 1056}),
            frameRate: 4,
            repeat: -1
        });

        this.scene.anims.create({
            key: 'idle-down',
            frames: [{key: 'player', frame: 936}],
            frameRate: 4,
            repeat: -1
        });
        
        this.scene.anims.create({
            key: 'idle-up',
            frames: [{key: 'player', frame: 1014}],
            frameRate: 4,
            repeat: -1
        });

        this.scene.anims.create({
            key: 'idle-right',
            frames: [{key: 'player', frame: 975}],
            frameRate: 4,
            repeat: -1
        });

        this.scene.anims.create({
            key: 'idle-left',
            frames: [{key: 'player', frame: 1053}],
            frameRate: 4,
            repeat: -1
        });

        this.object.play('walk-down');

        this.rectangle= this.scene.add.rectangle(this.position.x, this.position.y, 2, 2, 0x000000, 1);
        

    }

    move(direction: number[]){
        let velocityY = 0;
        let velocityX = 0;
        direction.forEach(element => {
            if(element === Direction.NONE){
                this.object.setVelocity(0,0);
                this.isMoving = false;
                return;
            }
            if(element === Direction.UP){
                velocityY -= this.speed;
                this.lastDirection = Direction.UP;
            }
            if(element === Direction.DOWN){
                velocityY += this.speed;
                this.lastDirection = Direction.DOWN;
            }
            if(element === Direction.LEFT){
                velocityX -= this.speed;
                this.lastDirection = Direction.LEFT;
            }
            if(element === Direction.RIGHT){
                velocityX += this.speed;
                this.lastDirection = Direction.RIGHT;
            }
        });


        if (velocityX !== 0 && velocityY !== 0) {
            velocityX *= Math.SQRT1_2;
            velocityY *= Math.SQRT1_2;
        }
        if (velocityX === 0 && velocityY === 0) {  
            this.object.setVelocity(0,0);
            return;
        }

        let positionX = this.object.x + velocityX;
        let positionY = this.object.y + velocityY;
        this.scene.physics.moveTo(this.object, positionX, positionY, 16*4);
        this.position = {x: positionX, y: positionY};

        this.isMoving = true;
    }

    animate(){
        if (this.isMoving){
            if (this.lastDirection === Direction.UP){
                this.object.play('walk-up', true);
            }
            if (this.lastDirection === Direction.DOWN){
                this.object.play('walk-down', true);
            }
            if (this.lastDirection === Direction.LEFT){
                this.object.play('walk-left', true);
            }
            if (this.lastDirection === Direction.RIGHT){
                this.object.play('walk-right', true);
            }
        }else{
            if (this.lastDirection === Direction.UP){
                this.object.play('idle-up', true);
            }
            if (this.lastDirection === Direction.DOWN){
                this.object.play('idle-down', true);
            }
            if (this.lastDirection === Direction.LEFT){
                this.object.play('idle-left', true);
            }
            if (this.lastDirection === Direction.RIGHT){
                this.object.play('idle-right', true);
            }}
    }

    PlayerInteraction(){
        if(this.lastDirection===Direction.UP){
            this.rectangle.y = this.object.y - 16;
            this.rectangle.x = this.object.x;
        }

        if(this.lastDirection===Direction.DOWN){
            this.rectangle.y = this.object.y + 16;
            this.rectangle.x = this.object.x;
        }

        if(this.lastDirection===Direction.LEFT){
            this.rectangle.y = this.object.y;
            this.rectangle.x = this.object.x - 16;
        }

        if(this.lastDirection===Direction.RIGHT){
            this.rectangle.y = this.object.y;
            this.rectangle.x = this.object.x + 16;
        }
    }

}