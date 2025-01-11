// 插入排序
function insertionSort(arr) {
  const len = arr.length;

  // 注意，i 从 1 开始
  for (let i = 1; i < len; i++) {
    let preIndex = i - 1;
    let current = arr[i];

    // 位置i之前，是已排好序的数字，while的作用是找到一个坑位，给当前数字current插入
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]; // 对大于current的值，往后移一位，给current的插入腾出位置
      preIndex--;
    }
    arr[preIndex + 1] = current;
  }

  return arr;
}

var a = [11, 2, 3, 445, 7, 32, 71, 8, 94];
console.log(insertionSort(a));
