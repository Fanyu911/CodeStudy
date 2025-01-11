let num = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// 1冒泡
const bubbleSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
};
// bubbleSort(num);

// 2插入
const insertSort = (arr) => {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    const current = arr[i];
    let previ = i - 1;

    while (previ >= 0 && arr[previ] > current) {
      arr[previ + 1] = arr[previ];
      previ--;
    }
    arr[previ + 1] = current;
  }
};
// insertSort(num);

// 3快速
const quickSort = (arr) => {
  const n = arr.length;
  if (n <= 1) return arr;
  const mid = Math.floor(n / 2);
  const midValue = arr[mid];

  const small = [];
  const big = [];

  for (let i = 0; i < n; i++) {
    if (i === mid) continue;
    const value = arr[i];
    if (value >= midValue) {
      big.push(value);
    } else {
      small.push(value);
    }
  }

  return [...quickSort(small), midValue, ...quickSort(big)];
};
// num = quickSort(num);

// 4归并
const mergeSort = (arr) => {
  const n = arr.length;
  if (n <= 1) return arr;
  const mid = Math.floor(n / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, n);
  return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
  const res = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }
  while (left.length) {
    res.push(...left);
    break;
  }

  while (right.length) {
    res.push(...right);
    break;
  }

  return res;
};
// num = mergeSort(num);

// 5选择
const selectSort = (arr) => {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i; j < n; j++) {
      if (arr[j] <= arr[i]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
};
// selectSort(num);

// 6堆排序
const heapSort = (arr) => {
  const n = arr.length;
  buildHeap(arr);

  for (let i = 0; i < n; i++) {
    [arr[0], arr[n - 1 - i]] = [arr[n - 1 - i], arr[0]];
    adjustHeap(0, n - 1 - i);
  }

  function buildHeap(arr) {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      adjustHeap(i, n);
    }
  }

  function adjustHeap(i, len) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let maxi = i;

    if (left < len && arr[left] > arr[maxi]) maxi = left;
    if (right < len && arr[right] > arr[maxi]) maxi = right;

    if (maxi != i) {
      [arr[maxi], arr[i]] = [arr[i], arr[maxi]];
      adjustHeap(maxi, len);
    }
  }
};
// heapSort(num);

// 7希尔
const shellSort = (arr) => {
  const n = arr.length;
  let gap = Math.floor(n / 2);

  while (gap > 0) {
    for (let i = gap; i < n; i += gap) {
      const cur = arr[i];
      let prev = i - gap;

      while (prev >= 0 && arr[prev] > cur) {
        arr[prev + gap] = arr[prev];
        prev -= gap;
      }
      arr[prev + gap] = cur;
    }
    gap = Math.floor(gap / 2);
  }
};
// shellSort(num);

//8计数
const countSort = (arr, max, min) => {
  const n = arr.length;
  const countList = Array.from({ length: max - min + 1 }, () => 0);

  for (let i of arr) {
    countList[i - min]++;
  }

  let index = 0;
  for (let [num, val] of countList.entries()) {
    while (val > 0) {
      arr[index] = num + min;
      val--;
      index++;
    }
  }
};
// countSort(num, 9, 1);

//9 桶排序
const bucketSort = (arr, range) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const bucket = Math.floor((max - min) / range);

  const store = new Array(bucket).fill(0).map(() => []);

  for (let i of arr) {
    const belong = Math.floor((i - min) / bucket);
    store[belong].push(i);
  }

  arr = [];
  for (let i = 0; i < bucket; i++) {
    insertSort(store[i]);

    for (let j of store[i]) {
      arr.push(j);
    }
  }
};
// bucketSort(num, 2);

// 10 基数排序
const radixSort = (num) => {
  const max = Math.max(...num);
  const maxLen = max.toString().length;
  // 代表每个数字0~9
  const bucket = Array.from({ length: 10 }, () => []);

  for (let i = 0; i < maxLen; i++) {
    // 放入数字桶
    for (let str of num) {
      bucket[getDig(str, i)].push(str);
    }
  }

  let index = 0;
  // 从数字桶取出
  for (let k = 0; k <= 9; k++) {
    while (bucket[k].length) {
      num[index] = bucket[k].shift();
      index++;
    }
  }
  function getDig(str, index) {
    return Math.floor(Number(str) / Math.pow(10, index)) % 10;
  }
};
radixSort(num);
console.log(num);
