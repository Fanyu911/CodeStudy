function countingSort(arr, min, max) {
  // 创建一个存储计数器的数组
  const counts = new Array(max - min + 1).fill(0);

  // 遍历输入数组并增加计数器
  for (let i = 0; i < arr.length; i++) {
    counts[arr[i] - min]++;
  }

  // 遍历计数器数组并更新输入数组
  let j = 0;
  for (let i = 0; i < counts.length; i++) {
    while (counts[i] > 0) {
      arr[j] = i + min;
      j++;
      counts[i]--;
    }
  }

  return arr;
}

// 示例用法
const unsortedArray = [9, 3, 1, 4, 6, 8, 7, 2, 5];
const sortedArray = countingSort(unsortedArray, 1, 9);

console.log(sortedArray);
