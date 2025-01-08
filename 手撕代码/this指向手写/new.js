function myNew(constructor, ...args) {
  const obj = Object.create(constructor.prototype);
  const res = constructor.apply(obj, args); // 构造函数返回对象
  return res instanceof Object ? res : obj;
}

function A(a) {
  this.a = a;
  //   return { b : '' }; 可以返回一个对象
}
// 原始
new A('1');
// 新方法
myNew(A, '2');
