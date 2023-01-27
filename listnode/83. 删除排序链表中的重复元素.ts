import { ListNode } from "../types/type"
function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head?.next) return head
  let terget = head
  while (terget?.next) {
    if (terget.val === terget.next?.val) {
      terget.next = terget.next.next
    } else {
      terget = terget.next
    }
  }
  return head
};
