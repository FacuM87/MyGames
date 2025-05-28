import Phaser from "phaser";
import { shapeColors } from "./colors.js";

export default class PongScene extends Phaser.Scene {
    constructor() {
        super("PongScene");
    }

    init(){
        this.pong1 = []
        this.pong2 = []
        this.ball = null
    }

    create(){

        const pongSegmentHeight = 10;
        const pongWidth = 10;
        const pongLength = 4;

        for (let i = 0; i<pongLength; i++){
            this.pong1.push(this.add.rectangle(10, 180 + (i * 10), pongWidth, pongSegmentHeight, shapeColors.white).setOrigin(0))
            this.pong2.push(this.add.rectangle(380, 180 + (i * 10), 10, 10, shapeColors.white).setOrigin(0))
        }

        this.ball = this.add.rectangle(200,200,10,10,shapeColors.white)
    }

    handleInput(){
        
    }

    update(){
        
    }
}