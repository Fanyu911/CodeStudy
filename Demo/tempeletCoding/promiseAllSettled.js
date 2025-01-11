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
const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    res(3);
  }, 1000);
});

Promise.allSettled([p1, p2, p3]).then((list) => {
  console.log(list);
});

function mySettled(list) {
  return new Promise((resAll, rejAll) => {
    let count = 0;
    let result = [];
    list.forEach((p, index) => {
      Promise.resolve(p).then(
        (res) => {
          count++;
          result[index] = { status: 'fulfilled', value: res };
          if (count === list.length) resAll(result);
        },
        (rej) => {
          count++;
          result[index] = { status: 'rejected', reason: rej };
          if (count === list.length) resAll(result);
        },
      );
    });
  });
}
