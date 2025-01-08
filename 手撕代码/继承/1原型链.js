function Father() {
  this.age = '50';
  this.list = ['a', 'b', 'c'];
}
Father.prototype.fun = () => {};

function Son(name) {
  this.name = name;
}
Son.prototype = new Father();
Son.prototype.constructor = Son; // 修复constructor指向, 一般没有问题,但是有依赖它的地方可能会出问题

const ins = new Son('Tom');

// 弊端
// 全部子类公用一个原型对象
const son1 = new Son('1');
const son2 = new Son('2');

son1.list.push('d'); // 访问的是son1.prototype.list
console.log(son2.list); // ['a','b','c','d']

// 无法向父类构造函数传参 只能在Son.prototype = new Father('xxx') 里面加入参数
new Son('fatherParams');
