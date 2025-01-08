function Father(gender) {
  this.gender = gender;
}
Father.prototype.fun = () => {};

function Son(name, fatherParam) {
  Father.call(this, fatherParam);
  this.name = name;
}
const ins = new Son('Tom', 'man');

// ❌ 弊端
// 只有父类构造函数的属性 父类原型属性子类访问不到
ins.fun(); // error
