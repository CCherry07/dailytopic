function isValid(s: string) {
  const mappings = new Map<string, string>()
  mappings.set("(", ")")
  mappings.set("[", "]")
  mappings.set("{", "}")
  const stack: string[] = []
  for (let i = 0; i < s.length; i++) {
    if (mappings.has(s[i])) {
      stack.push(mappings.get(s[i])!)
    } else {
      if (stack.pop() !== s[i]) return false
    }
  }
  return stack.length === 0 ? true : false
};
