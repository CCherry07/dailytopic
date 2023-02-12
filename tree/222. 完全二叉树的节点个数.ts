import { TreeNode } from './type'
function countNodes(root: TreeNode | null): number {
  if (!root) return 0
  let left: TreeNode | null = root
  let right: TreeNode | null = root
  let lh = 0, rh = 0

  // 计算左右子树的高度,找到满二叉树的高度 根据 Math.pow(2, lh) - 1 求出节点个数
  while (left) {
    left = left.left
    lh += 1
  }
  while (right) {
    right = right.right
    rh += 1
  }

  if (lh === rh) return Math.pow(2, lh) - 1

  return countNodes(root.left) + countNodes(root.right) + 1
};
