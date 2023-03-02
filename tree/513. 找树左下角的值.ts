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
{

  function findBottomLeftValue(root: TreeNode): number {
    let height = 0
    let left = root
    function defs(node: TreeNode, depth: number) {
      if (!node.left && !node.right) {
        if (depth > height) {
          height = depth
          left = node
        }
      }

      if (node.left) defs(node.left, depth + 1)
      if (node.right) defs(node.right, depth + 1)
    }
    defs(root, height)
    return left.val
  };

}
