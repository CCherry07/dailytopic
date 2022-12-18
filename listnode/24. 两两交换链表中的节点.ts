import { ListNode } from "./type"
// 1->2->3->4 => 2->1->4->3
function swapPairs(head: ListNode | null): ListNode | null {
  const p = new ListNode(undefined, head)
  let current = p
  while (current.next && current.next.next) {
    const tempNode = current.next // 1
    const tempNode1 = current.next.next.next // 3
    current.next = current.next.next // 2
    current.next.next = tempNode // 1
    tempNode.next = tempNode1 // 3
    current = current.next.next // 1
  }
  return p.next
};
