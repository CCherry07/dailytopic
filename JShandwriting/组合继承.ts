// @ts-nocheck
export interface AnimalObj {
  name: string
  colors: string[]
  getName(): void
}

export type Animal = {
  new(name: string): AnimalObj
}

export function Animal(name?: string) {
  this.name = name
  this.colors = ['black', 'white']
}

Animal.prototype.getName = function () {
  console.log(this.name)
}

export interface CatObj extends AnimalObj {
  age: number
}
interface Cat extends Animal {
  new(name: string, age: number): CatObj
}
// 组合继承
function Cat(name: string, age: number) {
  // 继承属性
  Animal.call(this, name)
  this.age = age
}

// Cat.prototype = Animal.prototype // 只继承了Animal的原型的方法
Cat.prototype = new Animal() // 即继承了Animal的属性，又继承了Animal的方法
// 修正constructor
Cat.prototype.constructor = Cat

const cat = new Cat('cat', 1) as CatObj
console.log(cat);
cat.colors.push('yellow')
console.log(cat.colors);
cat.getName()


