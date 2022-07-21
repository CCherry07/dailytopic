/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
import { ListNode } from './type'
 function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let res = new ListNode(0) , cur = res

  while(list1&&list2){
      if(list1.val <= list2.val){
          cur.next = list1
          list1=list1.next
      }else{
          cur.next = list2
          list2 = list2.next
      }
      cur = cur.next
  }
  
  cur.next = list1 ?? list2;
  return res.next
};

// two
const mergeTwoLists2 = function (list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (!list1) return list2
  if (!list2) return list1
  if (list1.val < list2.val) {
      list1.next = mergeTwoLists(list1.next, list2)
      return list1
  } else {
      list2.next = mergeTwoLists(list1, list2.next)
      return list2
  }
}
