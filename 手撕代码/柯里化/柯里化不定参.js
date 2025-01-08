function curry(fn) {
  return function () {
    // 创建闭包
    const allArgs = Array.from(arguments);

    // 收集参数
    adder = function () {
      allArgs.push(...arguments);
      return adder;
    };

    // toString隐式转换
    adder.toString = function () {
      return fn.call(this, ...allArgs);
    };

    return adder;
  };
}

// test
function add() {
  return Array.from(arguments).reduce((acc, curr) => acc + curr, 0);
}

const addCurry = curry(add);

console.log(+addCurry(1)(2)(3)); // 6
console.log(+addCurry(1, 2, 3)(4)); // 10
