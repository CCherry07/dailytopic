import { TreeNode } from "./type";

// inorder 中序 左中右  postorder 后序 左右中
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  // 找到 中 结点
  // 所谓的 中结点 就是 postorder 最后一个结点
  if (!inorder.length) return null;
  const midVal = postorder.pop()! // 结点 的值
  const idx = inorder.indexOf(midVal)
  const node = new TreeNode(midVal)
  if (!postorder.length) return node
  // 根据 mid 找到 左右区间
  const lmid = inorder.slice(0, idx)
  const rmid = inorder.slice(idx + 1) // 越过 当前 结点

  // 根据中序 左区间 找到 后序的左右区间
  const plmid = postorder.slice(0, idx)
  const prmid = postorder.slice(idx)

  // 递归 调用 获取 左右子树
  node.left = buildTree(lmid, plmid)
  node.right = buildTree(rmid, prmid)

  return node
};
