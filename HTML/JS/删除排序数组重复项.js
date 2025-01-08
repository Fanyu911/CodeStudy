var rotate = function (nums, k) {
  while (k >= nums.length) {
    k = k - nums.length;
  }
  let temp = nums.slice(nums.length - k);
  let rest = nums.slice(0, nums.length - k);
  let result = temp.concat(rest);
  for (let i = 0; i < nums.length; i++) {
    nums[i] = result[i];
    console.log(nums[i])
  }
  
};
let n = [1, 2, 3, 4, 5];

console.log(rotate(n, 3));
console.log('hah');
