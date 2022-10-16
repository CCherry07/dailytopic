/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  nums1.length = m
  for (let i = 0; i < n; i++) {
    nums1[m + i] = nums2[i]
  }
  nums1.sort((a, b) => a - b)
};

let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3

merge(nums1, m, nums2, n)

console.log(nums1);
