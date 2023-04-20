const single = (res: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2 * res);
    }, 1000);
  });
}
const double = function (res: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject('error');
      resolve(res * 2);
    }, 500);
  })
}

const Three = function (num: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * 3);
    }, 3000);
  })
}

interface Config {
  initSate: any,
  current?: number,
}

function combinePromises<T = any>(config: Config, ...args: ((...p: any[]) => Promise<any>)[]) {
  const { initSate, current = args.length } = config
  return new Promise<T>((resolve, reject) => {
    // @ts-ignore
    args.reduce(function combine(chain, asyncFunc, currentIndex) {
      if (currentIndex === current) {
        resolve(chain)
        return // 这里必须要return 否则会继续执行下面的then
      }
      return  chain.then(asyncFunc, reject)
    }, Promise.resolve((typeof initSate === 'function' ? initSate() : initSate)))
  })
}

// 一般写法

// single(20).then((res: any) => {
//   double(res).then((res: any) => {
//     Three(res).then(res => {
//       console.log(res);
//     })
//   })
// })

// 采用组合函数 传入初始值和多个promise函数
combinePromises<number>({
  initSate: async () => 20, // 初始值
  current: 2 // 到几个promise函数就停止
}, single, double, Three)
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  })


