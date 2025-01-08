// 只对成功的做出相应 而race成功失败都响应
const myPromiseAny = (arr) => {
  return new Promise((resRace, rej) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
      if (current instanceof Promise) {
        current
          .then(() => {
            resRace();
          })
          .catch((err) => {
            count++;
          });

        if (count === arr.length) {
          rej();
        }
      }
    }
  });
};

const p1 = new Promise((res) => {
  setTimeout(() => {
    console.log('1s');
    res();
  }, 1000);
});
const p2 = new Promise((res) => {
  setTimeout(() => {
    console.log('2s');
    res();
  }, 2000);
});
const p3 = new Promise((res) => {
  setTimeout(() => {
    console.log('3s');
    res();
  }, 3000);
});

myPromiseAny([p1, p2, p3]).then((l) => {
  console.log(l);
});
