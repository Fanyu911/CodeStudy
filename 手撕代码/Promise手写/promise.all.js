const myPromiseAll = (arr) => {
  return new Promise((resAll, rej) => {
    let count = 0; // 数组记录当前完成数
    let resultList = [];

    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
      if (current instanceof Promise) {
        current
          .then((res) => {
            resultList[i] = res;
            count++;
            if (count === arr.length) {
              resAll(resultList);
            }
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

myPromiseAll([p1, p2, p3]).then((l) => {
  console.log(l);
});
