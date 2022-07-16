import { TreeNode } from "./type"

function maxDepth(root: TreeNode | null): number {
  if(root === null) return 0
  // 遍历左右子树
  return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1
};
