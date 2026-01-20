interface List {
  add(value: number): void;
  remove(index: number): boolean;
}

class LinkedList implements List {
  add(value: number): void {
    throw new Error("Method not implemented.");
  }
  remove(index: number): boolean {
    throw new Error("Method not implemented.");
  }
}

class ArrayList implements List {
  add(value: number): void {
    throw new Error("Method not implemented.");
  }
  remove(index: number): boolean {
    throw new Error("Method not implemented.");
  }
}
