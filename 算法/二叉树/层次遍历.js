var levelOrder = function (root) {
  if (root === null) return [];
  const queue = [root];
  const ans = [];
  while (queue.length > 0) {
    const n = queue.length;
    const list = [];
    for (let i = 0; i < n; i++) {
      // 取出开头
      const cur = queue.shift();
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
      list.push(cur.val);
    }
    ans.push(list);
  }
  return ans;
};
