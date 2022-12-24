function isAnagram(s: string, t: string): boolean {
  const map = new Map()
  for (const item of s) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1)
    } else {
      map.set(item, 1)
    }
  }
  for (const item of t) {
    if (map.has(item)) {
      map.set(item, map.get(item) - 1)
    } else {
      return false
    }
  }

  for (const item of map.values()) {
    if (item !== 0) return false
  }
  return true

};

let s = "rat", t = "cat"
console.log(isAnagram(s, t));
