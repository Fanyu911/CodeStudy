async function asyncPool(poolLimit, iterable, iteratorFn) {
  // 用于保存所有异步请求
  const ret = [];
  // 用户保存正在进行的请求
  const executing = new Set();
  for (const item of iterable) {
    // 构造出请求 Promise
    const p = Promise.resolve().then(() => iteratorFn(item, iterable));
    ret.push(p);
    executing.add(p);
    // 请求执行结束后从正在进行的数组中移除
    const clean = () => executing.delete(p);
    p.then(clean).catch(clean);
    // 如果正在执行的请求数大于并发数，就使用 Promise.race 等待一个最快执行完的请求
    if (executing.size >= poolLimit) {
      await Promise.race(executing);
    }
  }
  // 返回所有结果
  return Promise.all(ret);
}

// 使用方法
const timeout = (i) =>
  new Promise((resolve) => setTimeout(() => resolve(i), i));

asyncPool(2, [1000, 5000, 3000, 2000], timeout).then((results) => {
  console.log(results);
});
