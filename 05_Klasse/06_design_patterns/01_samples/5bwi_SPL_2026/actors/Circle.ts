import { Actor } from "./Actor.js";
import { SinusMovement } from "../movements/SinusMovement.js";
import { Movement } from "../movements/Movement.js";
export class Circle implements Actor {
  constructor(
    private sizeX: number,
    private sizeY: number,
    private movement: Movement,
  ) {
    this.movement = movement;
  }

  update(deltaTime: number) {
    this.movement.update(deltaTime);
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(
      this.movement.getPosition().x,
      this.movement.getPosition().y,
      this.sizeX,
      0,
      2 * Math.PI,
    );
    ctx.stroke();
  }
}
