class LRUCache {
    max: number
    cache: Map<number, any>
    constructor(capacity: number) {
        this.max = capacity
        this.cache = new Map()
    }

    get(key: number): number {
        if (this.cache.has(key)) {
            const temp = this.cache.get(key)
            this.cache.delete(key)
            this.cache.set(key, temp)
            return temp
        }
        return -1
    }

    put(key: number, value: number): void {
        if (this.cache.has(key)) {
            this.cache.delete(key)
        } else if (this.cache.size >= this.max) {
            // Q: 为什么这里不用 this.cache.delete(key) ?
            // A: 因为这里的 key 是新的 key, 而不是要删除的 key
            // Q:为什么this.cache.keys().next().value 为什么是要删除的 key?
            console.log(this.cache.keys());
            this.cache.delete(this.cache.keys().next().value)
        }
        this.cache.set(key, value)
    }
}

// test

const cache = new LRUCache(3 /* 缓存容量 */);

cache.put(1, 1);
cache.put(2, 2);
cache.put(3, 3); // 缓存是 {1=1, 2=2, 3=3}
console.log(cache.get(1)); // 返回  1

cache.put(4, 4); // 该操作会使得密钥 2 作废，缓存是 {1=1, 3=3, 4=4}
console.log(cache.get(2));
/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/
