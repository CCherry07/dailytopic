// 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。
// 如果存在，返回 true ；否则，返回 false 。
// 叶子节点 是指没有子节点的节点。
import { TreeNode } from "./type"
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false
  if (!root.left && !root.right) {
    return targetSum === root.val
  }
  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
};

{
  function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) return false
    if (!root.left && !root.right) {
      return root.val === targetSum
    }
    if (root.left) {
      targetSum -= root.val
      if (hasPathSum(root.left, targetSum)) return true
      targetSum += root.val
    }

    if (root.right) {
      targetSum -= root.val
      if (hasPathSum(root.right, targetSum)) return true
      targetSum += root.val
    }

    return false
  };
}
