import Phaser from 'phaser';
import { shapeColors } from './colors.js';

export default class SnakeScene extends Phaser.Scene {
  constructor() {
    super('SnakeScene');
  }

  init() {
    this.snake = [];
    this.food = null;
    this.direction = 'RIGHT';
    this.newDirection = 'RIGHT';
    this.moveTimer = 0;
    this.score = 0;
    this.scoreText = null;
  }

  create() {
    this.scoreText = this.add.text(20,20,`Score: ${this.score}`)

    this.snake = [];
    for (let i = 0; i < 3; i++) {
      this.snake.push(this.add.rectangle(160 - (i * 10), 160, 10, 10, shapeColors.green).setOrigin(0));
    }

    this.food = this.add.rectangle(this.getRandom(0, 390), this.getRandom(0, 390), 10, 10, shapeColors.red).setOrigin(0);

    this.input.keyboard.on('keydown', this.handleInput, this);
  }

  update(time) {
    if (time >= this.moveTimer) {
      this.moveSnake();
      this.moveTimer = time + 150;
    }
  }

  handleInput(event) {
    const key = event.key;
    if (key === 'ArrowUp' && this.direction !== 'DOWN') this.newDirection = 'UP';
    if (key === 'ArrowDown' && this.direction !== 'UP') this.newDirection = 'DOWN';
    if (key === 'ArrowLeft' && this.direction !== 'RIGHT') this.newDirection = 'LEFT';
    if (key === 'ArrowRight' && this.direction !== 'LEFT') this.newDirection = 'RIGHT';
  }

  moveSnake() {
    this.direction = this.newDirection;
    const head = this.snake[0];
    const newHead = this.add.rectangle(head.x, head.y, 10, 10, shapeColors.green).setOrigin(0);

    if (this.direction === 'RIGHT') newHead.x += 10;
    if (this.direction === 'LEFT') newHead.x -= 10;
    if (this.direction === 'UP') newHead.y -= 10;
    if (this.direction === 'DOWN') newHead.y += 10;

    this.snake.unshift(newHead);

    if (Phaser.Geom.Intersects.RectangleToRectangle(newHead.getBounds(), this.food.getBounds())) {
      this.score += 100
      this.scoreText.setText(`Score: ${this.score}`)
      this.food.x = this.getRandom(0, 390);
      this.food.y = this.getRandom(0, 390);
    } else {
      const tail = this.snake.pop();
      tail.destroy();
    }

    if ( newHead.x < 0 || newHead.x >= 400 || newHead.y < 0 || newHead.y >= 400 || this.snake.slice(1).some(seg => seg.x === newHead.x && seg.y === newHead.y)){
      this.scene.start('GameOverScene',{finalScore: this.score});
    }
  }

  getRandom(min, max) {
    return Math.floor((Math.random() * (max - min)) / 10) * 10 + min;
  }
}
