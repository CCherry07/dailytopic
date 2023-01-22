// 撤销与恢复
class Stack {
  private stack: any[] = [];
  private undoStack: any[] = [];

  push(item: any) {
    this.stack.push(item);
  }

  pop() {
    if (this.stack.length === 0) {
      throw new Error('Stack is empty');
    }
    const item = this.stack.pop();
    this.undoStack.push(item);
    return item;
  }

  undo() {
    if (this.undoStack.length === 0) {
      throw new Error('Undo stack is empty');
    }
    const item = this.undoStack.pop();
    this.stack.push(item);
  }

}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack.pop());
stack.undo();
console.log(stack.pop());
stack.undo();
console.log(stack.pop());
console.log(stack);


