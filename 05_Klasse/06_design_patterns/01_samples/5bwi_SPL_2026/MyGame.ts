// MyGame - Example implementation of Game interface
import { Actor } from "./actors/Actor.js";
import { Circle } from "./actors/Circle.js";
import { Rectangle } from "./actors/Rectangle.js";
import { Tree } from "./actors/Tree.js";
import { Game, GameFramework } from "./GameFramework.js";
import { LeftMovement } from "./movements/LeftMovement.js";
import { SinusMovement } from "./movements/SinusMovement.js";

class MyGame extends Game {
  // Always code against interfaces
  private actors: Actor[] = [];
  constructor() {
    super();
  }

  addActor(actor: Actor) {
    this.actors.push(actor);
  }
  init(): void {
    console.log("Game started!");
    const r1 = new Rectangle(0, 0, 10, 20);
    const r2 = new Rectangle(100, 0, 50, 50);
    const r3 = new Rectangle(100, 100, 50, 50);
    const c1 = new Circle(200, 200, new SinusMovement(100, 200));
    const t1 = new Tree(300, 300, 40, 60);
    const c2 = new Circle(200, 200, new LeftMovement(400, 200));
    this.addActor(r1);
    this.addActor(r2);
    this.addActor(r3);
    this.addActor(c1);
    this.addActor(t1);
    this.addActor(c2);
  }

  update(deltaTime: number): void {
    console.log("Inside update", deltaTime);
    for (const actor of this.actors) {
      actor.update(deltaTime);
    }
  }

  render(ctx: CanvasRenderingContext2D): void {
    console.log("in rendeers");
    // DRY. dont repeat yourself
    for (const actor of this.actors) {
      actor.render(ctx);
    }
  }
}

const game = new MyGame();

const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");
