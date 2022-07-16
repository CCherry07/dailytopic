class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


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

export {}
