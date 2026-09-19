/**
 * 三数之和：返回所有和为 0 的不重复三元组
 * 给你一个整数数组 nums，找出所有满足下面条件的三元组：
 *  a + b + c === 0
 *
 *  要求：
 * 三个数来自三个不同的位置
 * 结果中不能出现重复的三元组
 * 返回的是数字，不是数组下标
 * @param nums
 */


/**
 * 时间复杂度：O(n^2)
 * 去重 Map 的额外空间：O(k)，k 为答案数量
 * @param nums
 * @returns {any[]}
 */
function threeSum(nums) {
    const arr=nums.sort((a,b)=>a-b);
    const result=new Map()
    for(let left=0;left<nums.length-2;left++){
        let right=nums.length-1;
        let middle=left+1;
        while(middle<right){
            const sum=nums[left]+nums[right]+nums[middle];
            const r=[nums[left],nums[middle],nums[right]]
            if(sum===0){
                result.set(r.join(","),r);
                right--;
                middle++;
            }else if(sum>0){
                right--;
            }else{
                middle++;
            }
        }
    }
    return [...result.values()]
}

/**
 * 时间复杂度：O(n^2)
 * 双指针额外空间：O(1)
 * @param nums
 * @returns {any[]}
 */
function threeSum1(nums) {
    nums.sort((a,b)=>a-b);
    const result=[]
    for(let left=0;left<nums.length-2;left++){
        if(nums[left]>0) break;
        if(left>0&&nums[left]===nums[left-1]) continue;

        let right=nums.length-1;
        let middle=left+1;
        while(middle<right){
            const sum=nums[left]+nums[right]+nums[middle];
            const r=[nums[left],nums[middle],nums[right]]
            if(sum===0){
                result.push(r)
                right--;
                middle++;

                while(middle < right &&nums[right]===nums[right+1]){
                    right--;
                }
                while(middle < right &&nums[middle]===nums[middle-1]){
                    middle++;
                }
            }else if(sum>0){
                right--;
            }else{
                middle++;
            }
        }
    }
    return result;
}