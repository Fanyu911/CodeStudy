Promise.prototype.myThen = function (onFulfilled, onRejected) {
  let promise2;

  // 如果 onFulfilled 是函数
  if (typeof onFulfilled === 'function') {
    // 创建一个新的 Promise
    promise2 = new Promise((resolve, reject) => {
      // 当当前 Promise 成功时
      if (this.status === 'fulfilled') {
        setTimeout(() => {
          try {
            const x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }
    });
  }

  // 如果 onRejected 是函数
  if (typeof onRejected === 'function') {
    // 创建一个新的 Promise
    promise2 = new Promise((resolve, reject) => {
      // 当当前 Promise 失败时
      if (this.status === 'rejected') {
        setTimeout(() => {
          try {
            const x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }
    });
  }

  // 如果 onFulfilled 和 onRejected 都不是函数
  if (!onFulfilled && !onRejected) {
    promise2 = this;
  }

  return promise2;
};

function resolvePromise(promise2, x, resolve, reject) {
  // 如果 x 是一个 Promise
  if (x instanceof Promise) {
    x.then(
      (y) => {
        resolve(y);
      },
      (err) => {
        reject(err);
      },
    );
  } else {
    // 如果 x 是一个普通值
    resolve(x);
  }
}
