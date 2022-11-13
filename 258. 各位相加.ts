function addDigits(num: number): number {
  function def(s: string) {
    if (s.length === 1) return Number(s)

    let r = 0
    for (let i of s) {
      r += Number(i)
    }
    return def(r.toString())
  }
  return def(num.toString())
};
