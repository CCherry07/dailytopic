import { ListNode } from './type';
const reverseList = function (head: ListNode | null): ListNode | null {
  // prev 前节点, cur 当前节点
  let prev: ListNode | null = null, cur = head
  // 每次循环, 将 当前节点 指向 前节点, 然后 当前节点 和 前节点 后移
  while (cur) {
    let tmpNode = cur.next // 保存 当前节点 的下一节点
    cur.next = prev // 当前节点 指向 前节点
    prev = cur // 前节点后移
    cur = tmpNode // 当前节点后移
  }
  return prev
}
