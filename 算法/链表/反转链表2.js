var reverseBetween = function (head, left, right) {
  const dummyNode = new ListNode(-1, null);
  dummyNode.next = head;

  let pre = dummyNode;
  // 遍历第一段
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next;
  }

  let rightNode = pre;
  // 遍历第二段
  for (let i = 0; i < right - left + 1; i++) {
    rightNode = rightNode.next;
  }

  let leftNode = pre.next;
  let suc = rightNode.next;
  // 切断联系
  pre.next = null;
  rightNode.next = null;
  // 反转链表
  reverseList(leftNode);
  // 拼接
  pre.next = rightNode;
  leftNode.next = suc;

  return dummyNode.next;
};

var reverseList = function (head) {
  let pre = null;
  let cur = head;

  while (cur) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
};
