function generateMatrix(n: number): number[][] {
  const res: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0))
  let startx = 0, starty = 0, offset = 1;
  let count = 1
  while (offset < n) {
    for (var j = starty; j < n - offset; j++) {
      res[startx][j] = count++
    }
    for (var i = startx; i < n - offset; i++) {
      res[i][j] = count++
    }
    for (; j > starty; j--) {

      res[i][j] = count++
    }
    for (; i > startx; i--) {
      res[i][j] = count++
    }
    startx++
    starty++
    offset++
  }
  if ((n % 2) !== 0) res[startx - 1][starty - 1] = n * n
  return res
}

const res = generateMatrix(3)
console.log(res);

