// src/components/games/snake/SnakeGame.jsx
import { useEffect, useRef } from "react";
import Phaser from "phaser";
import SnakeScene from "./SnakeScene.js";
import MenuScene from "./MenuScene.js";
import GameOverScene from "./GameOverScene.js";
import { textColors } from "./colors.js";

export default function SnakeGame() {
  const gameContainerRef = useRef(null);

  useEffect(() => {

    const config = {
      type: Phaser.AUTO,
      width: 400,
      height: 400,
      backgroundColor: textColors.lightBlack,
      parent: gameContainerRef.current,
      scene: [MenuScene, SnakeScene, GameOverScene],
    };

    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  return (
    <div>
        <h1 className="text-4xl text-center font-bold mb-8 animate-fade-in m-0">Snake</h1>
        <div className="flex justify-center">
            <div ref={gameContainerRef} />
        </div>
    </div>
  );
}
