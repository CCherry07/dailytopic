import { TreeNode } from './type';
function binaryTreePaths(root: TreeNode | null): string[] {
  const res:string[] = []
  if (!root) return []
  function def(node: TreeNode, path: string) {
    const { left, right } = node
    if (!left && !right) return res.push(path)
    if (left) {
      def(left, `${path}->${left.val}`)
    }
    if (right) {
      def(right, `${path}->${right.val}`)
    }
  }
  def(root, `${root.val}`)
  return res
};
