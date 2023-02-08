import { TreeNode } from './type'
function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = []
  let Queue: TreeNode[] = []
  if (root !== null) Queue.push(root);
  while (Queue.length) {
    let size = Queue.length // 本层节点数
    const tier: number[] = [] // 本层节点值
    while (size--) { // 本层节点数
      const shiftNode = Queue.shift() as TreeNode // 出队列
      tier.push(shiftNode.val) // 本层节点值
      if (shiftNode.left) Queue.push(shiftNode.left)
      if (shiftNode.right) Queue.push(shiftNode.right)
    }
    result.push(tier)
  }
  return result
};


const a1 = [{ a: 1, b: 1 }, { a: 2, b: 2 }, { a: 3, b: 3 }]
const a2 = [{ a: 1, c: 1 }, { a: 3, c: 3 }, { a: 4, c: 4 }]


type PublicAttribute<A extends O, B extends O> = {
  [K in keyof A & keyof B]: A[K] extends B[K] ? K : never
}

type O = Record<string, number>

function merge<A extends O, B extends O>(key: keyof PublicAttribute<A, B>, a1: A[], a2: B[]) {
  return a1.map(item => {
    // @ts-ignore
    const target = a2.find(item2 => item[key] === item2[key])
    if (target) {
      return { ...item, ...target }
    }
  }).filter(Boolean)
}

console.log(merge('a', a1, a2)); // [ { a: 1, b: 1, c: 1 }, { a: 3, b: 3, c: 3 } ]

