function mergeAlternately(word1: string, word2: string): string {
  const len = Math.max(word1.length, word2.length)
  let flag = ''
  let newRes = ''
  for (let i = 0; i < len; i++) {
    word1[i] ? newRes += word1[i] : flag = word2
    word2[i] ? newRes += word2[i] : flag = word1
    if (flag) {
      newRes += flag.slice(i)
      return newRes
    }
  }
  return newRes
};
