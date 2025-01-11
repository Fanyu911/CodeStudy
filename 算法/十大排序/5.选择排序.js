const selectionSort = (array) => {
  const len = array.length;
  let minIndex, temp;
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[minIndex]) {
        // 寻找最小的数
        minIndex = j; // 将最小数的索引保存
      }
    }
    temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return array;
};

var arr = [3, 1, 7, 4, 5, 2, 1, 2];

console.log(selectionSort(arr));
