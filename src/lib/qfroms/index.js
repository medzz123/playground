// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.one = new Stack();
    this.two = new Stack();
  }

  add(record) {
    this.one.push(record);
  }

  remove() {
    while (this.one.peek()) {
      this.two.push(this.one.pop());
    }

    const pop = this.two.pop();

    while (this.two.peek()) {
      this.one.push(this.two.pop());
    }

    return pop;
  }

  peek() {
    while (this.one.peek()) {
      this.two.push(this.one.pop());
    }

    const peek = this.two.peek();

    while (this.two.peek()) {
      this.one.push(this.two.pop());
    }

    return peek;
  }
}

module.exports = Queue;
