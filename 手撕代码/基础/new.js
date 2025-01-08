function myNew(constructor, ...param) {
  // 1
  const obj = {};
  // 2 obj.__proto__ = constructor.prototype
  Object.setPrototypeOf(obj, constructor.prototype);
  // 3
  const res = constructor.apply(obj, param);
  // 4
  return res instanceof Object ? res : obj;
}
console.log(myNew(Array, 1, 2, 3));
