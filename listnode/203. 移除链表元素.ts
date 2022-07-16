class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
// solution 1
function removeElements(head: ListNode | null, val: number): ListNode | null {
  let el:ListNode = new ListNode(undefined,head)
  let currentTarget = el as ListNode | null
  while(currentTarget){
      if(currentTarget.next?.val !== val){
          currentTarget = currentTarget.next
      }else{
          currentTarget.next = currentTarget.next.next
      }
  }
  return el.next
}

// solution 2
function removeElements2(head: ListNode | null, val: number): ListNode | null {
  if (!head) {
    return head
  }
  head.next=removeElements2(head.next,val)
  return head.val === val ? head.next : head
}

export {}
