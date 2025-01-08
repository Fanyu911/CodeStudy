// 寄生式
const param = {
  gender: 'man',
  friends: ['1', '2', '3'],
};

function inherit(param) {
  const ins = Object.create(param);
  ins.getFriends = function () {
    return this.friends;
  };
  return ins;
}

const ins = inherit(param);

// 对比原型式只是封装了一下
// 引用属性依旧会被共享
ins.friends.push('4');
