function intersection(nums1: number[], nums2: number[]): number[] {
  const set = new Set<number>()
  let set2: Set<number>;
  if (nums1.length > nums2.length) {
    set2 = new Set(nums1)
    nums2.forEach(num => {
      set2.has(num) && set.add(num)
    })
  } else {
    set2 = new Set(nums2)
    nums1.forEach(num => {
      set2.has(num) && set.add(num)
    })
  }
  return [...set]
};
