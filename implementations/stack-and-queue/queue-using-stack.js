class QueueUsingStack {
  constructor() {
    this.first = [];
    this.last = [];
  }

  enqueue(value) {
    const length = this.first.length;

    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }

    this.last.push(value);
    return this;
  }

  dequeue() {
    const length = this.last.length;

    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }

    this.first.pop();
    return this;
  }

  peek() {
    if (this.first.length > 0) {
      return this.first[this.first.length - 1];
    }

    return this.last[0];
  }
}

const myQueue = new QueueUsingStack();
console.log(myQueue.peek);
console.log(myQueue.enqueue("Okan"));
console.log(myQueue.enqueue("Zübeyde"));
console.log(myQueue.enqueue("Turna"));
console.log(myQueue.dequeue());
console.log(myQueue.enqueue('Fatih'));