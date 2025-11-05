export default class Stack {
  constructor() {
    this.item = [];
  }

  // O(1)
  push(value) {
    this.item.push(value); // <-- এখানে value পাস করতে হবে
  }

  // O(1)
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.item.pop();
  }

  // O(1)
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.item[this.item.length - 1];
  }

  // O(1)
  isEmpty() {
    return this.item.length === 0;
  }

  // O(n)
  print() {
    console.log(this.item);
  }
}

// Test
const stack = new Stack();

console.log(stack.peek());      // undefined (empty stack)
console.log(stack.isEmpty());   // true

stack.push(10);
stack.push(20);
stack.push(30);

stack.print();                  // [10, 20, 30]
console.log(stack.peek());      // 30
console.log(stack.pop());       // 30
console.log(stack.peek());      // 20
