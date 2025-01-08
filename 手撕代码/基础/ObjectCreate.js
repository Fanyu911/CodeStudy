const myCreate = (pram) => {
  const fn = function () {};
  fn.prototype = pram;
  fn.prototype.constructor = pram;
  return new fn();
};

const a = Object.create();
