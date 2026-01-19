export class CircleSin {
    constructor(x, y, sizeX, sizeY) {
        this.x = x;
        this.y = y;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
    }
    update(deltaTime) {
        this.x += deltaTime * 100;
        this.y = Math.sin(this.x / 50) * 100 + 200;
    }
    render(ctx) {
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.sizeX, 0, 2 * Math.PI);
        ctx.stroke();
    }
}
