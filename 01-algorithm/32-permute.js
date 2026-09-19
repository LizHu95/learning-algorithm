/**
 * 全排列
 *
 * 给定一个不含重复数字的数组 nums，返回它的所有可能排列。
 *
 * 示例：
 *
 * nums = [1, 2, 3];
 *
 * 输出：
 *
 * [
 *   [1, 2, 3],
 *   [1, 3, 2],
 *   [2, 1, 3],
 *   [2, 3, 1],
 *   [3, 1, 2],
 *   [3, 2, 1]
 * ]
 *
 * 顺序不限。
 * @param nums
 */

/**
 * ✅
 * 回溯 + used
 *
 * 先遍历“第 x 个位置放 i”的所有排列；撤销后，再遍历“第 x 个位置放其他未使用元素”的所有排列。
 */
function permute(nums) {
    const result=[];
    const path=[];
    const used=new Array(nums.length).fill(false);

    const backTrack=()=>{
        if(path.length===nums.length){
            result.push([...path]);
            return;
        }

        for (let i=0;i<nums.length;i++){
            if(used[i]){
                continue;
            }

            path.push(nums[i]);
            used[i]=true;
            backTrack();
            path.pop();
            used[i]=false;
        }
    }

    backTrack();
    return result;
}


/**
 * 了解
 * 原地交换回溯
 * @param nums
 * @returns {*[]}
 */
function permute1(nums) {
    const result=[];
    const backtrack=(start)=>{
        if(start===nums.length){
            result.push([...nums]);
            return;
        }
        
        for (let i=start;i<nums.length;i++){
            [nums[start],nums[i]]=[nums[i],nums[start]]
            backtrack(start+1);
            [nums[start],nums[i]]=[nums[i],nums[start]]
        }

    }
    backtrack(0);
    return result;
}