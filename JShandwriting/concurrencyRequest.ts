interface Options {
  max: number
  [key: string]: any
}
interface executorCallBack<S> {
  resolve: (value: S | PromiseLike<S>) => void,
  reject: (reason?: any) => void
}

const request = (options: { url: string }) => {
  return fetch(options.url).then(res => res.json())
}

//写类型 获取promise 的返回值
type PromiseType<T> = T extends Promise<infer P> ? P : T


const concurrencyRequest = <O extends Object, R = any>(request: (args: O) => Promise<R>, options: Options) => {
  const tasks: O[] = [] // task 队列
  const executorMap: WeakMap<O, executorCallBack<any>> = new WeakMap()
  let running = 0
  const max = options.max || tasks.length
  function next() {
    if (running >= max) return
    running++
    const opt = tasks.shift()!
    const { resolve, reject } = executorMap.get(opt)!
    return request(opt)
      .then(resolve, reject)
      .finally(() => {
        executorMap.delete(opt)
        running-- //不管失败还是成功running 都要--
        if (tasks.length) {
          next()
        }
      })
  }
  return <T extends R>(opt: O): Promise<T> => {
    return new Promise((resolve, reject) => {
      tasks.push(opt)
      executorMap.set(opt, { resolve, reject })
      next()
    })
  }
}


const run = concurrencyRequest(request, { max: 3 })
for (let i = 1; i <= 12; i++) {
  const url = `https://jsonplaceholder.typicode.com/todos/${i}`;
  run({ url }).then(res => {
    console.log('then', res);
  })
}


run({
  url: "url1"
}).then(res => {
  console.log('then', res.url);
})

// run({
//   url: "url2"
// }).then(res => {
//   console.log('then', res);
// }, err => {
//   console.log('err', err);
// })

// run({
//   url: "url3"
// }).then(res => {
//   console.log('then', res);
// }).catch(err => {
//   console.log('err', err);
// })

// run({
//   url: "url4"
// }).then(res => {
//   console.log('then', res);
// })
