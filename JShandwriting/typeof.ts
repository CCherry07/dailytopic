function MyTypeof(value: any): string {
  // Object.prototype.toString.call(value) 返回一个字符串，表示对象的类型
  // slice(8, -1) 从第8个字符开始截取到倒数第一个字符
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}


