import { TreeNode } from "./type"

function invertTree(root: TreeNode | null):TreeNode | null {
  if(root === null) return root as null
  [root.left,root.right] = [invertTree(root.right),invertTree(root.left)]
  return root as TreeNode
};
