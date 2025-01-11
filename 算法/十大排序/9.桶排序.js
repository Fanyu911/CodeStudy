function bucketSort(arr, bucketSize = 5) {
  if (arr.length === 0) {
    // 如果数组为空，则直接返回
    return arr;
  }

  // 找到最大值和最小值
  let minValue = arr[0];
  let maxValue = arr[0];
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    } else if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }

  // 计算桶的数量
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  const buckets = new Array(bucketCount);

  // 将元素放入桶中
  for (let i = 0; i < arr.length; ++i) {
    const bucketIndex = Math.floor((arr[i] - minValue) / bucketSize);
    if (!buckets[bucketIndex]) {
      buckets[bucketIndex] = [];
    }
    buckets[bucketIndex].push(arr[i]);
  }

  // 对每个桶内部进行排序
  arr.length = 0; // 清空原数组
  for (let i = 0; i < buckets.length; ++i) {
    insertionSort(buckets[i]); // 这里使用插入排序对桶内部进行排序
    for (let j = 0; j < buckets[i].length; ++j) {
      arr.push(buckets[i][j]); // 将排好序的元素放回数组中
    }
  }

  return arr; // 返回排序后的数组
}

// 插入排序，用于对每个桶内部进行排序
function insertionSort(arr) {
  const len = arr.length;
  for (let i = 1; i < len; ++i) {
    let j = i - 1;
    const temp = arr[i];
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j]; // 将元素向右移动
      --j;
    }
    arr[j + 1] = temp; // 将当前元素插入到正确的位置
  }
}
