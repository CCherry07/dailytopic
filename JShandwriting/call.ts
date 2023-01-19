// @ts-nocheck
Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== 'function' || this === null) {
    throw new TypeError('Error')
  }
  const fn = Symbol('fn') // 用Symbol保证fn不会重复
  context = typeof context === 'object' ? context : new Object(context) // 如果context不是对象，就将其转换为对象
  context[fn] = this // 将函数挂载到context上
  let result = context[fn](...args) // 执行函数
  delete context[fn] // 删除函数
  return result // 返回函数执行结果
}

function foo(...args) {
  console.log(this, args)
}

foo.myCall(undefined, 'a', 'b', 'c')
