function flatten(arr: any[]) {
  var result: any[] = [];
  arr.forEach(el => {
    if (Array.isArray(el)) {
      result = result.concat(flatten(el))
    } else {
      result = result.concat(el)
    }
  })
  return result;
}
