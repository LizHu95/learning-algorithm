/**
 * 最小覆盖子串
 *
 * 核心方法：
 *
 * 滑动窗口 + 字符频次统计
 *
 * 题目要求：
 *
 * 给定两个字符串 s 和 t，在 s 中找到包含 t 所有字符的最短子串。
 *
 * 例如：
 *
 * s = "ADOBECODEBANC";
 * t = "ABC";
 *
 * 输出：
 *
 * "BANC"
 *
 * 注意：
 *
 * s = "AAAB";
 * t = "AAB";
 *
 * 答案需要包含两个 A 和一个 B，所以不能只判断字符是否出现，还要统计每个字符所需的数量。
 *
 * 这道题是之前「无重复字符的最长子串」和「长度最小子数组」的进阶组合。核心过程：
 *
 * 右指针扩张，直到窗口满足要求
 * → 左指针收缩，寻找最短合法窗口
 * → 不满足后继续扩张
 *
 * @param s
 * @param t
 */


/**
 * 时间复杂度：O(s.length + t.length)
 * 空间复杂度：O(t 中不同字符数量)
 * @param s
 * @param t
 * @returns {string|*|string}
 *
 * 使用可变长度滑动窗口，右指针不断扩张并用 Map 统计窗口内字符频次；
 * 当窗口满足 t 的全部字符数量要求时，移动左指针持续收缩并更新最短结果；
 * 一旦窗口不再满足条件，再继续移动右指针。
 */
function minWindow(s, t) {
    if(t.length>s.length) return '';

    const need=new Map();
    const window=new Map();
    for (const char of t){
        need.set(char,(need.get(char)||0)+1)
    }

    let left=0;
    let valid=0;
    let resultStart=0;
    let minLength=Infinity;

    for(let right=0;right<s.length;right++){
        const rightChar=s[right];
        if(need.has(rightChar)){
            window.set(rightChar,(window.get(rightChar)||0)+1);
        }

        if(window.get(rightChar)===need.get(rightChar)){
            valid++
        }

        while(valid===need.size){
            const currentLength=right-left+1;
            if(currentLength<minLength){
                minLength=currentLength;
                resultStart=left;
            }

            const leftChar=s[left];
            if(need.has(leftChar)){
                if(window.get(leftChar)===need.get(leftChar)){
                    valid--
                }

                window.set(leftChar,window.get(leftChar)-1)
            }
        }

    }

    return minLength===Infinity?"":s.slice(resultStart,resultStart+minLength);

}