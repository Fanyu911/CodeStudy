function compose(...args) {
  return (subArgs) => {
    // for(let i = args.length - 1; i >= 0; i--) {
    //   res = args[i](res);
    // }
    return args.reverse().reduce((acc, func, index) => {
      return func(acc);
    }, subArgs);
  };
}

function compose(...funs) {
  return function (args) {
    return funs.reverse().reduce((val, fun) => fun(val), args);
  };
}
function double(x) {
  return x * 2;
}

function addTen(x) {
  return x + 10;
}

function square(x) {
  return x ** 2;
}
// 使用基础版本的Compose函数
const composedFunction1 = compose(double, addTen, square);
const result1 = composedFunction1(3);
console.log(result1); // 输出: (2 * (3 ** 2) + 10) ** 2 = 256

// 使用基于reduce实现的Compose函数
const composedFunction2 = compose(double, addTen, square);
const result2 = composedFunction2(3);
console.log(result2); // 同样输出: 256
