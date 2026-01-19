// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
class MyGame extends Game {
    constructor() {
        super(...arguments);
        this.x = 50;
        this.y = 250;
    }
    init() {
        console.log("Game started!");
    }
    update(deltaTime) {
        console.log("update:", deltaTime);
        this.x += 200 * deltaTime;
    }
    render(ctx) {
        // Draw rectangle
        ctx.fillStyle = "#FF66aa";
        ctx.fillRect(this.x, this.y, 60, 40);
    }
}
const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");
