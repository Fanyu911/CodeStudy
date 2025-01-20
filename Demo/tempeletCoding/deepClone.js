const deepClone = function (target, map = new Map()) {
  if (!target || typeof target != "object") return target;
  if (map.get(target)) return map.get(target);
  let cloneTarget = Array.isArray(target) ? [] : {};
  map.set(target, cloneTarget);
  for (let prop in target) {
    if (target.hasOwnProperty(prop)) {
      cloneTarget[prop] = deepClone(target[i]);
    }
  }
  return cloneTarget;
};
