export class LeftMovement {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    update(deltaTime) {
        this.x -= deltaTime * 100;
    }
    getPosition() {
        return { x: this.x, y: this.y };
    }
}
