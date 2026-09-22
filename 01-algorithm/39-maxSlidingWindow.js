/**
 * 滑动窗口最大值
 *
 * 给定数组和窗口大小 k：
 *
 * nums = [1, 3, -1, -3, 5, 3, 6, 7];
 * k = 3;
 *
 * 窗口依次移动：
 *
 * [1, 3, -1]  → 最大值 3
 * [3, -1, -3] → 最大值 3
 * [-1, -3, 5] → 最大值 5
 * [-3, 5, 3]  → 最大值 5
 * [5, 3, 6]   → 最大值 6
 * [3, 6, 7]   → 最大值 7
 *
 * 返回：
 *
 * [3, 3, 5, 5, 6, 7]
 * @param nums
 * @param k
 */
function maxSlidingWindow(nums, k) {
    if( nums.length===0 || k===0 ) return [];
    const result=[];
    const queue=[];  // 保存元素下标
    let front=0;

    for(let i=0;i<nums.length;i++){
        // 1. 删除已经离开窗口的队头下标
        while(
            front<queue.length &&
            queue[front]<=i-k
        ){
            front++;
        }

        // 2. 保持队列对应的数值单调递减
        while(
            front<queue.length &&
            nums[queue[queue.length-1]]<=nums[i]
        ) {
            queue.pop()
        }

         // 3. 当前元素下标入队
        queue.push(i);

        // 4. 窗口形成后，队头对应当前窗口最大值
        if (i >= k - 1) {
          result.push(nums[queue[front]]);
        }

    }

    return result;
}