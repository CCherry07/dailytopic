import { TreeNode } from "./type"

function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
  let node: TreeNode
  if (root1 && root2) {
    node = new TreeNode(root1.val + root2.val)
    node.left = mergeTrees(root1.left, root2.left)
    node.right = mergeTrees(root1.right, root2.right)
    return node
  }
  if (root1) return root1
  if (root2) return root2
  return null
};
