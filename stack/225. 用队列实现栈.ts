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
      this.q.push(this.q.shift()!)
    }
    return this.q.shift()!
  }

  top(): number {
    const res = this.q.pop()
    this.q.push(res!)
    return res!
  }

  empty(): boolean {
    return !Boolean(this.q.length)
  }
}
