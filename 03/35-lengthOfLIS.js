/**
 * 最长递增子序列
 *
 * 给定整数数组 nums，返回其中最长严格递增子序列的长度。
 *
 * “子序列”不要求元素连续，但必须保持原来的相对顺序。
 *
 * 示例一：
 *
 * nums = [10, 9, 2, 5, 3, 7, 101, 18];
 *
 * 输出：
 *
 * 4
 *
 * 其中一个最长递增子序列是：
 *
 * [2, 3, 7, 101]
 *
 * 示例二：
 *
 * nums = [0, 1, 0, 3, 2, 3];
 *
 * 输出：
 *
 * 4
 *
 * 对应：
 *
 * [0, 1, 2, 3]
 *
 * 示例三：
 *
 * nums = [7, 7, 7, 7];
 *
 * 输出：
 *
 * 1
 *
 * 因为要求严格递增，相同数字不能接在一起。
 *
 * 先使用动态规划思考：
 *
 * dp[i]：以 nums[i] 作为最后一个元素的最长递增子序列长度
 *
 * 初始值：
 *
 * dp[i] = 1;
 *
 * 因为每个数字单独都能形成长度为 1 的子序列。
 *
 * 计算 dp[i] 时，需要检查前面的每个位置 j：
 *
 * 如果 nums[j] < nums[i]
 * 说明 nums[i] 可以接在以 nums[j] 结尾的递增子序列后面
 *
 * 状态转移提示：
 *
 * dp[i] = Math.max(dp[i], dp[j] + 1);
 *
 * 注意最终答案不一定是 dp 的最后一项，而是：
 *
 * Math.max(...dp);
 */


/**
 * 先用右侧下标 i 确定当前结尾，再用下标 j 遍历 i 左边的所有元素。
 * 如果 nums[j] < nums[i]，说明当前元素可以接在以 nums[j] 结尾的递增子序列后面，于是用 dp[j] + 1 更新 dp[i]。
 * 最后返回整个 dp 数组中的最大值。
 * 时间复杂度：O(n²)
 * 空间复杂度：O(n)
 * @param nums
 */
function lengthOfLIS(nums) {
    if(nums.length===0) return 0;
    const dp=new Array(nums.length).fill(1);

    for (let i=0;i<nums.length;i++){
        for (let j=0;j<i;j++){
            if(nums[j]<nums[i]){
                dp[i]=Math.max(
                    dp[i],
                    dp[j]+1
                )
            }
        }
    }

    return Math.max(...dp);
}