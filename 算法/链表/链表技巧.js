// 虚拟dummy
const dummyNode = new ListNode(-1, null);
dummyNode.next = head;

// 快慢指针
while (fast) {
  fast = fast.next;
  slow = slow.next;
}

// 双向链表 + 哨兵节点
this.head = new Node();
this.tail = new Node();
this.head.next = this.tail;
this.tail.prev = this.head;
