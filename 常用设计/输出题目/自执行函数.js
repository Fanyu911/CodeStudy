var b = 10;
// 非匿名自执行函数
(function b() {
  b = 20;
  console.log(b);
})();
// 相当于const const b = function b() {b = 20;console.log(b);};
// 赋值常量会报错,无效

// 匿名自执行函数
(function () {
  b = 20;
  console.log(b);
})();
