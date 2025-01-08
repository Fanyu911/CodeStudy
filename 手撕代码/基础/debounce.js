function debounce(cb, wait) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(() => {
      cb.apply(this, arguments);
    }, wait);
  };
}
