import { Actor } from "./Actor";

export class Rectangle implements Actor {
  constructor(
    private x: number,
    private y: number,
    private sizeX: number,
    private sizeY: number,
  ) {}

  update(deltaTime: number) {
    this.x += deltaTime * 100;
    this.y = Math.sin(this.x / 50) * 100 + 200;
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.sizeX, this.sizeY);
  }
}
