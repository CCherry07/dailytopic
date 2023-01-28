import { ListNode } from "../types/type"

function reversePrint(head: ListNode | null): number[] {
  const res: number[] = []
  while (head) {
    res.unshift(head.val)
    head = head.next
  }
  return res
};
