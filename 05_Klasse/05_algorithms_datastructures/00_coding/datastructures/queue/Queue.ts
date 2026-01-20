import { Node } from "../Node.ts";

export class Queue {
    private firstNode: Node | null;
    private lastNode: Node | null;

    constructor() {
        this.firstNode = null;
        this.lastNode = null;
    }

    public enqueue(value: number): void {
        const newNode = new Node(value);
        if (this.lastNode === null) {
            this.firstNode = newNode;
            this.lastNode = newNode;
        } else {
            this.lastNode.setNext(newNode);
            this.lastNode = newNode;
        }
    }

    public dequeue(): number | null {
        if (this.firstNode === null) {
            return null; // Queue ist leer
        }
        const value = this.firstNode.getValue();
        this.firstNode = this.firstNode.getNext();
        if (this.firstNode === null) {
            this.lastNode = null; // Queue ist jetzt leer
        }
        return value;
    }

    public size(): number {
        let count = 0;
        let currentNode = this.firstNode;
        while (currentNode !== null) {
            count++;
            currentNode = currentNode.getNext();
        }
        return count;
    }
}
