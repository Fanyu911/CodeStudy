const Status = {
  Pending: '1',
  FulFilled: '2',
  Reject: '3',
};

class myPromise {
  constructor(fun) {
    this.status = Status.Pending;
    this.value = null;
    this.FulFilledCallBack = [];
    this.RejectCallBack = [];

    try {
      fun(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }

  resolve(val) {
    setTimeout(() => {
      if (this.status === Status.Pending) {
        this.status = Status.FulFilled;
        this.value = val;
        this.FulFilledCallBack.map((cb) => {
          cb(this.value);
        });
      }
    });
  }
  reject(val) {
    setTimeout(() => {
      if (this.status === Status.Pending) {
        this.status = Status.Reject;
        this.value = val;
        this.RejectCallBack.map((cb) => {
          cb(this.value);
        });
      }
    });
  }
  then(onFulFilled, onReject) {
    //TODO 链式回调 返回一个promise
    onFulFilled = typeof onFulFilled === 'function' ? onFulFilled : () => {};
    onReject = typeof onReject === 'function' ? onReject : () => {};
    if (this.status === Status.Pending) {
      this.FulFilledCallBack.push(onFulFilled);
      this.FulFilledCallBack.push(onReject);
    }

    if (this.status === Status.FulFilled) {
      setTimeout(() => {
        onFulFilled(this.value);
      });
    }
    if (this.status === Status.Reject) {
      setTimeout(() => {
        onReject(this.value);
      });
    }
  }
}

new myPromise((res, rej) => {
  console.log('1');
  setTimeout(() => {
    res('res');
    console.log('3');
  });
}).then(
  (resin) => {
    console.log('4');
    console.log('resin', resin);
  },
  (rejin) => {
    console.log('rejin', rejin);
  },
);
console.log('2');
