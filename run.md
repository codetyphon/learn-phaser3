{docsify-updated}

键盘定义

```js
this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
```

动画定义
```js
this.anims.create({
                key: 's',
                frames: this.anims.generateFrameNumbers('player', { start: 0, end: 5, first: 0 }),
                frameRate: 20,
                repeat: -1
            })

            this.anims.create({
                key: 'd',
                frames: this.anims.generateFrameNumbers('player', { start: 6, end: 11, first: 0 }),
                frameRate: 20,
                repeat: -1
            })

            this.anims.create({
                key: 'w',
                frames: this.anims.generateFrameNumbers('player', { start: 12, end: 17, first: 0 }),
                frameRate: 20,
                repeat: -1
            })

            this.anims.create({
                key: 'a',
                frames: this.anims.generateFrameNumbers('player', { start: 18, end: 23, first: 0 }),
                frameRate: 20,
                repeat: -1
            })
```

方向控制
```js
if (this.keyW.isDown) {
                if (this.player.getData('status') != "w") {
                    this.player.setData('status', 'w')
                    this.player.play('w')
                    this.player.up()
                }
            }
            if (this.keyS.isDown) {
                if (this.player.getData('status') != "s") {
                    this.player.setData('status', 's')
                    this.player.play('s')
                    this.player.down()
                }
            }
            if (this.keyA.isDown) {
                if (this.player.getData('status') != "a") {
                    this.player.setData('status', 'a')
                    this.player.play('a')
                    this.player.left()
                }
            }
            if (this.keyD.isDown) {
                if (this.player.getData('status') != "d") {
                    this.player.setData('status', 'd')
                    this.player.play('d')
                    this.player.right()
                }
            }
            if (this.keyA.isUp && this.player.getData('status') == "a") {
                this.player.setData('status', 'stop')
                this.player.setVelocity(0, 0)
                this.player.anims.stop();
            }
            if (this.keyD.isUp && this.player.getData('status') == "d") {
                this.player.setData('status', 'stop')
                this.player.setVelocity(0, 0)
                this.player.anims.stop();
            }
            if (this.keyW.isUp && this.player.getData('status') == "w") {
                this.player.setData('status', 'stop')
                this.player.setVelocity(0, 0)
                this.player.anims.stop();
            }
            if (this.keyS.isUp && this.player.getData('status') == "s") {
                this.player.setData('status', 'stop')
                this.player.setVelocity(0, 0)
                this.player.anims.stop();
            }
```

Player
```js
class Player extends Phaser.Physics.Arcade.Sprite {
        constructor(scene) {
            super(scene, 400, 400, 'player');
            scene.add.existing(this);
            scene.physics.add.existing(this);
            //this.setScale(0.5);
            this.setBounce(0, 0);
            this.setCollideWorldBounds(true);
            this.speed = 300
        }
        up() {
            //this.setVelocity(0, -1 * this.speed)
        }
        down() {
            this.setVelocity(0, 1 * this.speed)
        }
        left() {
            this.setVelocity(-1 * this.speed, 0)
        }
        right() {
            this.setVelocity(1 * this.speed, 0)
        }
        update() {
        }
    }
```

>使用 A、D、W、S按键 让Player走起来！（如果按键没反应，需要用鼠标点击一下画布中的Player。）

```phaser
    class Player extends Phaser.Physics.Arcade.Sprite {
        constructor(scene) {
            super(scene, 400, 400, 'player');
            scene.add.existing(this);
            scene.physics.add.existing(this);
            //this.setScale(0.5);
            this.setBounce(0, 0);
            this.setCollideWorldBounds(true);
            this.speed = 300
        }
        up() {
            this.setVelocity(0, -1 * this.speed)
        }
        down() {
            this.setVelocity(0, 1 * this.speed)
        }
        left() {
            this.setVelocity(-1 * this.speed, 0)
        }
        right() {
            this.setVelocity(1 * this.speed, 0)
        }
        update() {
        }
    }
    class GameScene extends Phaser.Scene {
        constructor() {
            super("name");
        }
        preload() {
            this.load.setBaseURL('assets/images');
            this.load.spritesheet('player', 'spritesheets/trump.png', { frameWidth: 100, frameHeight: 100 });
        }
        create() {
            this.cameras.main.setBackgroundColor('rgba(255, 255, 255, 0.5)');
            this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
            this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
            this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
            this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
            this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

            this.anims.create({
                key: 's',
                frames: this.anims.generateFrameNumbers('player', { start: 0, end: 5, first: 0 }),
                frameRate: 20,
                repeat: -1
            })

            this.anims.create({
                key: 'd',
                frames: this.anims.generateFrameNumbers('player', { start: 6, end: 11, first: 0 }),
                frameRate: 20,
                repeat: -1
            })

            this.anims.create({
                key: 'w',
                frames: this.anims.generateFrameNumbers('player', { start: 12, end: 17, first: 0 }),
                frameRate: 20,
                repeat: -1
            })

            this.anims.create({
                key: 'a',
                frames: this.anims.generateFrameNumbers('player', { start: 18, end: 23, first: 0 }),
                frameRate: 20,
                repeat: -1
            })

            this.player = new Player(this)
            this.player.setPosition(75, 75)
        }
        update() {
            if (this.keyW.isDown) {
                if (this.player.getData('status') != "w") {
                    this.player.setData('status', 'w')
                    this.player.play('w')
                    this.player.up()
                }
            }
            if (this.keyS.isDown) {
                if (this.player.getData('status') != "s") {
                    this.player.setData('status', 's')
                    this.player.play('s')
                    this.player.down()
                }
            }
            if (this.keyA.isDown) {
                if (this.player.getData('status') != "a") {
                    this.player.setData('status', 'a')
                    this.player.play('a')
                    this.player.left()
                }
            }
            if (this.keyD.isDown) {
                if (this.player.getData('status') != "d") {
                    this.player.setData('status', 'd')
                    this.player.play('d')
                    this.player.right()
                }
            }
            if (this.keyA.isUp && this.player.getData('status') == "a") {
                this.player.setData('status', 'stop')
                this.player.setVelocity(0, 0)
                this.player.anims.stop();
            }
            if (this.keyD.isUp && this.player.getData('status') == "d") {
                this.player.setData('status', 'stop')
                this.player.setVelocity(0, 0)
                this.player.anims.stop();
            }
            if (this.keyW.isUp && this.player.getData('status') == "w") {
                this.player.setData('status', 'stop')
                this.player.setVelocity(0, 0)
                this.player.anims.stop();
            }
            if (this.keyS.isUp && this.player.getData('status') == "s") {
                this.player.setData('status', 'stop')
                this.player.setVelocity(0, 0)
                this.player.anims.stop();
            }
        }
    }
    var config = {
        //parent:"rundemo",
        type: Phaser.AUTO,
        canvas: document.getElementById('canvas'),
        width: 400,
        height: 400,
        parent: 'demo',
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { x:0,y:0 }
            }
        },
        scene: GameScene
    };

    var game = new Phaser.Game(config);
```