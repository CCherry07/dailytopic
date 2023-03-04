import { TreeNode } from "./type";

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  if (!nums.length) return null
  if (nums.length === 1) return new TreeNode(nums[0])

  const maxVal = Math.max(...nums)
  const maxValIdx = nums.indexOf(maxVal)

  const node = new TreeNode(maxVal)
  node.left = constructMaximumBinaryTree(nums.slice(0, maxValIdx))
  node.left = constructMaximumBinaryTree(nums.slice(maxValIdx + 1)) // 越过当前已经操作的结点

  return node
}
