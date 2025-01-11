const num = [1, 2, 3];
const fun = (num) => {
  num = []; // 函数内部重新赋值时，它切断了与外部num的联系，开始指向一个新的空数组对象。
};
fun(num);
console.log(num);
ß;
