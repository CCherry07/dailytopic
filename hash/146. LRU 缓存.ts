class LRUCache {
  max:number
  cache:Map<number,any>
  constructor(capacity: number) {
      this.max = capacity
      this.cache = new Map()
  }

  get(key: number): number {
      if(this.cache.has(key)){
          const temp = this.cache.get(key)
          this.cache.delete(key)
          this.cache.set(key,temp)
          return temp
      }
      return -1
  }

  put(key: number, value: number): void {
      if(this.cache.has(key)){
          this.cache.delete(key)
      }else if(this.cache.size >=this.max){
          this.cache.delete(this.cache.keys().next().value)
      }
      this.cache.set(key,value)
  }
}

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/
