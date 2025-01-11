var arr = [1, 3, 7, 4, 5, 2, 1, 2];

function mergerSort(arr) {
  if (arr.length < 2) return arr;
  var mid = Math.floor(arr.length / 2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid, arr.length);
  return merger(mergerSort(left), mergerSort(right));
}

function merger(left, right) {
  var result = [];
  //拿着左右两个数组不断遍历 ,往result放,多出来的拼接
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  //留下的肯定是最大的,所以直接拼接
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
}

console.log(mergerSort(arr));
