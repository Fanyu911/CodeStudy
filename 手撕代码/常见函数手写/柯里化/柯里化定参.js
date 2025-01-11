function curry(fn) {
  return function curried(...arg) {
    if (arg.length >= fn.length) {
      return fn.apply(this, arg);
    } else {
      return function (...arg1) {
        return curried.apply(this, arg.concat(arg1));
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
