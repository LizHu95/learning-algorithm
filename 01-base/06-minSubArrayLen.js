/**
 * 题目：长度最小的子数组
 * 给定一个正整数数组 nums 和一个正整数 target，找出数组中满足以下条件的最短连续子数组：
 * 子数组元素之和 >= target
 * 返回它的长度。如果不存在，返回 0。
 */

/**
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 * @param target
 * @param nums
 */
function minSubArrayLen(target, nums) {
    let minLen=Infinity
    for(let i=0;i<nums.length;i++){
        let sum=nums[i];
        if(sum>=target) return 1;
        for(let j=i+1;j<nums.length;j++){
            sum+=nums[j];
            if(sum>=target){
                minLen=Math.min(minLen,j-i+1)
                break;
            }
        }
    }
    return minLen===Infinity?0:minLen;
}


/**
 * 从左侧建立窗口，右边界不断向右扩张；一旦窗口和满足 sum >= target，就让左边界尽可能向右移动，使窗口尽可能短。
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 * @param target
 * @param nums
 * @returns {number|number}
 */
function minSubArrayLen2(target, nums){
    let minLen=Infinity;
    let start=0;
    let sum=0
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        while(sum>=target){
            minLen=Math.min(minLen,i-start+1);
            sum-=nums[start];
            start++;
        }
    }
    return  minLen===Infinity?0:minLen;
}