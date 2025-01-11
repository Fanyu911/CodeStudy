const p1 = new Promise((res, rej) => {
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
// const p3 = 'set';
// Promise.race([p1, p2, p3]).then((list) => {
//   console.log(list);
// });
promiseRace([p1, p2, p3]).then((list) => {
  console.log(list);
});

function promiseRace(list) {
  return new Promise((res, rej) => {
    for (let p of list) {
      Promise.resolve(p).then(
        (r) => {
          res(r);
        },
        (e) => {
          rej(e);
        },
      );
    }
  });
}
