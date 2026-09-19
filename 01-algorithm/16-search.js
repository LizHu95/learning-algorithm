/**
 * 二分查找
 *
 * 给定一个按照升序排列、元素互不重复的整数数组 nums，以及目标值 target。
 *
 * 如果找到目标值，返回它的下标；否则返回 -1。
 */

function search(nums, target) {
    let left=0;
    let right=nums.length-1;

    while(left<=right){
        const middle=Math.floor((left+right)/2)
        if(nums[middle]===target){
            return middle;
        }else if(nums[middle]>target){
            right=middle-1;
        }else{
            left=middle+1;
        }

    }

    return -1;
}
