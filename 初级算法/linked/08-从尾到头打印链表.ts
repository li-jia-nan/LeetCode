// 单链表的定义
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val || 0;
    this.next = next || null;
  }
}

export function reversePrint(head: ListNode | null): number[] {
  return head === null ? [] : [...reversePrint(head.next), head.val];
}
