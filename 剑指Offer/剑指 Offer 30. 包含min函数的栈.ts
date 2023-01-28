class MinStack {
  stack: number[]
  minStack: number[]
  constructor() {
    this.minStack = []
    this.stack = []
  }

  push(x: number): void {
    this.stack.push(x)
    this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], x))
  }

  pop(): void {
    this.stack.pop()
    this.minStack.pop()
  }

  top(): number {
    return this.stack[this.minStack.length - 1]
  }

  min(): number {
    return this.minStack[this.minStack.length - 1]
  }
}

// 方法二 
class MinStack2 {
  stack: number[]
  minStack: number[]
  constructor() {
    this.minStack = []
    this.stack = []
  }

  push(x: number): void {
    this.stack.push(x)
    if (!this.minStack.length || this.minStack[this.minStack.length - 1] >= x)
      this.minStack.push(x)
  }

  pop(): void {
    const value = this.stack.pop()
    if (value === this.minStack[this.minStack.length - 1])
      this.minStack.pop()
  }

  top(): number {
    return this.stack[this.stack.length - 1]
  }

  min(): number {
    return this.minStack[this.minStack.length - 1]
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
