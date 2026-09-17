/**
 * 组合总和
 *
 * 给定无重复正整数数组 candidates 和目标值 target，找出所有数字和等于 target 的组合。
 *
 * 每个数字可以重复使用，组合不能重复。
 *
 * candidates = [2, 3, 6, 7];
 * target = 7;
 *
 * 输出：
 *
 * [
 *   [2, 2, 3],
 *   [7]
 * ]
 *
 *
 * 核心核心参数：
 *
 * back/antlrtrack(start, remaining)
 *
 * 含义：
 *
 * start：当前可以从不从哪个下标开始选择
 * remaining：距离 target 还差多少
 *
 * 递归出口：
 *
 * remaining === 0 // 找到答案
 * remaining < 0   // 当前路径超过 target
 *
 * 因为同一个数字可以重复使用，选择 candidates[i[i] 后应继续调用：
 *
 * backtrack(i, remaining - candidates[i]);
 *
 * 而不是 i + 1。
 *
 * 你先尝试完整编码，重点写出：
 *
 * 选择
 * → 递归
 * → 撤销选择
 */


/**
 * 在当前位置依次尝试每个可选元素：选择元素 → 递归处理剩余目标 → 撤销选择 → 尝试下一个元素。
 * @param candidates
 * @param target
 */
function combinationSum(candidates, target) {
    const result=[];
    const path=[];

    const backTrack = (start,remaining)=>{
        if(remaining===0){
            result.push([...path]);
            return;
        }

        if(remaining<0){
            return;
        }

        for(let i=start;i<candidates.length;i++){
            // 选择当前数字
            path.push(candidates[i]);
            // 传 i：当前数字可以重复使用
            backTrack(i,remaining-candidates[i]);
            // 撤销选择
            path.pop()
        }

    }

    backTrack(0,target);
    return result;
}