class MyQueue {
  private stackIn: number[]
  private stackOut: number[]
  constructor() {
    this.stackIn = [];
    this.stackOut = [];
  }

  push(x: number): void {
    this.stackIn.push(x);
  }

  pop(): number {
    if (this.stackOut.length === 0) {
      while (this.stackIn.length > 0) {
        this.stackOut.push(this.stackIn.pop()!);
      }
    }
    return this.stackOut.pop()!;
  }

  peek(): number {
    let temp: number = this.pop();
    this.stackOut.push(temp);
    return temp;
  }

  empty(): boolean {
    return this.stackIn.length === 0 && this.stackOut.length === 0;
  }
}
