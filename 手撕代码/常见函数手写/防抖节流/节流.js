function throttle(fn, interval) {
  let timer = null;
  return function (...arg) {
    if (timer) return;
    timer = setTimeout(() => {
      timer = null;
      fn, apply(this, arg);
    }, interval);
  };
}
