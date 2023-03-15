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
      next()
    })
  }
}


const run = concurrencyRequest(request, { max: 3 })
const urls = []
for (let i = 1; i <= 12; i++) {
  const url = `https://jsonplaceholder.typicode.com/todos/${i}`;
  urls.push(url)
}




Promise.all(urls.map(url => {
  return run({ url })
})).then(res => {
  console.log(res, 'res');
})

run({ url: 'https://jsonplaceholder.typicode.com/todos/20' }).then(res => {
  console.log(res, '20');
})



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
// function request1({ url }: { url: string }) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(url)
//     }, 1000)
//   })
// }
// const concurrencyRequest1 = <P extends Object, R = any>(request: (args: P) => Promise<R>, options: Options) => {
//   const tasks: P[] = [] // task 队列
//   const res: any[] = []
//   let running = 0
//   let count = 0
//   const executorCallBack = {
//     resolve: null,
//     reject: null
//   } as { resolve: any, reject: any }
//   const max = options.max
//   function next() {
//     if (running >= max) return
//     running++
//     const opt = tasks.shift()!
//     return request(opt)
//       .then(response => res.push(response), executorCallBack.reject)
//       .finally(() => {
//         running-- //不管失败还是成功running 都要--
//         if (tasks.length) {
//           next()
//         } else if (count === res.length && executorCallBack.resolve) {
//           executorCallBack.resolve(res)
//         }
//       })
//   }
//   //@ts-ignore
//   concurrencyRequest1.getRes = () => {
//     return new Promise((resolve, reject) => {
//       executorCallBack.reject = reject
//       executorCallBack.resolve = resolve
//     })
//   }
//   return (opt: P) => {
//     tasks.push(opt)
//     count++
//     next()
//   }
// }

// const run1 = concurrencyRequest1(request1, { max: 3 });

// ['url1', 'url2', 'url3', 'url4'].forEach(url => {
//   run1({ url })
// })
// @ts-ignore
// concurrencyRequest1.getRes().then(res => {
//   console.log(res, '1');
// })

// run1({ url: 'url5' })
// //@ts-ignore
// concurrencyRequest1.getRes().then(res => {
//   console.log(res, 'asdas');
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
