// 以最后一次触发为准
function debounce(fn, delay) {
  let timer = null;
  return function (...arg) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arg);
    }, delay);
  };
}
// 以第一次触发为准
function debounceFirst(func, delay) {
  let timer;
  return function (...args) {
    if (!timer) {
      func.apply(this, args);
      timer = setTimeout(() => (timer = null), delay);
    }
  };
}

let test = (nums) => {
  console.log(nums);
};

const defun = debounce(test, 1000);

defun(123);
defun(234);
defun(345); // 345
