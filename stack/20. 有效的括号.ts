function isValid(s:string) {
  const mappings = new Map<string,string>()
  mappings.set("(",")")
  mappings.set("[","]")
  mappings.set("{","}")
  const stack:string[] = []
   for (let i = 0; i < s.length; i++) {
    if (mappings.has(s[i])) {
      stack.push(mappings.get(s[i]) as string)
    }else{
      if (stack.pop() !== s[i]) return false
    }
   }
   if (stack.length!==0) return false
   return true
};
