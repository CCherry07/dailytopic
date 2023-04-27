function exist(board: string[][], word: string): boolean {
  const row = board.length
  const col = board[0].length

  for(let i = 0 ; i < row ; i++){
      for(let j = 0 ; j < col ; j++){
          let res = find(i , j , 0)
          if(res)return res
      }
  }

  return false

  function find(i:number,j:number,cur:number){
      if(i>=row || i < 0)return false
      if(j>=col || j < 0)return false

      let target = board[i][j]
      if(target !== word[cur])return false
      if(cur === word.length-1)return true

      board[i][j] = ""
      const res = find(i+1,j,cur+1)||
                  find(i-1,j,cur+1)||
                  find(i,j+1,cur+1)||
                  find(i,j-1,cur+1)
      board[i][j] = target
      return res
  }
};
