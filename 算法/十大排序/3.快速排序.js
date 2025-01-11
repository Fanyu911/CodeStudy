var arr = [1, 3, 7, 4, 4, 5, 2, 1, 2];

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var pivotIndex = Math.floor(arr.length / 2);
  // 取出
  var pivot = arr.splice(pivotIndex, 1)[0];
  // 左右两边存放
  var left = [];
  var right = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

// const quickSort = (arr) => {
//   if (arr.length <= 1) {
//       return arr;
//   }
//   const [pivot,...rest] = arr;
//   const left = rest.filter(item => item < pivot);
//   const right = rest.filter(item => item >= pivot);
//   return [...quickSort(left), pivot,...quickSort(right)];
// };

console.log(quickSort(arr));
