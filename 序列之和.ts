

function find(sum: number) {
  const dp: number[][] = [];
  for (let i = 1; i <= 100; i++) {
    let idx = i + 1;
    if (i === sum) { //当i等于sum时，直接break
      dp.push([i]);
      break;
    }
    const temp: number[] = [i] //存储每次的结果
    let res = i;
    while (idx < 100) {
      temp.push(idx);
      res += idx;
      idx++;
      if (res > sum) { // 当res大于sum时，直接break
        break;
      }
      if (res === sum) { // 当res等于sum时，将temp存入dp中，并break
        dp.push(temp);
        break;
      }
    }
  }
  return dp; // 返回所有的结果
}

console.log(find(15))
