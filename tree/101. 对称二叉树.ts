import { TreeNode } from './type';
function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) return true
  function def(left: TreeNode | null, right: TreeNode | null):boolean {
    if (left === null && right === null) return true
    if (left === null || right === null) return false
    if (left.val !== right.val) return false
    return def(left.left, right.right) && def(left.right, right.left)
  }
  return def(root.left, root.right)
};
