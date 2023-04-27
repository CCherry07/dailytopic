class MovingAverage {
  size:number
  container:number[]
  sum:number
  constructor(size: number) {
      this.size = size
      this.container = []
      this.sum = 0
  }
  next(val: number): number {
      this.container.push(val)
      this.sum += val
      if(this.container.length > this.size){
        this.sum -= this.container.shift() || 0
      }
      return this.sum / this.container.length
  }
}

/**
* Your MovingAverage object will be instantiated and called as such:
* var obj = new MovingAverage(size)
* var param_1 = obj.next(val)
*/
