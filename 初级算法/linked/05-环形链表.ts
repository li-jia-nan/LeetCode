// 单链表的定义
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val || 0;
    this.next = next || null;
  }
}

export const hasCycle = (head: ListNode | null): boolean => {
  let p1 = head;
  let p2 = head;
  while (p1 && p2 && p2.next) {
    p1 = p1.next;
    p2 = p2.next.next;
    if (p1 === p2) {
      return true;
    }
  }
  return false;
};
