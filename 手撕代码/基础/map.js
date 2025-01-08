Array.prototype.MyMap = function (cb, that) {
  let arr = this;
  let list = [];
  for (let i = 0; i < arr.length; i++) {
    list[i] = cb.call(that, arr[i]);
  }
  return list;
};

const a = [1, 2, 3].MyMap((i) => i * 2);
console.log(a);
