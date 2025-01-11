Function.prototype.myCall = function (thisTag, ...args) {
  if (typeof this !== 'function') return new TypeError('is not a function');
  if (!thisTag) thisTag = Object.create(null);
  thisTag.fun = this; // 指向当前函数，因为this指向调用他的对象
  const res = thisTag.fun(...args);
  delete thisTag.fun;
  return res;
};

function sum(a, b) {
  return this.v + a + b;
}

console.log(sum.myCall({ v: 1 }, 2, 3));

// apply 改一下传参
