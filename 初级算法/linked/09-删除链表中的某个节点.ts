// 单链表的定义
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val || 0;
    this.next = next || null;
  }
}

export const deleteNode = (head: ListNode | null, val: number): ListNode | null => {
  // 递归的终止条件：head 等于空的时候，直接返回 head，因为一个空的链表是没法删除的
  if (head === null) {
    return head;
  }

  // head 结点的值等于 val，直接返回 head 结点的下一个结点，相当于删除了当前节点
  if (head.val === val) {
    return head.next;
  }

  // 递归调用判断下一个节点是否等于 val
  head.next = deleteNode(head.next, val);

  return head;
};
