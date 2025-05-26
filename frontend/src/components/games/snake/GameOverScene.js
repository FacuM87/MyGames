import Phaser from 'phaser';
import { textColors } from './colors.js';


export default class GameOverScene extends Phaser.Scene{
    constructor(){
        super('GameOverScene');
    }

    create() {
        this.add.text(120, 150, 'Game Over!', { fontSize: '24px', fill: textColors.red });
        this.add.text(80, 200, 'Presiona R para reiniciar', { fontSize: '16px', fill: textColors.white });

        this.input.keyboard.once('keydown-R', () => {
        this.scene.start('MenuScene');
    });
  }
}