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
