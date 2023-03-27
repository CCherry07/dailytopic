class MyStack {
  q: Array<number>
  constructor() {
    this.q = []
  }

  push(x: number): void {
    this.q.push(x)
  }

  pop(): number {
    for (let i = 0, length = this.q.length - 1; i < length; i++) {
      this.q.push(this.q.shift()!) // 将最后一个元素，移动到第一位
    }
    return this.q.shift()! // 出队列第一个
  }

  top(): number {
    const res = this.pop()
    this.q.push(res!)
    return res!
  }

  empty(): boolean {
    return !Boolean(this.q.length)
  }
}

