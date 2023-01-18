// @ts-nocheck
Function.prototype.myBind = function (context, ...args) {
  const fn = Symbol('fn')
  context = context || window
  context[fn] = this

  return function (...args2) {
    let result = context[fn](...args, ...args2) // 执行函数 传入参数 
    delete context[fn]
    return result
  }
}

function foo(...args) {
  console.log(this.name, args)
}

const bar = foo.myBind({ name: 'cherry' }, 'a', 'b', 'c')
bar('d', 'e', 'f')
