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
    }, 1000);
  })
}

interface Config {
  initSate: any,
  current?: number,
}

function combinePromises(config: Config, ...args: ((...p: any[]) => Promise<any>)[]) {
  const { initSate, current = args.length } = config
  return new Promise((resolve, reject) => {
    args.reduce(function combine(chain, asyncFunc, currentIndex) {
      const nextChain = chain.then((response) => {
        if (currentIndex === current - 1) {
          resolve(nextChain)
        }
        return asyncFunc(response)
      }, reject)
      return nextChain
    }, Promise.resolve(initSate))
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
// 采用组合函数 传入初始值和多个函数
combinePromises({
  initSate: 20,
}, single, double, Three)
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  })


