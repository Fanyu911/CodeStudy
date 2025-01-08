Function.prototype.myCall = function (thisPoint, ...params) {
  if (typeof this !== 'function') throw new Error('找不到方法');
  if (!thisPoint) thisPoint = globalThis;
  thisPoint.fun = this;
  const res = thisPoint.fun(...params);
  delete thisPoint.fun;
  return res;
};

function sum(a, b) {
  return this.v + a + b;
}

console.log(sum.myCall({ v: 1 }, 2, 3));
