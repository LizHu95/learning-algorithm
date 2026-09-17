/**
 * 搜索二维矩阵
 *
 * 给定一个 m × n 的矩阵 matrix，满足：
 *
 * 每行从左到右升序排列
 * 每行第一个元素大于上一行最后一个元素
 *
 * 判断 target 是否存在。
 *
 * 例如：
 *
 * matrix = [
 *   [1,  3,  5,  7],
 *   [10, 11, 16, 20],
 *   [23, 30, 34, 60]
 * ];
 *
 * target = 3;
 *
 * 返回：
 *
 * true
 *
 * 如果：
 *
 * target = 13;
 *
 * 返回：
 *
 * false
 *
 * 核心思路：
 *
 * 虽然是二维矩阵，但整体可以看成一个有序数组：
 *
 * [1, 3, 5, 7, 10, 11, 16, 20, 23, 30, 34, 60]
 *
 * 不需要真的展开，可以用一维下标进行二分查找。
 *
 * 假设一共有 rows 行、columns 列，一维下标是 middle：
 *
 * const row = Math.floor(middle / columns);
 * const column = middle % columns;
 *
 * const value = matrix[row][column];
 *
 * 二分查找的范围：
 *
 * let left = 0;
 * let right = rows * columns - 1;
 *
 * 你可以基于标准二分查找完成：
 *
 * function searchMatrix(matrix, target) {
 *   // 处理空矩阵
 *
 *   // 确定行数、列数
 *
 *   // 对 0 ～ rows * columns - 1 二分查找
 * }
 */


/**
 * 时间复杂度：O(log(m × n))
 * 空间复杂度：O(1)
 * @param matrix
 * @param target
 * @returns {boolean}
 */
function searchMatrix(matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }

    const row = matrix.length;
    const column=matrix[0].length
    let left=0;
    let right=row*column-1;


    while(left<=right){
        const middle=Math.floor((left+right)/2);
        const mRow=Math.floor(middle/column);
        const mColumn=middle%column;
        if(matrix[mRow][mColumn]===target){
            return true;
        }

        if(matrix[mRow][mColumn]>target){
            right=middle-1;
        }else{
            left=middle+1;
        }
    }

    return false;
}