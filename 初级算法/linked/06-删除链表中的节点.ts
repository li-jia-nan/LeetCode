// 单链表的定义
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val || 0;
    this.next = next || null;
  }
}

export const deleteNode = (root: ListNode | null): void => {
  root.val = root.next.val;
  root.next = root.next.next;
};
