class CQueue {
  stackIn: number[]
  stackOut: number[]
  constructor() {
    this.stackIn = []
    this.stackOut = []
  }

  appendTail(value: number): void {
    this.stackIn.push(value)
  }

  deleteHead(): number {
    if (this.stackIn.length) {
      while (this.stackIn.length) {
        this.stackOut.push(this.stackIn.pop()!)
      }
    }

    let value = this.stackOut.pop() || -1

    while (this.stackOut.length) {
      this.stackIn.push(this.stackOut.pop()!)
    }

    return value

  }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
