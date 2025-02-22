var reverseList = function (head) {
  let prev = null;
  let cur = head;
  while (cur) {
    let tempNext = cur.next;
    cur.next = prev;
    prev = cur;
    cur = tempNext;
  }
  return prev;
};
