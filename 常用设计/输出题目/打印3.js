var obj = {
  2: 3,
  3: 4,
  length: 2,
  splice: Array.prototype.splice,
  push: Array.prototype.push, // 根据length赋值
};
obj.push(1);
obj.push(2);
console.log(obj);
