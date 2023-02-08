
interface Add {
  (): number
  (...args: number[]): Add
}

function add(...args: number[]): Add {
  const as = args
  function reduce(...args: number[]) {
    if (!args.length) {
      return as.reduce((res, item) => res + item)
    } else {
      as.push(...args)
      return reduce
    }
  }
  return reduce as Add
}


console.log(add(1)(2, 3, 5)(1)());

