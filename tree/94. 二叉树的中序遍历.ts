import { TreeNode } from './type';

function inorderTraversal(root: TreeNode | null): number[] {
  let result: number[] = []
  find(root, result)
  return result
  function find(node: TreeNode | null, result: number[] = []) {
    if (!node) return
    find(node?.left, result)
    result.push(node?.val)
    find(node?.right, result)
  }
};
