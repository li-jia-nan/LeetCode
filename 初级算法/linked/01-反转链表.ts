// 单链表的定义
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val || 0;
    this.next = next || null;
  }
}

export const reverseList = (head: ListNode | null): ListNode | null => {
  let current = head;
  let prev = null;
  while (current) {
    const tmp = current.next;
    current.next = prev;
    prev = current;
    current = tmp;
  }
  return prev;
};
