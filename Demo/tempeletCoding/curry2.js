function curry(fun, ...args) {
  return function (...rest) {
    if (rest.length) {
      return curry(fun, ...args, ...rest);
    } else {
      return fun.apply(this, args);
    }
  };
}

// test
function add(...args) {
  //求和
  return args.reduce((a, b) => a + b);
}

const addCurry = curry(add);

console.log(addCurry(1)(2)(3)(4)()); // 10
console.log(addCurry(1, 2, 3)(4)()); // 10
// console.log(addCurry(1, 2, 3)); // 10
