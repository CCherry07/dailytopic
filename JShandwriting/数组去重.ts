function unique(arr: any[]): any[] {
     return [...new Set(arr)]
}
// arr 有序的
function unique1(arr: number[]): number[] {
     const res: number[] = []
     const len = arr.length
     let fast = 0, slow = -1;
     while (fast < len) {
          if (res[slow] !== arr[fast]) {
               slow += 1
               res[slow] = arr[fast]
          }
          fast += 1
     }
     return res
}
