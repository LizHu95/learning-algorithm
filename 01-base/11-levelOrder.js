/**
 * 第 29 题：二叉树的层序遍历
 *
 * 给定一棵二叉树的根节点 root，按照从上到下、从左到右的顺序，逐层返回节点值。
 *
 * 示例：
 *
 *         3
 *        / \
 *       9   20
 *          /  \
 *         15   7
 *
 * 输入：
 *
 * root = [3, 9, 20, null, null, 15, 7];
 *
 * 输出：
 *
 * [
 *   [3],
 *   [9, 20],
 *   [15, 7]
 * ]
 *
 * 节点结构：
 *
 * function TreeNode(value, left = null, right = null) {
 *   this.value = value;
 *   this.left = left;
 *   this.right = right;
 * }
 */
/**
 * ✅BFS + 队列
 * 时间复杂度：O(n)
 * 递归栈空间：O(w)
 * @param root
 *
 */
function levelOrder(root) {
    if(!root) return [];
    const result=[];
    const stack=[root];
    while(stack.length){
        const len=stack.length;
        const r=[];
        for(let i=0;i<len;i++){
            const node=stack.shift();
            r.push(node.value)
            node.left&&stack.push(node.left);
            node.right&&stack.push(node.right);
        }
        result.push(r)
    }
    return result
}