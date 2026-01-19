export class SinusMovement {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    update(deltaTime) {
        this.x += deltaTime * 100;
        this.y = Math.sin(this.x / 50) * 100 + 200;
    }
    getPosition() {
        return { x: this.x, y: this.y };
    }
}
