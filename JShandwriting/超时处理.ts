const useTimeOutWithRace = (outHandler: (msg: string) => void, handler: Promise<any>, time: number) => {
  let timer: any = null
  return Promise.race([
    handler,
    new Promise((resolve, reject) => {
      timer = setTimeout(() => {
        reject('isTimeOut')
        clearTimeout(timer)
      }, time)
    })
  ]).then((result) => {
    clearTimeout(timer)
    return result
  }, (msg) => {
    outHandler(msg)
  })
}

const useTimeOut = (outHandler: (msg: string) => void, handler: Promise<any>, time: number) => {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject('isTimeOut')
      clearTimeout(timer)
    }, time)
    handler.then((res) => {
      resolve(res)
      clearTimeout(timer)
    })
  }).catch((msg) => {
    outHandler(msg)
  })
}

// @ts-ignore
const getData = () => {
  return new Promise((res, err) => {
    setTimeout(() => {
      console.log('执行完毕');
      res('执行完毕')
    }, 2000)
  })
}

const outHandler = () => {
  console.log('timer out');
}
// @ts-ignore
useTimeOutWithRace(outHandler, getData(), 10000)
// useTimeOut(outHandler, getData(), 10000)
