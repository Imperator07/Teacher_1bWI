// MyGame - Example implementation of Game interface

class MyGame extends Game {
  x = 50;
  y = 0;

  init() {
    console.log("Game started!");
  }

  update(deltaTime) {
    this.x += 100 * deltaTime;
    this.y += 50 * deltaTime;
    console.log(deltaTime);
  }

  render(ctx) {
    ctx.fillStyle = "#FF66aa";
    ctx.fillRect(this.x, this.y, 50, 50);
    ctx.beginPath();
    ctx.ellipse(100 + this.x, 100, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
    ctx.stroke();
  }
}

const game = new MyGame();

const framework = new GameFramework(game, 800, 600);
framework.start();
