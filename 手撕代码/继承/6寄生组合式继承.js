function Father(gender) {
  this.gender = gender;
}
Father.prototype.fun = () => {};

function Son(name, fatherParam) {
  Father.call(this, fatherParam);
  this.name = name;
}
function Daughter() {
  this.name = 'Amy';
}

// 方式一 不封装
Son.prototype = Object.create(Father.prototype);
Son.prototype.constructor = Son;
// 方式二 封装
function inherit(father, baby) {
  baby.prototype = Object.create(father.prototype);
  baby.prototype.constructor = baby;
}
inherit(Father, Son);
inherit(Father, Daughter);

Son.prototype.getFriends = function () {
  return this.friends;
};

// 优点
// 使用Object.create(father.prototype) 替换了new Father()
// 1. new Father() 有额外的性能消耗, 例如内部初始化的一下方法
// 2. 使用Object.create 则是new一个空的对象,没有这么多性能消耗
// 3. 结果上没有区别,只是性能上的区别
