const myPromiseSettled = (arr) => {
  return new Promise((resolve, rej) => {
    let count = 0;
    let settledList = [];
    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
      if (current instanceof Promise) {
        // 完成即调用race的resolve
        current
          .then((res) => {
            count++;
            settledList[i] = { status: 'fulfilled', value: res };
            if (count == arr.length) resolve(settledList);
          })
          .catch((err) => {
            count++;
            settledList[i] = { status: 'rejected', value: err };
            if (count == arr.length) resolve(settledList);
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
const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    console.log('2s');
    rej('error');
  }, 2000);
});
const p3 = new Promise((res) => {
  setTimeout(() => {
    console.log('3s');
    res();
  }, 3000);
});

myPromiseSettled([p1, p2, p3]).then((l) => {
  console.log(l);
});
