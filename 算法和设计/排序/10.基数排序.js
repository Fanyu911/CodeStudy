// 基数排序算法
function radixSort(arr) {
  // 获取数组中最大的数字，确定需要遍历几次
  const maxNum = Math.max(...arr);
  const maxLength = maxNum.toString().length;

  // 初始化桶数组
  const bucket = Array.from({ length: 10 }, () => []);

  for (let i = 0; i < maxLength; i++) {
    // 根据当前位数的值放入对应的桶中
    for (let j = 0; j < arr.length; j++) {
      const num = arr[j]; // 当前值
      const digit = getDigit(num, i); // 获取 num 在第 i 位上的数字值
      bucket[digit].push(num); // 将 num 放入对应的桶中
    }

    // 依次将桶中的元素取出，并放回原数组，重复这个过程直到最高位
    let idx = 0;
    for (let k = 0; k < bucket.length; k++) {
      while (bucket[k].length > 0) {
        arr[idx++] = bucket[k].shift(); // 依次取出桶中的数字并放回原数组
      }
    }
  }

  return arr; // 返回排序后的数组
}

// 获取数字在指定位数上的值
function getDigit(num, i) {
  // 使用 Math.floor() 函数和 Math.abs() 函数获取 num 的绝对值，并将其除以 10^i 取整，再对 10 取模，得到 num 在第 i 位上的数字值
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

const array = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log('原始array:', array);
const newArr = radixSort(array, 2);
console.log('newArr:', newArr);
