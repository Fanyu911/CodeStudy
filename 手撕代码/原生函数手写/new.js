function myNew(constructor, ...param) {
  // 1 创建空对象
  // 或者 const obj = Object.create(constructor.prototype)
  const obj = {};
  // 2 obj.__proto__ = constructor.prototype 设置原型
  Object.setPrototypeOf(obj, constructor.prototype);
  // 3 调用
  const res = constructor.apply(obj, param);
  // 4 判断并且返回
  return res instanceof Object ? res : obj;
}

function A(a) {
  this.a = a;
  //   return { b : '' }; 可以返回一个对象
}
// 原始
new A("1");
// 新方法
myNew(A, "2");
