import { TreeNode } from './type'
function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = []
  let Queue: TreeNode[] = []
  if (root !== null) Queue.push(root);
  while (Queue.length) {
    let size = Queue.length
    const tier:number[] = []
    while (size--) {
      const shiftNode = Queue.shift() as TreeNode
      tier.push(shiftNode.val)
      if (shiftNode.left) Queue.push(shiftNode.left)
      if (shiftNode.right) Queue.push(shiftNode.right)
    }
    result.push(tier)
  }
  return result
};
