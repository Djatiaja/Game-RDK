import { Tilemaps } from "phaser";
import { Player } from "./Player";
import { PhaserNavMesh, PhaserNavMeshPlugin } from "phaser-navmesh/src";

export class Cat {
    scene: Phaser.Scene;
    player: Player;
    sprite: Phaser.Physics.Arcade.Sprite;
    navMesh: PhaserNavMesh;
    path: Phaser.Math.Vector2[] = [];
    speed: number = 32; // Speed of movement
    map: Tilemaps.Tilemap;

    constructor(scene: Phaser.Scene, player: Player, map: Tilemaps.Tilemap) {
        this.scene = scene;
        this.player = player;
        this.sprite = this.scene.physics.add.sprite(454, 44, 'BlackCat', 36).setScale(0.5);
        this.map = map;
        this.loadAnimations();
        this.create();
        this.sprite.setOrigin(0.5, 0.5); // Center anchor
        this.sprite.setBodySize(this.sprite.width * 0.5, this.sprite.height * 0.5);
    }

    create() {
        this.sprite.setImmovable(true);
        this.scene.physics.add.collider(this.player.object, this.sprite);
        this.sprite.setBodySize(this.sprite.width, this.sprite.height - 10, false);
        this.sprite.setOffset(0, 10);
        const navmeshObjectLayer = this.map.getObjectLayer('navmesh');

        if (navmeshObjectLayer) {
            // ✅ Get the boundaries object layer
            const boundariesLayer = this.map.getObjectLayer('Boundaries');
        
            if (!boundariesLayer) {
                console.warn("⚠️ Boundaries layer not found!");
            }
        
            // ✅ Create navmesh and pass obstacles
            this.navMesh = (this.scene as Phaser.Scene & { navMeshPlugin: PhaserNavMeshPlugin })
                .navMeshPlugin.buildMeshFromTiled("navmesh", navmeshObjectLayer, this.sprite.width/2, boundariesLayer);
            
            this.navMesh.debugDrawMesh();
        }



        
        this.sprite.play('blackLookingAroundDown', true);

        

        this.moving();

    }

    moveTo(targetX: number, targetY: number) {
        if (!this.navMesh) return;
    
        const start = new Phaser.Math.Vector2(this.sprite.x, this.sprite.y);
        const end = new Phaser.Math.Vector2(targetX, targetY);
    
        // ✅ Find the path
        const pathPoints = this.navMesh.findPath(start, end);
        if (!pathPoints || pathPoints.length === 0) {
            console.error("❌ Path not found!");
            return;
        }
    
        this.path = pathPoints.map(point => new Phaser.Math.Vector2(point.x, point.y));
        this.navMesh.debugDrawPath(this.path, 0xffd900);
    
        console.log("🐱 Path Points:", this.path);
    
        if (this.path.length > 0) {
            this.followPath();
        }
    }
    
    followPath() {
        if (this.path.length === 0) {
            this.sprite.play('blackLookingAroundDown', true);
            
            this.scene.time.delayedCall(10000, () => {
                this.moving();
            });
            return;
        }
    
        const nextPoint = this.path.shift(); 
        if (!nextPoint) return;
    
        console.log(`🚶 Moving to: X=${nextPoint.x}, Y=${nextPoint.y}`);
    
        const angle = Phaser.Math.Angle.Between(this.sprite.x, this.sprite.y, nextPoint.x, nextPoint.y);
        if (angle >= -Math.PI / 8 && angle <= Math.PI / 8) {
            this.sprite.play('blackCatWalkingRight', true);
        } else if (angle > Math.PI / 8 && angle < 3 * Math.PI / 8) {
            this.sprite.play('blackCatWalkingRightDown', true);
        } else if (angle >= 3 * Math.PI / 8 && angle <= 5 * Math.PI / 8) {
            this.sprite.play('blackCatWalkingDown', true);
        } else if (angle > 5 * Math.PI / 8 && angle < 7 * Math.PI / 8) {
            this.sprite.play('blackCatWalkingLeftDown', true);
        } else if (angle >= 7 * Math.PI / 8 || angle <= -7 * Math.PI / 8) {
            this.sprite.play('blackCatWalkingLeft', true);
        } else if (angle < -5 * Math.PI / 8 && angle > -7 * Math.PI / 8) {
            this.sprite.play('blackCatWalkingLeftUp', true);
        } else if (angle <= -3 * Math.PI / 8 && angle >= -5 * Math.PI / 8) {
            this.sprite.play('blackCatWalkingUp', true);
        } else {
            this.sprite.play('blackCatWalkingRightUp', true);
        }
    
        // ✅ Ensure duration is reasonable
        const duration = (Phaser.Math.Distance.Between(
            this.sprite.x, this.sprite.y, nextPoint.x, nextPoint.y
        ) / this.speed) * 1000; // Convert to milliseconds
    
        this.scene.tweens.add({
            targets: this.sprite,
            x: Math.round(nextPoint.x), // Round to nearest integer
            y: Math.round(nextPoint.y), // Round to nearest integer
            duration: duration,
            ease: "Linear",
            onUpdate: () => {
                // ✅ Snap to the exact target if close enough
                if (Phaser.Math.Distance.Between(this.sprite.x, this.sprite.y, nextPoint.x, nextPoint.y) < 2) {
                    this.sprite.setPosition(nextPoint.x, nextPoint.y);
                }
            },
            onComplete: () => {
                this.sprite.setPosition(nextPoint.x, nextPoint.y); // ✅ Prevent floating-point drift
                this.followPath();
            },
        });
    }
    

    loadAnimations()
    {
        this.scene.anims.create({
            key: 'blackLookingAroundDown',
            frames: this.scene.anims.generateFrameNumbers('BlackCat', { frames: [36, 37, 38,39,68] }),
            frameRate: 3,
            repeat: -1
        });

        this.scene.anims.create({
            key: 'blackLookingAroundRight',
            frames: this.scene.anims.generateFrameNumbers('BlackCat', { frames: [420,421, 422, 423, 452] }),
            frameRate: 3,
            repeat: -1
        });

        this.scene.anims.create({
            key: 'blackLookingAroundUp',
            frames: this.scene.anims.generateFrameNumbers('BlackCat', { frames: [292, 293, 294, 295, 324] }),
            frameRate: 3,
            repeat: -1
        });

        this.scene.anims.create({
            key: 'blackLookingAroundLeft',
            frames: this.scene.anims.generateFrameNumbers('BlackCat', { frames: [164, 165, 166, 167, 196] }),
            frameRate: 3,
            repeat: -1
        });

        this.scene.anims.create({
            key: 'blackCatLayingDownDown',
            frames: this.scene.anims.generateFrameNumbers('BlackCat', { frames: [40, 41, 42, 43, 72, 73,74,75] }),
            frameRate: 10,
            repeat: -1
        });

        this.scene.anims.create({
            key: 'blackCatLayingDownRight',
            frames: this.scene.anims.generateFrameNumbers('BlackCat', { frames: [424, 425, 426, 427, 456, 457, 458, 459] }),
            frameRate: 10,
            repeat: -1
        });

        this.scene.anims.create({
            key: 'blackCatLayingDownUp',
            frames: this.scene.anims.generateFrameNumbers('BlackCat', { frames: [296, 297, 298, 299, 328, 329, 330, 331] }),
            frameRate: 10,
            repeat: -1
        });

        this.scene.anims.create({
            key: 'blackCatLayingDownLeft',
            frames: this.scene.anims.generateFrameNumbers('BlackCat', { frames: [168, 169, 170, 171, 200, 201, 202, 203] }),
            frameRate: 10,
            repeat: -1
        });

        this.scene.anims.create({
            key: 'blackCatSitingDownDown',
            frames: this.scene.anims.generateFrameNumbers('BlackCat', { frames: [32, 33,34,35,64,65,66] }),
            frameRate: 10,
            repeat: -1
        });

        this.scene.anims.create({
            key: 'blackCatSitingDownRight',
            frames: this.scene.anims.generateFrameNumbers('BlackCat', { frames: [416, 417, 418, 419, 448, 449, 450, 451] }),
            frameRate: 10,
            repeat: -1
        });

        this.scene.anims.create({
            key: 'blackCatSitingDownUp',
            frames: this.scene.anims.generateFrameNumbers('BlackCat', { frames: [288, 289, 290, 291, 320, 321, 322, 323] }),
            frameRate: 10,
            repeat: -1
        });

        this.scene.anims.create({
            key: 'blackCatSitingDownLeft',
            frames: this.scene.anims.generateFrameNumbers('BlackCat', { frames: [160, 161, 162, 163, 192, 193, 194, 195] }),
            frameRate: 10,
            repeat: -1
        });

        this.scene.anims.create({
            key: 'blackCatWalkingDown',
            frames: this.scene.anims.generateFrameNumbers('BlackCat', { frames: [44,45,46,47] }),
            frameRate: 4,
            repeat: -1
        });

        this.scene.anims.create({
            key: 'blackCatWalkingLeftDown',
            frames: this.scene.anims.generateFrameNumbers('BlackCat', { frames: [108, 108,110,111] }),
            frameRate: 4,
            repeat: -1
        });



        this.scene.anims.create({
            key: 'blackCatWalkingRight',
            frames: this.scene.anims.generateFrameNumbers('BlackCat', { frames: [428,429,430,431] }),
            frameRate: 4,
            repeat: -1
        });

        this.scene.anims.create({
            key: 'blackCatWalkingRightDown',
            frames: this.scene.anims.generateFrameNumbers('BlackCat', { frames: [492,493,494,495] }),
            frameRate: 4,
            repeat: -1
        });

        this.scene.anims.create({
            key: 'blackCatWalkingRightUp',
            frames: this.scene.anims.generateFrameNumbers('BlackCat', { frames: [364,365.366,367] }),
            frameRate: 4,
            repeat: -1
        });



        this.scene.anims.create({
            key: 'blackCatWalkingUp',
            frames: this.scene.anims.generateFrameNumbers('BlackCat', { frames: [300,301,302,303] }),
            frameRate: 4,
            repeat: -1
        });

        this.scene.anims.create({
            key: 'blackCatWalkingLeftUp',
            frames: this.scene.anims.generateFrameNumbers('BlackCat', { frames: [236,237,238,239] }),
            frameRate: 4,
            repeat: -1
        });

        this.scene.anims.create({
            key: 'blackCatWalkingLeft',
            frames: this.scene.anims.generateFrameNumbers('BlackCat', { frames: [172,173,174,175] }),
            frameRate: 4,
            repeat: -1
        });

    }


    moving(){
        const objectLayer = this.map.getObjectLayer('navmesh');
        if (objectLayer && objectLayer.objects.length > 0) {
            const randomIndex = Phaser.Math.Between(0, objectLayer.objects.length - 1);
            const randomObject = objectLayer.objects[randomIndex];
            if (randomObject.x !== undefined && randomObject.y !== undefined && randomObject.width !== undefined && randomObject.height !== undefined) {
                var randomPoint = {
                    x: Phaser.Math.Between(randomObject.x, randomObject.x + randomObject.width),
                    y: Phaser.Math.Between(randomObject.y, randomObject.y + randomObject.height)
                };
                this.moveTo(randomPoint.x, randomPoint.y);
            }
        }


        
    }
}
