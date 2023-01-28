function replaceSpace(s: string): string {
  const reg = /[\s]/g
  return s.replace(reg, '%20')
};
