import { useEffect, useRef } from "react";
import Phaser from "phaser";
import { textColors } from "./colors.js";
import PongScene from "./PongScene.js";
// import MenuScene from "./MenuScene.js";

export default function PongGame() {
  const gameContainerRef = useRef(null);

  useEffect(() => {

    const config = {
      type: Phaser.AUTO,
      width: 400,
      height: 400,
      backgroundColor: textColors.lightBlack,
      parent: gameContainerRef.current,
      scene: [/*MenuScene ,*/PongScene],
    };

    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  return (
    <div className="animate-fade-in">
        <h1 className="text-4xl text-center font-bold mb-8 m-0">Pong</h1>
        <div className="flex justify-center">
            <div ref={gameContainerRef} />
        </div>
    </div>
  );
}
