import { TreeNode } from "./type"


// 层序遍历
function findBottomLeftValue(root: TreeNode): number {
  let stack: TreeNode[] = [root]
  let bottomLeft: TreeNode = root

  while (stack.length) {
    bottomLeft = stack[0]
    const newNext: TreeNode[] = []
    stack.forEach(node => {
      node.left && newNext.push(node.left)
      node.right && newNext.push(node.right)
    })
    stack = newNext
  }

  return bottomLeft.val
};


// 深度优先遍历

