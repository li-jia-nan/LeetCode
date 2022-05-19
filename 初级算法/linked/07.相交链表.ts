// 单链表的定义
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val || 0;
    this.next = next || null;
  }
}

export const getIntersectionNode = (
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null => {
  let stackA: ListNode[] = [];
  let stackB: ListNode[] = [];
  let nodeA = headA;
  let nodeB = headB;
  if (headA === null || headB === null) {
    return null;
  }
  while (nodeA) {
    stackA.push(nodeA);
    nodeA = nodeA.next;
  }
  while (nodeB) {
    stackB.push(nodeB);
    nodeB = nodeB.next;
  }
  do {
    nodeA = stackA.pop();
    nodeB = stackB.pop();
  } while (nodeA && nodeB && nodeA === nodeB); // 相同就弹出去直到不一样或者弹出的是空
  if (!nodeA) {
    // 空则说明两链表完全重合
    return headA;
  } else {
    // 否则直接返回不一样节点的next节点
    return nodeA.next;
  }
};
