
function deepClone(value, cache = new WeakMap()) {
    if(value===null||typeof value!=="object") return value;

    if(cache.has(value)) return cache.get(value);

    if(value instanceof Date()){
        return new Date(value)
    }

     if(value instanceof RegExp){
        return new RegExp(value.source,value.flags);
    }

     if(value instanceof Map){
         const map=new Map();
         cache.set(value,map)
         for(let [key,val] of Map){
            map.set(deepClone(key,cache),deepClone(value,cache))
         }
         return map
    }

     if(value instanceof Set){
         const s=new Set();
         cache.set(value,s)
         for(let val of s){
            s.add(deepClone(value,cache))
         }
         return s
    }

    const result=Array.isArray(value)?[]:Object.create(Object.getPrototypeOf(value));
     cache.set(value,result)

    Reflect.ownKeys(value).forEach(key=>{
        result[key]=deepClone(value[key],cach)
    })

    return result

}