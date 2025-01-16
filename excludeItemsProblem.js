
/**
 * @param {object[]} items
 * @excludes { Array< {k: string, v: any} >} excludes
 */

/**
 * @param {object[]} items
 * @param { Array< {k: string, v: any} >} excludes
 * @return {object[]}
 */
function excludeItems(items, excludes) {
  const excludeMap = new Map();
  for(let { k, v } of excludes) {
    if(!excludeMap.has(k)) {
      excludeMap.set(k, new Set());
    }
    excludeMap.get(k).add(v);
  }

  return items.filter((item) => {
    return Object.keys(item).every(
      key => !excludeMap.get(key) || !excludeMap.get(key).has(item[key])
    );
  })
}
