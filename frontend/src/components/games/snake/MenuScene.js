import Phaser from 'phaser';
import { textColors } from './colors.js';


export default class MenuScene extends Phaser.Scene {
    constructor() {
        super('MenuScene');
    }

    create() {
        this.add.text(40, 200, 'Presione ENTER para comenzar', { fontSize: '20px', fill: textColors.white });

        this.input.keyboard.once('keydown-ENTER', () => {
        this.scene.start('SnakeScene');
    }); 
    }
}