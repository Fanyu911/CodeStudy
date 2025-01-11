// 最大堆排序函数
function heapSort(arr) {
  // 构建最大堆
  buildHeap(arr);

  // 交换堆顶元素和末尾元素，并重新调整堆
  for (let i = arr.length - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]]; // 交换堆顶元素和末尾元素
    adjustHeap(arr, 0, i); // 重新调整堆
  }

  return arr; // 返回排序后的数组
}

// 构建最大堆函数
function buildHeap(arr) {
  // 从最后一个非叶子节点开始循环，依次向上调整堆
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    adjustHeap(arr, i, arr.length);
  }
}

// 调整堆函数
function adjustHeap(arr, i, len) {
  // 将当前非叶子节点和它的左右子节点进行比较，并将最大值交换到当前节点位置
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let maxIndex = i;

  if (left < len && arr[left] > arr[maxIndex]) {
    maxIndex = left;
  }
  if (right < len && arr[right] > arr[maxIndex]) {
    maxIndex = right;
  }

  if (maxIndex !== i) {
    [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]]; // 交换当前节点和最大值的位置
    adjustHeap(arr, maxIndex, len); // 递归调整子树
  }
  console.log(JSON.stringify(arr));
}
// heapSort([3, 2, 1]);
heapSort([3, 1, 2]);
