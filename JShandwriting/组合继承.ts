// @ts-nocheck
interface AnimalObj {
  name: string
  colors: string[]
  getName(): void
}

type Animal = {
  new(name: string): AnimalObj
}

// 原型链继承

function Animal(name?: string) {
  this.name = name
  this.colors = ['black', 'white']
}

Animal.prototype.getName = function () {
  console.log(this.name)
}

interface CatObj extends AnimalObj {
  age: number
}
// 组合继承
function Cat(name: string, age: number) {
  // 继承属性
  Animal.call(this, name)
  this.age = age
}
// 继承方法
Cat.prototype = new Animal()
// 修正constructor
Cat.prototype.constructor = Cat

const cat = new Cat('cat', 1) as CatObj
console.log(cat);
cat.getName()


