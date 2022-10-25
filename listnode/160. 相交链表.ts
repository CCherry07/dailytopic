import { ListNode } from './type';
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let n1 = headA;
  let n2 = headB;
  while (n1 !== n2) {
    n1 = n1 === null ? n1 = headB : n1.next
    n2 = n2 === null ? n2 = headA : n2.next
  }
  return n1
};
