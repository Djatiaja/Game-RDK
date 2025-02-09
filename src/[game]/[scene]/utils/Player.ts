import Direction, { tilesize } from "./const";
import { PlayerData, PlayerDatas } from "./PlayerData";

export class Player  {
    position: {x: number, y: number};
    speed: number;
    scene: Phaser.Scene;
    object: Phaser.Physics.Arcade.Sprite;
    lastDirection: number;
    isMoving: boolean = false;
    rectangle: Phaser.GameObjects.Rectangle;
    data : PlayerData

    constructor(scene: Phaser.Scene, gender: string){
        this.position = {x: 3 * tilesize, y: 3 *tilesize};
        this.scene = scene;
        this.speed = 11;
        this.data = gender === "Pria"?{ ...PlayerDatas[0]}:{...PlayerDatas[1]};
    
        this.lastDirection = Direction.DOWN;
        this.object =this.scene.physics.add.sprite(this.data.position.x, this.data.position.y, 'player' );

        this.setupAnimations();

        this.rectangle= this.scene.add.rectangle(this.data.position.x, this.data.position.y, 2, 2, 0x000000, 0);

        this.position = {x: this.data.position.x, y: this.data.position.y};
    
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
                velocityX = 0;
                this.lastDirection = Direction.UP;
            }
            if(element === Direction.DOWN){
                velocityY += this.speed;
                velocityX = 0;
                this.lastDirection = Direction.DOWN;
            }
            if(element === Direction.LEFT){
                velocityX -= this.speed;
                velocityY = 0;
                this.lastDirection = Direction.LEFT;
            }
            if(element === Direction.RIGHT){
                velocityX += this.speed;
                velocityY = 0;
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
        this.scene.physics.moveTo(this.object, positionX, positionY, 70);
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

    setupAnimations(){
        
        this.data.animations.forEach(animation => {
            this.scene.anims.create({
                key: animation.key,
                frames:[...animation.frames.map((frame: string) => ({key: frame}))],
                frameRate: animation.frameRate,
                repeat: animation.repeat
            });
        });

        this.object.play('walk-down');
    }

    setAchievements(achievement: string){
        this.data.Achievements[achievement].isAchieved = true;
    }
}