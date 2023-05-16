/**
 * 异步任务重试
 * @param task {(...args: any[]) => Promise<any>} 要执行的异步任务
 * @param times {number} 需要重试的次数，默认为 3 次
 */

interface Task<T> {
  (...args: any[]): Promise<T>
}

function retry<T = any>(task: Task<T>, times = 3) {
  let temp = times
  let resolve: (value: T) => void, reject: (err: unknown) => void;
  const run: Task<T> = function (...args) {
    return new Promise((_resolve, _reject) => {
      if (!resolve && !reject) {
        resolve = _resolve,
          reject = _reject
      }
      task(...args).then(resolve, (err) => {
        if (temp === 0) {
          reject(err)
        } else {
          temp -= 1
          run(...args)
        }
      })
    })
  }
  return run
}
