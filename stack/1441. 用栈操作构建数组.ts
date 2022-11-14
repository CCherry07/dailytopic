function buildArray(target: number[], n: number): string[] {
  const result: string[] = []
  let targetIdx = 0
  for (let i = 1; i <= n; i++) {
    if (targetIdx >= target.length) break
    if (i !== target[targetIdx]) {
      result.push("Push")
      result.push("Pop")
      continue
    } else {
      result.push("Push")
      targetIdx += 1
      continue
    }
  }
  return result
};

let target = [1, 3], n = 3

console.log(buildArray(target, n));

export { }
