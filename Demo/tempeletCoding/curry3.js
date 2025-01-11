function curry(fn) {
  return function (...arg) {
    const allArgs = Array.from(arg);

    var adder = function (...args) {
      allArgs.push(...args);
      return adder;
    };

    adder.end = function () {
      return fn.apply(this, allArgs);
    };

    return adder;
  };
}

// test
function add() {
  return Array.from(arguments).reduce((acc, curr) => acc + curr, 0);
}

const addCurry = curry(add);

console.log(addCurry(1)(2)(3).end()); // 6
console.log(addCurry(1, 2, 3)(4).end()); // 10
