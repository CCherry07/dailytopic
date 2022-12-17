import { ListNode } from './type';
// 双指针
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

// 递归
// head 为前一个节点
// head.next 为当前节点, p 为新的头节点
// 递归终止条件: 当前节点 为 null 或 当前节点 的下一节点 为 null
// 递归阶段: 递归调用 当前节点 的下一节点, 返回新的头节点
// 递归返回后: 将 当前节点 的下一节点 指向 当前节点, 当前节点 指向 null
// 返回新的头节点
// 递归的本质是将问题分解为更小的子问题, 递归终止条件是子问题的解
// 递归阶段是将子问题的解组合成原问题的解
// 递归返回后是将子问题的解组合成原问题的解
const reverseListWithRecursion = function (head: ListNode | null): ListNode | null {
  if (head == null || head.next == null) return head // 终止条件
  const p = reverseListWithRecursion(head.next) // 递阶段
  head.next.next = head // 递归返回后，将 当前节点 的下一节点 指向 当前节点
  head.next = null // 当前节点 指向 null
  return p // 返回新的头节点
}
