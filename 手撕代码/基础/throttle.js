function throttle(cb, wait) {
  let timer = null;
  return function () {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      time = null;
      cb.apply(this, arguments);
    }, wait);
  };
}
