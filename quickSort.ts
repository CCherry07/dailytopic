function quick(arr:number[],start:number,end:number):number{
  let init = start
  let flag = arr[init]
  start++
  while (start<=end) {
    while (arr[end] > flag) {
      end--
    }
    while(arr[start]<flag){
      start++
    }

    if (start < end) {
      [arr[start],arr[end]] = [arr[end],arr[start]]
      start++
      end--
    }
  }
  [arr[init],arr[start-1]] = [arr[start-1],arr[init]]
  return start
}

function quickSort(arr:number[],start:number,end:number) {
  if (start < end) {
    let idx = quick(arr,start,end)
    quickSort(arr,start,idx-1)
    quickSort(arr,idx,end)
  }
  return arr
}


const arr= [90,2,35,3,56,7,24,6,63,7,67,232,5]

console.log(quickSort(arr,0,arr.length-1));

