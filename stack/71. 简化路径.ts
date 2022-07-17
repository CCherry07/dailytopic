function simplifyPath(path: string): string {
  const stack:string[] = []
  const BS = ".."
  path.split("/").forEach(s=>{
      if(s===BS)return stack.pop()
      s && s!=="." && stack.push(s)
  })
  return "/"+stack.join("/")
};
