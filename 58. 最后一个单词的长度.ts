function lengthOfLastWord(s: string): number {
  const ns = s.trimEnd()
  const index = ns.lastIndexOf(" ")
  return (ns.length - index - 1)
};
