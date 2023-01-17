// @ts-nocheck
Function.prototype.myCall = function (context, ...args) {
  const fn = Symbol('fn')
  context = context || window
  context[fn] = this
  let result = eval(context).fn(...args)
  delete context[fn]
  return result
}

function foo(...args) {
  console.log(this.name, args)
}

foo.myCall({ name: 'cherry' }, 'a', 'b', 'c')
