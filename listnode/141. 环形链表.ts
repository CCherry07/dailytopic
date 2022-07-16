class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// solution 1
function hasCycle(head: ListNode | null): boolean {
  if(!head?.next){
      return false
  }
  const nodeSet = new Set<ListNode>()
  while(head){
      if(nodeSet.has(head))return true
      nodeSet.add(head)
      head = head.next
  }
  return false
};

// solution 2
function hasCycle2(head: ListNode | null): boolean {
    if(!head?.next){
        return false
    }
    let slow = head as ListNode | null
    let fast = head as ListNode | null
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow!.next
        if (fast === slow) return true
    }
    return false
  };

export {}
