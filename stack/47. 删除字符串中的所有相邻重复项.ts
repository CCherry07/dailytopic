const removeDuplicates = (S: string): string => {
  const stack: string[] = []

  for (const c of S) {
    const prev = stack.pop() //栈顶元素
    if (c !== prev) { // 判断栈顶元素 与当前元素是否相等 不想等时，将弹出栈道元素以及当前元素 压栈
      stack.push(prev!)
      stack.push(c)
    }
    // 相等即不做操作
  }

  return stack.join('')
}


const str = "abbaca"

console.log(removeDuplicates(str));


