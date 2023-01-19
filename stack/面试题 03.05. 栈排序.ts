class SortedStack {
  stack: number[] = [];
  temp: number[] = [];
  constructor() {
    this.stack = [];
    this.temp = [];
  }

  push(val: number): void {
    while (this.stack.length && this.stack[this.stack.length - 1] < val) {
      this.temp.push(this.stack.pop()!); // ! 表示不为空  将栈顶元素 小于val的 弹出并压入辅助栈
    }
    this.stack.push(val); // 将val压入栈
    while (this.temp.length) {
      this.stack.push(this.temp.pop()!); // 将辅助栈的元素弹出并压入栈
    }
  }

  pop(): void {
    this.stack.pop();
  }

  peek(): number {
    return this.stack[this.stack.length - 1] || -1;
  }

  isEmpty(): boolean {
    return !this.stack.length;
  }
}

/**
 * Your SortedStack object will be instantiated and called as such:
 * var obj = new SortedStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.isEmpty()
 */
