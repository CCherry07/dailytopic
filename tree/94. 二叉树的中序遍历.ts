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


function inorderTraversalStack(root: TreeNode | null): number[] {
  let result: number[] = []
  let stack: TreeNode[] = []
  let current = root
  while (current || stack.length) {
    while (current) { // 一直往左走
      stack.push(current) // 入栈
      current = current.left // 一直往左走
    }
    current = stack.pop()! // 出栈
    result.push(current.val) // 中序遍历，先访问左子树，再访问节点，最后访问右子树
    current = current.right // 一直往右走
  }
  return result
}
