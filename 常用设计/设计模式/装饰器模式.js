class Cellphone {
  create() {
    console.log('生成一个手机');
  }
}
class Decorator {
  constructor(cellphone) {
    this.cellphone = cellphone;
  }
  create() {
    this.cellphone.create();
    this.createShell(cellphone);
  }
  createShell() {
    console.log('生成手机壳');
  }
}
// 测试代码
let cellphone = new Cellphone();
cellphone.create();

console.log('------------');
let dec = new Decorator(cellphone);
dec.create();
