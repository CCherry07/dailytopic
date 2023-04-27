function evalRPN(tokens: string[]): number {
  const stack: string[] = []
  const f = ['+', '-', '*', '/']
  for (let el of tokens) {
    if (!f.includes(el)) {
      stack.push(el)
    } else {
      const num1 = stack.pop()
      const num2 = stack.pop()
      let res = Math.trunc(eval(`${num2}${el}(${num1})`))
      stack.push(res.toString())
    }
  }
  return +stack.pop()!
};

console.log(evalRPN(["4", "-2", "/", "2", "-3", "-", "-"]));


