/**
 * 每日温度
 *
 * 给定一个整数数组 temperatures，表示每天的温度。
 *
 * 请返回数组 answer，其中：
 *
 * answer[i]
 *
 * 表示第 i 天之后，要等待多少天才会出现更高温度；如果之后没有更高温度，则为 0。
 *
 * 示例：
 *
 * temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
 *
 * 输出：
 *
 * [1, 1, 4, 2, 1, 1, 0, 0]
 *
 * 解释：
 *
 * 第 0 天温度 73：等 1 天遇到 74
 * 第 1 天温度 74：等 1 天遇到 75
 * 第 2 天温度 75：等 4 天遇到 76
 * 第 3 天温度 71：等 2 天遇到 72
 * 第 6 天温度 76：后面没有更高温度，所以是 0
 *
 * 思路：单调栈
 * 栈顶温度一定是最小的
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */
function dailyTemperatures(temperatures){
    const stack=[0];
    const result=Array(temperatures.length).fill(0);
    // const result=Array.from({ length: temperatures.length },()=>0);
    for(let i=1;i<temperatures.length;i++){
        const len=stack.length;
        while(stack.length>0&&temperatures[i]>temperatures[stack[stack.length-1]]){
            const index=stack.pop();
            result[index]=i-index;
        }
        stack.push(i)
    }

    return result;
}