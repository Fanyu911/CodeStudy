Function.prototype.myBind = function (thisTag, ...args) {
  if (typeof this !== 'function') return new TypeError('is not a function');
  const fn = this;
  return function F(...args2) {
    return this instanceof F ? new fn(...args, ...args2) : fn.apply(thisTag, args.concat(args2));
  };
};

function Sum(a, b) {
  this.v = (this.v || 0) + a + b;
  return this;
}
const NewSum = Sum.myBind({ v: 1 }, 2);

// 方式一
NewSum(3); // 调用：{v: 6}
// 方式二
new NewSum(3); // 构造函数：{v: 5} 忽略 myBind 绑定this
