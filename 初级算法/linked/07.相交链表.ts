// 单链表的定义
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val || 0;
    this.next = next || null;
  }
}

const getIntersectionNode = (headA: ListNode | null, headB: ListNode | null): ListNode | null => {
  let stackA: ListNode[] = [];
  let stackB: ListNode[] = [];
  let nodeA = headA;
  let nodeB = headB;
  if (!headA || !headB) {
    return null;
  }
  while (nodeA && nodeA.next) {
    stackA.push(nodeA);
    nodeA = nodeA.next;
  }
  while (nodeB && nodeB.next) {
    stackB.push(nodeB);
    nodeB = nodeB.next;
  }
  while (nodeA && nodeB && nodeA === nodeB) {
    nodeA = stackA.pop();
    nodeB = stackB.pop();
  }
  if (nodeA) {
    return nodeA.next;
  } else {
    return headA;
  }
};
