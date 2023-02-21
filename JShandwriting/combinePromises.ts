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

function combinePromises(initSate: any, ...args: ((...p: any[]) => Promise<any>)[]) {
  const firstState = typeof initSate === 'function' ? initSate() : initSate
  return new Promise((resolve, reject) => {
    args.reduce(function combine(chain, asyncFunc) {
      const nextChain = chain.then((response) => {
        return asyncFunc(response)
      }, reject)
      if (asyncFunc === args.at(-1)) {
        resolve(nextChain)
      }
      return nextChain
    }, Promise.resolve(firstState))
  })
}

combinePromises(20, single, double, Three)
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  })


