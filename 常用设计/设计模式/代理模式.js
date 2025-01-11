const user = {
  name: 'kj',
  age: 23,
  // 明文定义密码
  password: '31218',
};

// 记录属性访问的次数
const counter = {};

const proxy = new Proxy(user, {
  get(target, p, receiver) {
    counter[p] = Number.isInteger(counter[p]) ? ++counter[p] : 1;
    if (p === 'password') {
      // 在获取密码的时候进行加密处理（伪加密啦）
      return target[p] + String(Math.random()).replace('0.', '');
    } else {
      return Reflect.get(target, p, receiver);
    }
  },
});

log(proxy.password); // 将会打印 31218xxx （xxx 为随机数值）
log(proxy.name); // log: kj
log(proxy.name); // log: kj

log(counter); // log: { password: 1, name: 2 }； name 访问了两次，password 访问了一次
