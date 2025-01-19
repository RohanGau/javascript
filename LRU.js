// LRU cache
class MyLRUStorage {
    /**   * @param {number} capacity   * @param {() => number} getTimestamp   */
    constructor(capacity, getTimestamp) {
        this.LRU = new Map();
        this.persistentSet = new Set();
        this.totalSize = 0;
        this.capacity = capacity;
        this.getTimestamp = getTimestamp
    } /**   * @param {string} origin   * @returns {OriginData | undefined}   */
    getData(origin) {
        if (!this.LRU.has(origin)) {
            return undefined;
        }
        const size = this.LRU.get(origin);
        this.LRU.delete(origin);
        this.LRU.set(origin, size);
        return size;
    } /**   * @param {string} origin   * @param {number} size   * @returns {boolean}   */
    setData(origin, size) {
        if (size > this.capacity) {
            return false;
        }
        const originSize = this.LRU.get(origin);
        if (originSize && originSize.size >= size) {
            this.LRU.delete(origin);
            this.totalSize = this.totalSize + size - originSize.size;
            this.LRU.set(origin, {
                size
            });
            return true;
        }
        const keysToRemoveItr = [...this.LRU.keys()].filter(key => {
            return !this.persistentSet.has(key)
        }).values();
        while (this.totalSize + size > this.capacity) {
            const evicted = this.evict(keysToRemoveItr);
            if (!evicted) {
                return false;
            }
        }
        this.LRU.set(origin, {
            size
        });
        this.totalSize += size;
        return true;
    }
    evict(keysToRemoveItr) {
        const currentKey = keysToRemoveItr.next().value;
        if (!currentKey) {
            return false;
        }
        this.totalSize -= this.LRU.get(currentKey).size;
        this.LRU.delete(currentKey);
        return true;
    } /**   * @param {string} origin   * @returns {void}   */
    clearData(origin) {
        this.persistentSet.delete(origin);
        const size = this.LRU.get(origin);
        if (size && size.size) {
            this.totalSize -= size.size;
        };
        this.LRU.delete(origin);
    } /**   * @param {string} origin   * @returns {void}   */
    makePersistent(origin) {
        this.persistentSet.add(origin)
    }
}
