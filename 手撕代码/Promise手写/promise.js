const PENDING = 'pending';
const FULFILLED = 'fullfilled';
const REJECTED = 'rejected';

function myPromise(fn) {
  this.state = PENDING;
  this.value = null;
  const that = this;
  that.resolvedCallbacks = [];
  that.rejectedCallbacks = [];

  function resolve(val) {
    if (that.state == PENDING) {
      that.state = FULFILLED;
      that.value = val;
      that.resolvedCallbacks.map((cb) => {
        cb(that.value);
      });
    }
  }
  function reject(val) {
    if (that.state == PENDING) {
      that.state = REJECTED;
      that.value = val;
      that.rejectedCallbacks.map((cb) => {
        cb(that.value);
      });
    }
  }

  try {
    fn(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

myPromise.prototype.then = function (onFullfilled, onRejected) {
  const that = this;
  onFullfilled = typeof onFullfilled === 'function' ? onFullfilled : (v) => v;
  onRejected =
    typeof onRejected === 'function'
      ? onRejected
      : (r) => {
          throw r;
        };

  if (that.state === PENDING) {
    that.resolvedCallbacks.push(onFullfilled);
    that.resolvedCallbacks.push(onRejected);
  }
  if (that.state === FULFILLED) {
    onFullfilled(that.value);
  }
  if (that.state === REJECTED) {
    onRejected(that.value);
  }
};

//验证   ok ok
let p = new myPromise((resolve, reject) => {
  // reject('fail')
  resolve('ok');
});

p.then(
  (res) => {
    console.log(res, 'ok');
  },
  (err) => {
    console.log(err, 'fail');
  },
);
