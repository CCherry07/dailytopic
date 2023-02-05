import { TreeNode } from "./type"

//给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
function preorderTraversal(root: TreeNode | null): number[] {
  let result = []
  traversal(root, result)
  function traversal(node: TreeNode | null, result: number[]) {
    if (!node) return
    result.push(node.val)
    traversal(node.left, result)
    traversal(node.right, result)
  }
  return result
};


function preorderTraversalStack(root: TreeNode | null): number[] {
  let result: number[] = []
  let stack: TreeNode[] = []
  let current = root
  while (current || stack.length) {
    while (current) { // 一直往左走
      result.push(current.val) // 先序遍历，先访问节点，再访问左子树，最后访问右子树
      stack.push(current) // 入栈
      current = current.left // 一直往左走
    }
    current = stack.pop()! // 出栈
    current = current.right // 一直往右走
  }
  return result
}
