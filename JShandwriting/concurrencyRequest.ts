interface Options {
  max: number
  [key: string]: any
}
interface ExecutorCallBack<S> {
  resolve: (value: S | PromiseLike<S>) => void,
  reject: (reason?: any) => void
}

const request = (options: { url: string }) => {
  return fetch(options.url).then(res => res.json())
}

const concurrencyRequest = <P extends Object, R = any>(request: (args: P) => Promise<R>, options: Options) => {
  const tasks: P[] = [] // task 队列
  const executorMap: WeakMap<P, ExecutorCallBack<any>> = new WeakMap()
  let running = 0
  const max = options.max
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
  return <T extends R>(opt: P): Promise<T> => {
    return new Promise((resolve, reject) => {
      tasks.push(opt)
      executorMap.set(opt, { resolve, reject })
      if (running === 0) {
        next()
      }
    })
  }
}


const run = concurrencyRequest(request, { max: 3 })
for (let i = 1; i <= 12; i++) {
  const url = `https://jsonplaceholder.typicode.com/todos/${i}`;
  run({ url }).then(res => {
    console.log(res);
  })
}
// const executorCallBack: ExecutorCallBack<any> = {
//   resolve: null,
//   reject: null
// }
// function bar() {
//   request({ url: 'url1' }).then(executorCallBack.resolve, executorCallBack.reject)
// }
// function foo() {
//   return new Promise((resolve, reject) => {
//     executorCallBack.reject = reject
//     executorCallBack.resolve = resolve
//   })
// }

// foo().then()

// bar()


// run({
//   url: "url1"
// }).then(res => {
//   console.log('then', res.url);
// })

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
