function greatestLetter(s: string): string {
  const AS = s.replace(/[a-z]/g, '').split('').sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0))
  for (let el of AS) {
    if (s.search(el.toLocaleLowerCase()) > -1) {
      return el
    }
  }
  return ''
};
