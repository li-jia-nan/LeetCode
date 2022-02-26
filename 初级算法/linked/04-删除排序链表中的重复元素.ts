// 单链表的定义
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val || 0;
    this.next = next || null;
  }
}

export const deleteDuplicates = (head: ListNode | null): ListNode | null => {
  let p = head;
  while (p && p.next) {
    if (p.val === p.next.val) {
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }
  return head;
};
