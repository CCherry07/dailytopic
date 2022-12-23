function finalValueAfterOperations(operations: string[]): number {
  let res = 0
  for (let item of operations) {
    if (item[1] === '+') {
      res += 1
    } else {
      res -= 1
    }
  }
  return res
};
