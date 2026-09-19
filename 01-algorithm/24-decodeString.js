/**
 * 字符串解码
 *
 * 给定一个经过编码的字符串，编码规则为：
 *
 * k[encodedString]
 *
 * 表示方括号内部的字符串重复 k 次。
 *
 * 输入保证格式合法，并且数字只用于表示重复次数。
 *
 * 示例一：
 *
 * 输入："3[a]2[bc]"
 * 输出："aaabcbc"
 *
 * 示例二：
 *
 * 输入："3[a2[c]]"
 * 输出："accaccacc"
 *
 * 解码过程：
 *
 * a2[c] → acc
 * 3[acc] → accaccacc
 *
 * 示例三：
 *
 * 输入："2[abc]3[cd]ef"
 * 输出："abcabccdcdcdef"
 * @param s
 */

/**
 * 时间：O(n + 解码后字符串长度)
 * 空间：O(括号嵌套深度 + 解码结果长度)
 * @param s
 * @returns {string}
 *
 * 双栈
 */
function decodeString(s) {
    const countStack=[];
    const stringStack=[];
    let currentNumber=0;
    let currentString="";
    for(const char of s){
        if(char>="0"&&char<="9"){
            currentNumber=currentNumber*10+Number(char)
        }
        else if(char==="["){
            countStack.push(currentNumber);
            stringStack.push(currentString);

            currentNumber=0;
            currentString='';
        }
        else if(char==="]"){
            const repeatCount=countStack.pop();
            const previousStr=stringStack.pop();
            currentString=previousStr+currentString.repeat(repeatCount);
        }else{
            currentString+=char
        }
    }
    return currentString;
}