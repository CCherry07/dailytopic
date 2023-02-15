function createThunk(fn: Function, ...args: any[]) {
  return function (dispatch: any) {
    args.push(dispatch)
    return fn.apply(null, args)
  }
}


function getData(x: number, y: number, cb: (res: number) => void) {
  setTimeout(() => {
    cb(x + y)
  }, 1000)
}

const thunk = createThunk(getData, 1, 2)

thunk((res: number) => {
  console.log(res)
})


