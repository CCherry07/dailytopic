
const testobj = {
  name: "cherry",
  age: 18,
  address: {
    city: "重庆",
  },
  fiends: ['kd'],
}
// @ts-ignore
testobj.target = testobj
function cloneDeep<T>(target: T, weakMap = new WeakMap<any>()): T {
  if (typeof target === 'object') {
    const currant: any = Array.isArray(target) ? [] : {}
    if (weakMap.has(target)) {
      return weakMap.get(target)
    }
    weakMap.set(target, currant)
    for (const key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        currant[key] = cloneDeep(target[key], weakMap)
      }
    }
    return currant
  } else {
    return target
  }
}
const newobj = cloneDeep(testobj)
newobj.address.city = '杭州'
console.log(testobj.address);

