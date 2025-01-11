function myInstanceOf(ins, fun) {
  if (typeof ins != 'object') return false;
  // 获取要对比方法的原型
  const funProto = fun.prototype;
  // 获取ins原型对象
  let proto = Object.getPrototypeOf(ins);

  while (true) {
    if (proto === null) return false;
    if (proto === funProto) return true;
    proto = Object.getPrototypeOf(proto);
  }
}

//Test
console.log(myInstanceOf(new String('1'), String));
