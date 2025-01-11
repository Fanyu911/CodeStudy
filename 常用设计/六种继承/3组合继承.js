function Father(gender) {
  this.gender = gender;
}
Father.prototype.fun = () => {};

function Son(name, fatherParam) {
  Father.call(this, fatherParam); // 次数1
  this.name = name;
}
Son.prototype = new Father(); // 次数2
Son.prototype.constructor = Son;

const ins = new Son('Tom');

//✅ 优点
// 可以向父类构造函数传参,并且是私有属性不会被共享,解决1.原型链继承的问题
const ins2 = new Son('Tom', 'man');
// 子实例可以访问父类原型方法,解决2.构造函数继承的问题
ins.fun();

// 弊端
// 调用了两次父类构造函数（耗内存）
