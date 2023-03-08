interface Options {
  max: number
  [key: string]: any
}
interface executorCallBack<T> {
  resolve: (value: T | PromiseLike<T>) => void,
  reject: (reason?: any) => void
}

const request = (options: { url: string }) => {
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     if (options.url === 'url2' || options.url === 'url3') {
  //       reject(options.url)
  //     }
  //     resolve(options.url)
  //   }, 500)
  // })
  return fetch(options.url).then(res => res.json())
}

const concurrencyRequest = (request: (...args: any[]) => Promise<unknown>, options: Options) => {
  const tasks: any[] = [] // task 队列
  const executorMap: WeakMap<Record<string, any>, executorCallBack<any>> = new WeakMap()
  let running = 0
  const max = options.max
  function next() {
    if (!tasks.length || running >= max) return
    running++
    const opt = tasks.shift()
    const { resolve, reject } = executorMap.get(opt)!
    return request(opt).then(resolve, reject).finally(() => {
      executorMap.delete(opt)
      running-- //不管失败还是成功running 都要--
      if (tasks.length) {
        next()
      }
    })
  }
  return <T>(opt: Record<string, any>): Promise<T> => {
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


// run<{ url: string }>({
//   url: "url1"
// }).then(res => {
//   console.log('then', res);
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
