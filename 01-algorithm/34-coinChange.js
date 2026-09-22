/**
 * 零钱兑换
 *
 * 给定不同面额的硬币数组 coins 和总金额 amount，每种硬币可以使用任意次数。
 *
 * 请返回凑成该金额所需的最少硬币数量。如果无法凑成，返回 -1。
 *
 * 示例一：
 *
 * coins = [1, 2, 5];
 * amount = 11;
 *
 * 输出：
 *
 * 3
 *
 * 因为：
 *
 * 11 = 5 + 5 + 1
 *
 * 示例二：
 *
 * coins = [2];
 * amount = 3;
 *
 * 输出：
 *
 * -1
 *
 * 示例三：
 *
 * coins = [1];
 * amount = 0;
 *
 * 输出：
 *
 * 0
 *
 * 核心类型：动态规划、完全背包。
 *
 * 先思考两个问题：
 *
 * 1. dp[i] 应该表示什么？
 * 2. 假设最后使用了一枚 coin，dp[i] 可以由哪个状态推导出来？
 *
 * 提示：
 *
 * dp[i] = Math.min(
 *   dp[i],
 *   dp[i - coin] + 1
 * );
 */

/**
 * 时间复杂度：O(amount × coins.length)
 * 空间复杂度：O(amount)
 *
 * dp 数组的下标就是目标金额，从金额 0 一直计算到 amount。
 * 计算每个金额 i 时，尝试把每一种硬币作为“最后一枚硬币”：
 *
 * @param coins
 * @param amount
 * @returns {number|any}
 */
function coinChange(coins, amount) {
   const dp=new Array(amount+1).fill(Infinity);
   dp[0]=0;
   for(let cur=1;cur<=amount;cur++){
      for(const coin of coins){
         if(coin<=cur){
            dp[cur]=Math.min(dp[cur],dp[cur-coin]+1)
         }
      }
   }
   return dp[amount]===Infinity?-1:dp[amount];
}