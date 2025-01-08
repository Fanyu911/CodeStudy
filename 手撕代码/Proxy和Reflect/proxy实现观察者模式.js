const list = new Set();

const observer = (fn) => list.add(fn);
const observable = (obj) => new Proxy(obj, { set: setFun });

function setFun(target, key, value) {
  const result = Reflect.set(target, key, value);
  list.forEach((observerFun) => observerFun());
  return result;
}

const person = observable({
  name: 'Tom',
});

observer(() => {
  console.log('setting', person.name);
});

person.name = 'Hom';
