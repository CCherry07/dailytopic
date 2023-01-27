import { ListNode } from "../types/type"
// solution 1
function hasCycle(head: ListNode | null): boolean {
    if (!head?.next) {
        return false
    }
    const nodeSet = new Set<ListNode>()
    while (head) {
        if (nodeSet.has(head)) return true
        nodeSet.add(head)
        head = head.next
    }
    return false
};

// solution 2
function hasCycle2(head: ListNode | null): boolean {
    if (!head?.next) {
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

// solution 3

function hasCycle3(head: ListNode | null): ListNode | null {
    if (!head?.next) {
        return null
    }
    let slow = head as ListNode | null
    let fast = head as ListNode | null
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow!.next
        if (fast === slow) {
            slow = head
            while (slow !== fast) {
                slow = slow!.next
                fast = fast!.next
            }
            return slow
        }
    }
    return null
}
export { }
