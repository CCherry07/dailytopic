import { TreeNode } from "./type"

function sumOfLeftLeaves(root: TreeNode | null): number {
  if (!root || (!root.left && !root.right)) return 0
  let sum = 0

  if (root.left) {
    sum += sumOfLeftLeaves(root.left)
  }
  if (root.right) {
    sum += sumOfLeftLeaves(root.right)
  }

  if (root.left && !root.left.left && !root.left.right) { // 叶子结点
    sum += root.left.val
  }

  return sum
};
