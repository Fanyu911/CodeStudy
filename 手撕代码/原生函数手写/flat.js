const obj = [1, 2, 4, [1, 33]];
function flat(obj) {
  let result = [];

  for (let item of obj) {
    if (Array.isArray(item)) {
      result = [...result, ...flat(item)];
    } else {
      result.push(item);
    }
  }
  return result;
}
console.log(flat(obj));
