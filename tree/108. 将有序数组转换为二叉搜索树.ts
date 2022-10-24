import { TreeNode } from "./type";

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length == 0) return null;
  let mid = Math.floor(nums.length / 2);
  let root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));
  return root;
}
