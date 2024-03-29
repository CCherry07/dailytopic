import { TreeNode } from "./type";
// 给定一个二叉树，找出其最小深度。
// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
// 说明：叶子节点是指没有子节点的节点。


function minDepth(root: TreeNode | null): number {
  if (!root) return 0
  if (root.left === null && root.right !== null) return minDepth(root.right) + 1 // 有右子树，但是没有左子树
  if (root.right === null && root.left !== null) return minDepth(root.left) + 1 // 有左子树，但是没有右子树
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1 // 有左右子树或者没有子树，都是返回最小的那个
};
