class ExamRoom {
  nums: Array<number>
  n: number
  constructor(n: number) {
    this.n = n
    this.nums = []
  }

  seat(): number {
    if (this.nums.length > 1) {
      // 存在
      const sort = [...this.nums].sort((a, b) => b - a)
      console.log(sort, 'sort');

      const max = sort[0]
      const min = sort[1]
      const current = Math.floor((max + min) / 2)
      this.nums.push(current)
      return current
    } else if (this.nums.length === 1) {
      this.nums.push(this.n - 1)
      return this.n - 1
    } else {
      this.nums.push(0)
      return 0
    }
  }

  leave(p: number): void {
    const idx = this.nums.indexOf(p)
    if (idx !== -1) {
      // 找到目标位置 , 并移除
      this.nums.splice(idx, 1)
      console.log(this.nums);
    }
  }
}

const room = new ExamRoom(10)
console.log(room.seat())
console.log(room.seat())
console.log(room.seat())
console.log(room.seat())
console.log(room.leave(4))
console.log(room.seat())


/**
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = new ExamRoom(n)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */
