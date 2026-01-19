import { Movement } from "./Movement.js";

export class LeftMovement implements Movement {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  update(deltaTime: number) {
    this.x -= deltaTime * 100;
  }
  getPosition() {
    return { x: this.x, y: this.y };
  }
}
