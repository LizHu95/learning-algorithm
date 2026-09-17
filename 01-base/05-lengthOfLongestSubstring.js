/**
 * 无重复字符的最长子串
 *
 * 给定一个字符串 s，请找出其中不包含重复字符的最长连续子串，并返回这个子串的长度。
 * @param s
 */


/**
 * 右边界扩张，遇到重复字符时根据 Map 记录的位置跳动左边界
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 * @param s
 * @returns {number}
 */
function lengthOfLongestSubstring(s) {
  const map=new Map();
  let max=0
  let left=0

  const arr=[...s]
  for(let i=0;i<arr.length;i++){
      if(map.has(arr[i])){
          // 左指针 left 只能向右移动，不能倒退。上次出现的位置可能已经在当前窗口外面了
          left=Math.max(map.get(arr[i])+1,left);
      }

      map.set(arr[i],i)
      max=Math.max(max,i-left+1)
  }

  return max
}

console.log("lengthOfLongestSubstring=",lengthOfLongestSubstring("abba"))