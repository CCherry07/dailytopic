// 寄生组合继承
// @ts-nocheck
import { CatObj } from "./组合继承"

function Animal(name?: string) {
  this.name = name
  this.colors = ['black', 'white']
}

Animal.prototype.getName = function () {
  console.log(this.name)
}


function Cat(name: string, age: number) {
  this.name = name
  this.age = age
}

// 兼容 es5



// const proto = createObj(Animal.prototype)
// proto.constructor = Cat
// Cat.prototype = proto

function create(parent) {
  const createObj = (obj: any) => {
    const F = function () { }
    F.prototype = obj
    return new F()
  }
  return createObj(parent.prototype)
}

if (typeof Object.create !== 'function') {
  Object.create = create
}

// Cat.prototype = Object.create(new Animal()) // 即继承了Animal的属性，又继承了Animal的方法
Cat.prototype = Object.create(Animal.prototype) // 只继承了Animal的原型的方法
Cat.prototype.constructor = Cat
// Cat.prototype = new Animal() // 即继承了Animal的属性，又继承了Animal的方法 ,缺点 会调用两次Animal

Cat.prototype.getAge = function () {
  console.log(this.age)
}
const cat = new Cat('cat', 1) as CatObj
console.log(cat);
console.log(cat.colors);
console.log(cat.__proto__);

cat.getName()
cat.getAge()



