/**
 * 移动零
 * @param nums
 * 必须在原数组上修改
 * 不能复制一个新数组
 * 尽量减少操作次数
 *
 * 场景：
 * - 清理上传队列中的失败任务
 */


/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 * @param nums
 * @returns {*[]}
 */
function moveZeroes1(nums){
    let arr=[];
    let arr1=[];

    for(let i=0;i<nums.length;i++){
        if(nums[i]===0){
            arr1.push(0)
        }else{
            arr.push(nums[i])
        }
    }

    return [...arr,...arr1]
}
console.log("moveZeroes1",moveZeroes1([123,2,0,2,1,0]))

/**
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 * @param nums
 */
function moveZeroes2(nums){
    let zeroNum=0
    for(let i=0;i<nums.length-zeroNum;i){
        if(nums[i]===0){
            zeroNum++
            nums.splice(i,1)
            nums.push(0)
        }else{
            i++
        }
    }
}
console.log("moveZeroes1",moveZeroes2([123,2,0,2,1,0]))

/**
 * 用快指针遍历非零元素、慢指针维护写入位置，最后补零
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 * @param nums
 */
function moveZero3(nums){
    let zeroNums=0;
    for(let fast=0;fast<nums.length;fast++){
        if(nums[fast]===0){
            zeroNums++
        }else if(zeroNums){
            nums[fast-zeroNums]=nums[fast]
            nums[fast]=0
        }
    }

    console.log("moveZero3",nums)
}
moveZero3([123,2,0,2,1,0])
moveZero3([0, 1, 0, 3, 12])
