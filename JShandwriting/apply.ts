// @ts-ignore
Function.prototype.myApply = function (context, args) {
  if (typeof this !== 'function' || this === null) {
    throw new TypeError('Error')
  }
  const fn = Symbol('fn')
  context = context || window
  context[fn] = this
  let result = context[fn](...args)
  delete context[fn]
  return result
}
