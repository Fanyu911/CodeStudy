class Request {
  constructor(limit) {
    this.limit = limit;
    this.count = 0;
    this.queue = [];
    this.result = [];
  }
  addTask(tasks) {
    this.queue.push(...tasks);
    this.start();
  }
  execute() {
    if (this.queue.length === 0) {
      // 当前是最后一个任务打印
      if (this.count === 0) {
        console.log("所有请求结果：", this.result);
      }
      // 没用任务处理的时候退出
      return;
    }
    if (this.count >= this.limit) {
      return; // 为了对付临时有额外的execute调用
    }

    const url = this.queue.shift();
    this.count++;
    // 开始异步等待
    fetch(url).then((res) => {
      this.result.push(res);
      this.count--;
      this.execute();
    });
  }

  start() {
    // 开始同时,发起最大数量
    const startNum = Math.min(this.limit, this.queue.length);
    for (let i = 0; i < startNum; i++) {
      this.execute();
    }
  }
}

function fetch(url) {
  console.log("fetch:" + url);
  return new Promise((res) => {
    setTimeout(() => {
      res(url + "over");
    }, Math.random() * 2000);
  });
}

const controller = new Request(10);
controller.addTask(new Array(20).fill(0).map((c, i) => "url_" + i));
