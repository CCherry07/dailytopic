interface ListNode {
  next: ListNode | null,
  val: number
}

class MyLinkedList {
  head: ListNode | null
  size: number
  constructor() {
    this.head = null
    this.size = 0
  }

  get(index: number): number {
    if (index < 0 || index >= this.size) return -1;
    let current = this.head
    let idx = 0
    while (idx < index) {
      current = current!.next
      idx++
    }
    return current!.val
  }

  addAtHead(val: number): void {
    let newNode = {
      next: null,
      val
    } as any
    if (this.head === null) {
      this.head = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.size += 1
  }

  addAtTail(val: number): void {
    let size = this.size
    if (size === 0) {
      this.addAtHead(val)
      return
    }
    let vnode = {
      next: this.head,
    } as any
    while (size > 0) {
      vnode = vnode.next
      size -= 1
    }
    vnode.next = {
      next: null,
      val
    }
    this.size += 1
  }

  addAtIndex(index: number, val: number): void {
    if (index > this.size) return
    if (index === 0) return this.addAtHead(val)
    let vnode = {
      next: this.head,
    } as any
    let idx = 0
    while (idx < index) {
      vnode = vnode.next
      idx += 1
    }
    vnode.next = {
      next: vnode.next,
      val
    }
    this.size += 1
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) return
    let vnode = {
      next: this.head,
    } as any
    this.size -= 1
    let idx = 0
    if (index === 0) {
      this.head = this.head!.next
      return
    }
    while (idx < index) {
      vnode = vnode.next
      idx += 1
    }
    vnode.next = vnode.next.next
  }
}
