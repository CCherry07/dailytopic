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
