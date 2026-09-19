
/**
 * 搜索旋转排序数组
 *
 * 一个原本升序的不重复数组，在某个位置发生了旋转。
 *
 * 例如：
 *
 * [0, 1, 2, 4, 5, 6, 7]
 *
 * 旋转后可能变成：
 *
 * [4, 5, 6, 7, 0, 1, 2]
 *
 * 给定旋转后的数组 nums 和目标值 target，找到目标值则返回下标，否则返回 -1。
 *
 * 思路：总有一遍是有序的
 *
 * 时间复杂度：O(log n)
 * 空间复杂度 O(1)
 */

function search2(nums, target) {
    let left=0;
    let right=nums.length-1;
    while(left<=right){
        const middle=Math.floor((left+right)/2);
        if(target===nums[middle]){
            return middle;
        }

        // 左侧有序：升序
        if(nums[left]<=nums[middle]){
            if(nums[left]<=target&&nums[middle]>target){
                right=middle-1
            }else{
                left=middle+1;
            }

        }else{
            // 右侧有序:升序
            if(nums[middle]<target&&nums[right]>=target){
                left=middle+1
            }else{
                right=middle-1;
            }
        }


    }

    return -1;
}