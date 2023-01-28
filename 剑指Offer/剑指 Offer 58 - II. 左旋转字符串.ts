function reverseLeftWords(s: string, n: number): string {
  return s.slice(n) + s.slice(0, n)
};
