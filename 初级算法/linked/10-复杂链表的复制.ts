class ListNode {
  val: number;
  next: ListNode | null;
  random: ListNode | null;
  constructor(val?: number, next?: ListNode | null, random?: ListNode | null) {
    this.val = val || 0;
    this.next = next || null;
  }
}

const copyRandomList = (head: ListNode | null) => {
  const n = new ListNode();
  let c = n;
  let h = head;
  const wm = new Map<ListNode, ListNode>();
  wm.set(null, null);
  while (h !== null) {
    c.next = new ListNode(h.val, null, h.random);
    wm.set(h, c.next);
    c = c.next;
    h = h.next;
  }
  let nc = n;
  while (head !== null) {
    nc.next.random = wm.get(head.random);
    nc = nc.next;
    head = head.next;
  }
  return n.next;
};

export default copyRandomList;
