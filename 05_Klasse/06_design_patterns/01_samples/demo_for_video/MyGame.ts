// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";

class MyGame extends Game {
  private x: number = 50;
  private y: number = 250;

  init(): void {
    console.log("Game started!");
  }

  update(deltaTime: number): void {
    console.log("update:", deltaTime);
    this.x += 200 * deltaTime;
  }

  render(ctx: CanvasRenderingContext2D): void {
    // Draw rectangle
    ctx.fillStyle = "#FF66aa";
    ctx.fillRect(this.x, this.y, 60, 40);
  }
}

const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");
