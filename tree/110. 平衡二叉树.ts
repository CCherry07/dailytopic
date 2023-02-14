import { TreeNode } from "./type"

// 给定一个二叉树，判断它是否是高度平衡的二叉树。
// 本题中，一棵高度平衡二叉树定义为：
// 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。

function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true
  if (Math.abs(getHight(root.left) - getHight(root.right)) > 1) return false // 获取左右子树的高度，如果高度差大于1，返回false
  return isBalanced(root.left) && isBalanced(root.right)
};
function getHight(node: TreeNode | null) {
  if (!node) return 0
  return Math.max(getHight(node.left), getHight(node.right)) + 1
}


function isBalanced1(root: TreeNode | null): boolean {
  if (!root) return true
  return Boolean(getHight1(root) !== -1)
};
// 获取高度，当不平衡时返回-1，平衡时返回高度
function getHight1(node: TreeNode | null) {
  if (!node) return 0
  const lh = getHight(node.left)
  if (lh === -1) return -1
  const rh = getHight(node.right)
  if (rh === -1) return -1
  if (Math.abs(lh - rh) > 1) return -1
  return 1 + Math.max(lh, rh)
}
