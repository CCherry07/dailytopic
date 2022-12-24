function isAnagram(s: string, t: string): boolean {
  let map = new Map()
  for (let item of s) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1)
    } else {
      map.set(item, 1)
    }
  }
  for (let item of t) {
    if (map.has(item)) {
      map.set(item, map.get(item) - 1)
    } else {
      return false
    }
  }
  for (let item of map.values()) {
    if (item !== 0) {
      return false
    }
  }
  return true
};

let s = "rat", t = "cat"
console.log(isAnagram(s, t));
