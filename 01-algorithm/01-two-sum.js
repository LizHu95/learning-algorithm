/**
 * 两数之和
 * 场景：
 * - 找两件商品，价格总和等于预算
 * - 找两条性能记录，阻塞时间合计达到阈值
 */


const arr=[2,7,11,15,1,8,5,5,5,1,9];
const target=10;

const twoSum1=(nums,target)=>{
    const index_arr=[];

    for(let i=0;i<nums.length;i++){
        const diff=target-nums[i];
        for(let j=i+1;j<nums.length;j++){
            if(nums[j]==diff){
                index_arr.push([i,j]);
            }
        }
    }
    return index_arr;
}
console.log(twoSum1(arr,target).join('\n'))


const twoSum2=(nums,target)=>{
    const map=new Map();
    const result=new Map();
    nums?.forEach((item,index)=>{

        if(map.has(item)){
            return map.set(item,[...map.get(item),index])
        }
       map.set(item,[index])
    })

    nums.forEach((item,index)=>{
        if(map.has(target-item)){
            const r=map.get(target-item).filter(item=>item!=index)
            if(r.length>0){
                r.forEach((v,i)=>{
                    result.set([index,v].sort().join(','),[index,v]);
                })
            }
        }
    })
    return result.values()
}

console.log(twoSum2(arr,target))
console.log(twoSum2([1, 1, 2, 2],3))



/**
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 */
const twoSum3=(nums,target)=>{
    let r=[]
    nums.some((item,index)=>{
        for(let i=index+1; i< nums.length; i++){
             if(nums[i]+item===target&&i!==index) {
                 r = [index, i]
                 return true;
             }
        }
    })
    return r;
}
console.log("twoSum3",twoSum3(arr,target))


/**
 * ✅ 遍历数组，用 Map 记录已出现数字的下标，并查找当前数字的补数
 *
 * 时间复杂度：平均 O(n)
 * 空间复杂度：O(n)
 * @param nums
 * @param target
 * @returns {*[]}
 */
const twoSum4=(nums,target)=>{
   const map=new Map();
   let r=[]
   nums.some((item,index)=>{
        if(map.has(target-item)){
            r=[map.get(target-item),index];
            return true;
        }
       map.set(item,index)
   })
   return r
}

console.log("twoSum4",twoSum4(arr,target))