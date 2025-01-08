const p1 = new Promise((res) => {
  setTimeout(() => {
    res(1);
  }, 500);
});
const p2 = new Promise((res) => {
  setTimeout(() => {
    res(2);
  }, 1500);
});
const p3 = new Promise((res) => {
  setTimeout(() => {
    res(3);
  }, 1000);
});

// Promise.all([p1, p2, p3]).then((list) => {
//   console.log(list);
// });s
myPromise([p1, p2, p3]).then((list) => {
  console.log(list);
});

function myPromise(list) {
  return new Promise((resAll, rejAll) => {
    let count = 0;
    let result = [];
    list.forEach((p, index) => {
      Promise.resolve(p).then(
        (res) => {
          console.log('res', res);
          count++;
          result[index] = res;
          if (count === list.length) resAll(result);
        },
        (rej) => {
          rejAll(rej);
        },
      );
    });
  });
}
