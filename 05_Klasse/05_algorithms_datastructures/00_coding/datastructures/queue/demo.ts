import { Queue } from "./Queue.ts";

const a: Queue = new Queue();

a.enqueue(5);
a.enqueue(9);
a.enqueue(34);
a.enqueue(78);
console.log(a.size());
console.log(a.dequeue());
console.log(a.dequeue());
