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

function combinePromises(initSate: any, current: (number | ((...p: any[]) => Promise<any>)), ...args: ((...p: any[]) => Promise<any>)[]) {
  const firstState = typeof initSate === 'function' ? initSate() : initSate
  const secondCurrent = typeof current === 'function' ? (args.unshift(current), args.length) : current
  return new Promise((resolve, reject) => {
    args.reduce(function combine(chain, asyncFunc, currentIndex) {
      const nextChain = chain.then((response) => {
        if (currentIndex === secondCurrent - 1) {
          resolve(nextChain)
        }
        return asyncFunc(response)
      }, reject)
      return nextChain
    }, Promise.resolve(firstState))
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
combinePromises(20, 1, single, double, Three)
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  })


