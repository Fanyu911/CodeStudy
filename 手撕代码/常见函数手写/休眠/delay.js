function delay(fun, time) {
  return new Promise((res) => {
    setTimeout(() => {
      res(fun());
    }, time);
  });
}
