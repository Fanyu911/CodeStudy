Promise.prototype.myFinally = function (callback) {
  // 成功/失败都执行同一段
  return this.then(
    (value) => {
      return Promise.resolve(callback()).then(() => value);
    },
    (reason) =>
      Promise.resolve(callback()).then(() => {
        throw reason;
      }),
  );
};

const p1 = new Promise((res) => {
  setTimeout(() => {
    console.log('1s');
    res(123);
  }, 1000);
});
p1.finally((r) => {
  console.log('callback', r);
}).then((res) => {
  console.log('res', res);
});
