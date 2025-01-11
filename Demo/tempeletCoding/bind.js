Function.prototype.myBind = function (thisTag, ...arg1) {
  if (typeof this != 'function') throw new Error('error');
  let fun = this;
  return function (arg2) {
    return fun.apply(thisTag, [...arg1, arg2]);
  };
};
function Sum(a, b) {
  this.v = (this.v || 0) + a + b;
  console.log(this.v);

  return this;
}
const NewSum = Sum.myBind({ v: 1 }, 2);

// 方式一
NewSum(3); // 调用：{v: 6}
// 方式二
new NewSum(3); // 构造函数：{v: 5} 忽略 myBind 绑定this
