function findContentChildren(g: number[], s: number[]): number {
  g=g.sort((a,b)=>b-a)//大->小 孩子的胃口
  s=s.sort((a,b)=>b-a)//大->小 饼干的尺寸
  let maxCur = 0 // 饼干的尺寸
  let res = 0 //吃饱孩子的个数
  for(let i = 0 ; i < g.length;i++){
      if(maxCur >= 0 && s[maxCur] >= g[i]){
          res+=1
          maxCur++
      }
  }
  return res
};
