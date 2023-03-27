function simplifyPath(path: string): string {
  const stack: string[] = []
  const BS = ".."
  console.log(path.split('/').filter(Boolean));
  path.split("/").forEach(s => {
    if (s === BS) return stack.pop()
    s && s !== "." && stack.push(s) //'./'直接跳过下一个字符
    console.log(stack);

  })
  return "/" + stack.join("/")
};

const path = "/a/./b/../../c/"

simplifyPath(path)
