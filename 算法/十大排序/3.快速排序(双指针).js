function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    // 划分操作，获取基准元素的最终位置
    const pivotIndex = partition(arr, left, right);
    // 对基准元素左边的子数组进行快速排序
    quickSort(arr, left, pivotIndex - 1);
    // 对基准元素右边的子数组进行快速排序
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

function partition(A, left, right) {
  const pivot = A[left];
  while (left < right) {
    while (left < right && A[right] > pivot) {
      right--;
    }
    A[left] = A[right];
    while (left < right && A[left] <= pivot) {
      left++;
    }
    A[right] = A[left];
  }
  A[left] = pivot;
  return left;
}

// 测试示例
const array = [5, 3, 8, 4, 2];
console.log(quickSort(array));
