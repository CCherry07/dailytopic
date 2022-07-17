import { ListNode } from "./type";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if(!head?.next)return null
  let virHead: ListNode = new ListNode(0, head);
  // 定义快慢指针
  let fast: ListNode | null = virHead,slow:ListNode | null = virHead
  while(n--){
      fast = fast.next
      if (!fast) return virHead.next;
  }
  while(fast.next){
      fast = fast.next
      slow = slow.next as ListNode
  }
  slow.next = slow.next!.next
  return virHead.next;
};
