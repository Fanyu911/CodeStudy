// 高效的插入排序

function shellSort(arr) {
  const len = arr.length; // 获取数组的长度
  let gap = Math.floor(len / 2); // 初始化增量为数组长度的一半

  while (gap > 0) {
    // 当增量大于 0 时循环执行排序
    for (let i = gap; i < len; i++) {
      // 对每个子序列进行插入排序
      let j = i;
      const temp = arr[i]; // 保存当前需要插入的元素
      while (j >= gap && arr[j - gap] > temp) {
        // 插入排序的过程
        arr[j] = arr[j - gap]; // 移动元素
        j -= gap; // 缩小索引值
      }
      arr[j] = temp; // 将当前元素插入到合适的位置
    }
    gap = Math.floor(gap / 2); // 缩小增量
  }

  return arr; // 返回排序后的数组
}

var arr = [3, 1, 7, 4, 5, 2, 1, 2];

console.log(shellSort(arr));
