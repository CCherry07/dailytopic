function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {
  const reslut: Map<number, number> = new Map()

  add(nums1, reslut)
  add(nums2, reslut)
  add(nums3, reslut)

  const res: number[] = []
  reslut.forEach((value, key) => {
    if (value > 1) {
      res.push(key)
    }
  })
  return res
};


function add(nums: number[], map: Map<number, number>) {
  new Set(nums).forEach(el => {
    if (map.has(el)) {
      map.set(el, map.get(el)! + 1)
    } else {
      map.set(el, 1)
    }
  })
}
