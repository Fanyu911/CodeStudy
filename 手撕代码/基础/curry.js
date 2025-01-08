function curry(fun) {
  return function curried(...arg) {
    const n = fun.length;
    if (arg.length >= n) {
      return fun.apply(this, arg);
    } else {
      return function (...arg1) {
        return curried.apply(this, [...arg, ...arg1]);
      };
    }
  };
}

// test
function add(a, b, c, d) {
  return a + b + c + d;
}

const addCurry = curry(add);

console.log(addCurry(1)(2)(3)(4)); // 10
console.log(addCurry(1, 2, 3)(4)); // 10
console.log(addCurry(1, 2, 3)(4)); // 10
