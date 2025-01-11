// 原型式 -- 获得一份目标对象的浅拷贝
const fatherParams = {
  gender: 'man',
  friends: ['1', '2', '3'],
};
// 等同于Object.create()
function ObjectCreate(o) {
  function fn() {}
  fn.prototype = o;
  return new fn();
}

const ins1 = Object.create(fatherParams);
const ins2 = Object.create(fatherParams);
// 弊端
// 引用属性会被共享, 普通属性则不会
ins1.gender = 'girl';
ins1.friends.push('4');
console.log(ins2.gender);
console.log(ins2.friends);
// 子类新属性只能单独添加

// 和原型链继承的区别 (获得一份目标对象的浅拷贝vs公用一个父类实例)
// Object.create 方法调用之后,返回了一个new Obj的实例,使用浅拷贝赋值prototype,普通属性是拷贝出来的仅此一份,引用属性则是地址会被共享
// 原型链继承则是共用一个prototype, 所有子类的属性都会被共享, 只有子类构造器的属性是私有
