import { TreeNode } from "./type"

// 给定一个二叉树，判断它是否是高度平衡的二叉树。
// 本题中，一棵高度平衡二叉树定义为：
// 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。

function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true
  if (Math.abs(getHight(root.left) - getHight(root.right)) > 1) return false
  return isBalanced(root.left) && isBalanced(root.right)
};
function getHight(node: TreeNode | null) {
  if (!node) return 0
  return Math.max(getHight(node.left), getHight(node.right)) + 1
}
