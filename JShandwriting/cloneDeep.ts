// @ts-nocheck
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

function isObject(target: any) {
  const type = typeof target
  return target !== null && (type === 'object' || type === 'function')
}
function getType(target: any) {
  return Object.prototype.toString.call(target);
}
function cloneDeep<T>(target: T, weakMap = new WeakMap<any>()): T {
  if (!isObject(target)) {
    return target;
  }
  // 解决循环引用
  if (weakMap.has(target)) {
    return weakMap.get(target)
  }
  let currant: any
  weakMap.set(target, currant)
  // clone 其他类型
  const type = getType(target)
  // Set
  if (type === '[object Set]') {
    currant = new Set()
    target.forEach((item: any) => {
      currant.add(cloneDeep(item, weakMap))
    })
    return currant
  }
  // Map
  if (type === '[object Map]') {
    currant = new Map()
    target.forEach((item: any, key: any) => {
      currant.set(key, cloneDeep(item, weakMap))
    })
    return currant
  }
  // clone 数组 和 对象
  currant = Array.isArray(target) ? [] : {}
  for (const key in target) {
    if (Object.prototype.hasOwnProperty.call(target, key)) {
      currant[key] = cloneDeep(target[key], weakMap)
    }
  }
  return currant
}
const newobj = cloneDeep(testobj)
newobj.address.city = '杭州'
console.log(testobj.address);


