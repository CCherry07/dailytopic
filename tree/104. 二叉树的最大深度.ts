import { TreeNode } from "./type"

function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0
  // 递归左右子树,每次递归返回的是左右子树的最大深度 都加 1
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1 // 递归最后一层的时候，返回 1，然后一层一层返回
};
