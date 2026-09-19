/**
 * 有效的字母异位词
 * 场景：比较两份商品标签是否一致
 */
/**
 * 时间复杂度：O(n)，分别遍历两个字符串
 * 空间复杂度：O(k)，k 是不同字符数量
 * 最坏情况下 k=n，因此也可写成 O(n)
 * @param s
 * @param t
 * @returns {boolean}
 */
function isAnagram(s, t) {
  if(s.length!==t.length ) return false

    const map=new Map();
  [...s].forEach((v,i)=>{
      if(map.has(v)){
          map.set(v,map.get(v)+1);
      }else{
          map.set(v,1);
      }
  });

 const r= [...t].some((v,i)=>{
        if(map.has(v)){
            map.set(v,map.get(v)-1);
            return false;
        }else{
            return true;
        }
  })

    if(r){
        return false
    }

    for([k,v ]of map){
        if(v!==0){
            return false
        }
    }

    return true
}

/**
 * 用 Map 统计字符频次，再通过增减计数判断组成是否相同
 *
 * 时间复杂度：O(nlogn)，主要来自排序
 * 空间复杂度：O(n)，字符数组和排序结果需要额外空间
 * @param s
 * @param t
 * @returns {boolean}
 */
function isAnagram2(s, t) {
    if(s.length!==t.length ) return false
    const [a,b]=[[...s].sort(),[...t].sort()]
    return a===b;
}

console.log("isAnagram",isAnagram("anagram","nagaram"))
console.log("isAnagram2",isAnagram2("anagram","nagaram"))