function flatten(arr: any[]) {
  let result: any[] = [];
  arr.forEach(el => {
    if (Array.isArray(el)) {
      result = result.concat(flatten(el))
    } else {
      result = result.concat(el)
    }
  })
  return result;
}


// es6
function flatten1(arr: any[]) {
  while (arr.some(Array.isArray)) {
    arr = [].concat(...arr)
  }
  return arr
}

