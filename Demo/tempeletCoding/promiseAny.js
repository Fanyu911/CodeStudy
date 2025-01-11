const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    rej(1);
  }, 500);
});
const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    rej(2);
  }, 1500);
});
const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    rej(3);
  }, 1000);
});

// Promise.any([p1, p2, p3]).then((list) => {
//   console.log(list);
// });
myPromise([p1, p2, p3]).then((list) => {
  console.log(list);
});

function myPromise(list) {
  return new Promise((resAll, rejAll) => {
    let count = 0;
    let errorList = [];
    list.forEach((p, index) => {
      Promise.resolve(p).then(
        (res) => {
          resAll(res);
        },
        (rej) => {
          count++;
          errorList.push(rej);
          if (count === list.length) rejAll(errorList);
        },
      );
    });
  });
}
