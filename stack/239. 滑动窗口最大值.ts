function maxSlidingWindow(nums: number[], k: number): number[] {
  const res: number[] = []
  const queue: number[] = []
  for (let i = 0, len = nums.length; i < len; i++) {
    // 剔除单调队列 前面的小于当前 num 的值
    const num = nums[i]
    // 保证队列单调递减
    while (queue.length && queue[queue.length - 1] < num) {
      queue.pop()
    }
    queue.push(num)

    const left = i - k + 1 // 左边界

    if (left >= 0) {
      res.push(queue[0]) // 队列头部就是最大值
      // 如果队列头部的值等于左边界的值，就把头部的值剔除
      if (queue[0] === nums[left]) {
        queue.shift()
      }
    }
  }
  return res
};
