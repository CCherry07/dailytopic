function intersection(nums1: number[], nums2: number[]): number[] {
  const set = new Set<number>()
  if (nums1.length > nums2.length) {
    let set2: Set<number> | null = new Set<number>(nums1)
    nums2.forEach(num => {
      set2!.has(num) && set.add(num)
    })
    set2 = null
  } else {
    let set2: Set<number> | null = new Set(nums2)
    nums1.forEach(num => {
      set2!.has(num) && set.add(num)
    })
    set2 = null
  }
  return [...set]
};
