import { TreeNode } from "./type"
//给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。
function postorderTraversal(root: TreeNode | null): number[] {
  let result = []
  traversal(root, result)
  function traversal(node: TreeNode | null, result: number[]) {
    if (!node) return
    traversal(node.left, result)
    traversal(node.right, result)
    result.push(node.val)
  }
  return result
};

function postorderTraversalStack(root: TreeNode | null): number[] {
  let result: number[] = []
  let stack: TreeNode[] = []
  let current = root
  while (current || stack.length) {
    while (current) { // 一直往左走
      result.unshift(current.val) // 后序遍历，先访问左子树，再访问右子树，最后访问节点
      stack.push(current) // 入栈
      current = current.right // 一直往右走
    }
    current = stack.pop()! // 出栈
    current = current.left // 一直往左走
  }
  return result
}
