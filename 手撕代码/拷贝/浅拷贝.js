const shallowClone = (target) => {
  if (typeof target === 'object' && target !== null) {
    const cloneTarget = {};
    for (let prop in target) {
      if (target.hasOwnProperty(prop)) {
        cloneTarget[prop] = target[prop];
      }
    }
    return cloneTarget;
  } else {
    return target;
  }
};
let arr = [1, 2, 3];
let obj = { 1: 1, 2: 2 };
console.log(shallowClone(arr));
console.log(shallowClone(obj));
