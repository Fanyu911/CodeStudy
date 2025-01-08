const myPromiseRace = (arr) => {
  return new Promise((resRace, rej) => {
    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
      if (current instanceof Promise) {
        // 谁先完成谁先调用
        current
          .then((res) => {
            resRace(res);
          })
          .catch((err) => {
            rej(err);
          });
      }
    }
  });
};

const p1 = new Promise((res) => {
  setTimeout(() => {
    console.log('1s');
    res(1);
  }, 1000);
});
const p2 = new Promise((res) => {
  setTimeout(() => {
    console.log('2s');
    res(2);
  }, 2000);
});
const p3 = new Promise((res) => {
  setTimeout(() => {
    console.log('3s');
    res(3);
  }, 3000);
});

myPromiseRace([p1, p2, p3]).then((l) => {
  console.log(l);
});
