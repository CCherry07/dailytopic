function getArrayDimension(arr: any[]) {
  let list: any[] = []
  let dimension = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      list = list.concat(arr[i])
    }
  }

  dimension += 1
  if (list.length > 0) {
    dimension += getArrayDimension(list)
  }
  return dimension;
}

console.log(getArrayDimension([1, 2, 3, 4, [3], [[2]], [1, 3, [34, [1]]], , 5]));

