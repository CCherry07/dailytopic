import { TreeNode } from './type';
function binaryTreePaths(root: TreeNode | null): string[] {
  const result: string[] = []
  if (!root) return []
  function def(node: TreeNode, path: string) {
    const { left, right } = node
    if (!left && !right) return result.push(path) // 这里的 path 是上一层的 path
    if (left) {
      def(left, `${path}->${left.val}`) // 将 path 以及left value 拼接 传递给下一层
    }
    if (right) {
      def(right, `${path}->${right.val}`) // 将 path 以及right value 拼接 传递给下一层
    }
  }
  def(root, `${root.val}`)
  return result
};
