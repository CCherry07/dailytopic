function reverseWords(s: string): string {
  return s.split(' ').reverse().filter(Boolean).join(' ');
};
