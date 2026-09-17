/**
 * 返回最大容量
 * @param height
 */


/**
 *
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 * @param height
 * @returns {number}
 */
function maxArea(height) {
  let max=0;
  for(let i=0;i<height.length;i++){
      for(let j=i+1;j<height.length;j++){
          const a=(j-i)*Math.min(height[i],height[j]);
          if(a>max){
              max=a
          }
      }
  }
  return max;
}


/**
 * ✅左右指针从两端开始计算面积，每次淘汰较矮的一侧
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 * @param height
 */
function maxArea1(height){
    let left=0;
    let right=height.length-1;
    let max=0
    while (left<right){
        const isLeftBigger=height[left]>height[right]
        const area=(right-left)*Math.min(height[left],height[right])
        max=Math.max(area,max)
        if(isLeftBigger){
            right--
        }else{
            left++
        }
    }
    return max
}