import Phaser from "phaser";
import { shapeColors } from "./colors.js";

export default class PongScene extends Phaser.Scene {
    constructor() {
        super("PongScene");
    }

    init(){
        this.paddle1 = []
        this.paddle2 = []
        this.ball = null
        this.paddle1Direction = ''
        this.paddle2Direction = ''
        this.score1 = 0
        this.score2 = 0
        this.scoreText1 = null;
        this.scoreText2 = null;
    }

    create(){
        this.scoreText1 = this.add.text(30,20,`Score: ${this.score1}`)
        this.scoreText2 = this.add.text(290,20,`Score: ${this.score2}`)

        const paddleSegmentHeight = 10;
        const paddleWidth = 10;
        const paddleLength = 4;

        for (let i = 0; i<paddleLength; i++){
            this.paddle1.push(this.add.rectangle(10, 180 + (i * 10), paddleWidth, paddleSegmentHeight, shapeColors.white).setOrigin(0))
            this.paddle2.push(this.add.rectangle(380, 180 + (i * 10), paddleWidth, paddleSegmentHeight, shapeColors.white).setOrigin(0))
        }

        this.ball = this.add.rectangle(200,200,10,10,shapeColors.white)

        this.input.keyboard.on('keydown', this.handleInput, this)
        this.input.keyboard.on('keyup', this.handleInput, this)
    }

    handleInput(event){
        const key = event.key.toLowerCase();
        const isKeyDown = event.type === 'keydown';

        if (key === 'arrowup') {isKeyDown? this.paddle2Direction = 'UP' : this.paddle2Direction = '';}
        if (key === 'arrowdown') {isKeyDown? this.paddle2Direction = 'DOWN' : this.paddle2Direction = '';}

        if (key === 'w') {isKeyDown? this.paddle1Direction = 'UP' : this.paddle1Direction = '';}
        if (key === 's') {isKeyDown? this.paddle1Direction = 'DOWN' : this.paddle1Direction = '';}
    }

    movePaddles() {
        const paddleSpeed = 5;

        if (this.paddle1Direction === 'UP') {
            const topY = this.paddle1[0].y;
            if (topY - paddleSpeed >= 0){
                this.paddle1.forEach(segment => segment.y -= paddleSpeed);
            }
        } else if (this.paddle1Direction === 'DOWN') {
            const bottomY = this.paddle1[3].y;
            if (bottomY - paddleSpeed <= (this.game.config.height - 10*2)){
                this.paddle1.forEach(segment => segment.y += paddleSpeed);
            }
        }

        if (this.paddle2Direction === 'UP') {
            const topY = this.paddle2[0].y;
            if (topY - paddleSpeed >= 0) {
                this.paddle2.forEach(segment => segment.y -= paddleSpeed);
            }
        } else if (this.paddle2Direction === 'DOWN') {
            const bottomY = this.paddle2[3].y;
            if (bottomY - paddleSpeed <= (this.game.config.height - 10*2)) {
                this.paddle2.forEach(segment => segment.y += paddleSpeed);
            }
        }
    }

    moveBall(){
        // const ballSpeed = 2;
        
        if (this.ball.y < 0){
            console.log('bounce');
            
        } else if (this.ball.y >= 390){
            console.log('bounce'); 
        }
        
        if (this.ball.x < 0){
            this.score2++
            this.scoreText2.setText(`Score: ${this.score2}`)
            this.ball.x = 200
            this.ball.y = 200

        } else if (this.ball.x >= 390){
            this.score1++
            this.scoreText1.setText(`Score: ${this.score1}`)
            this.ball.x = 200
            this.ball.y = 200
        }
    }

    update(){
        this.movePaddles();
        this.moveBall();
    }
}