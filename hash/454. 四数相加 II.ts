function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
  const twoSumMap = handleTwoArr(nums1, nums2)
  let count = 0

  for (const n3 of nums3) {
    for (const n4 of nums4) {
      const sum = n3 + n4;
      count += (twoSumMap.get(0 - sum) || 0)
    }
  }

  return count
};

function handleTwoArr(nums1: number[], nums2: number[]) {
  let map = new Map<number, number>()
  nums1.forEach(el1 => {
    nums2.forEach(el2 => {
      const key = el1 + el2
      if (map.has(key)) {
        map.set(key, map.get(key)! + 1)
      } else {
        map.set(key, 1)
      }
    })
  })

  return map
}
