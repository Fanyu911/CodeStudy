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

let test = (nums) => {
  console.log(nums);
};

const defun = debounce(test, 1000);

defun(123);
defun(234);
defun(345); // 345
