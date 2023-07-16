const testArr = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];

function quickSort(arr: number[], l: number = 0, r: number = arr.length - 1): number[] {
  if (l >= r) return arr;
  let i = l, j = r, pivot = arr[l];
  while (i < j) {
    while (i < j && arr[j] >= pivot) j--; // 从右向左找第一个小于pivot的数 向左移动
    arr[i] = arr[j];
    while (i < j && arr[i] <= pivot) i++; // 从左向右找第一个大于pivot的数 向右移动
    arr[j] = arr[i];
  }
  arr[i] = pivot; // 将pivot放到i的位置 l == r
  quickSort(arr, l, i - 1);
  quickSort(arr, i + 1, r);

  return arr;
}

