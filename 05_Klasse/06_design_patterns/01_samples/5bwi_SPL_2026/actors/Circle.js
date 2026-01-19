export class Circle {
    constructor(sizeX, sizeY, movement) {
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.movement = movement;
        this.movement = movement;
    }
    update(deltaTime) {
        this.movement.update(deltaTime);
    }
    render(ctx) {
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(this.movement.getPosition().x, this.movement.getPosition().y, this.sizeX, 0, 2 * Math.PI);
        ctx.stroke();
    }
}
