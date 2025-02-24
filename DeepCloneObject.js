function deepclone(copiedObject, map = new WeakMap()) {
    
    if(typeof copiedObject !== "object" || copiedObject === null ) return copiedObject;
    
    // handle circular reference
    if(map.has(copiedObject)) {
        return map.get(copiedObject);
    }
    
    if(copiedObject instanceof Date) {
        return new Date(copiedObject);
    }
    
    if(copiedObject instanceof RegExp) {
        return new RegExp(copiedObject);
    }
    
    if(Array.isArray(copiedObject)) {
        const clone = [];
        map.set(copiedObject, clone);
        for(const item of copiedObject) {
            clone.push(deepclone(item))
        }
        return clone;
    }
    
    let clone = {};
    
    map.set(copiedObject, clone);
    for(const key in copiedObject) {
        if(copiedObject.hasOwnProperty(key)) {
         clone[key] = deepclone(copiedObject[key]); 
        }
    }
    return clone
};
