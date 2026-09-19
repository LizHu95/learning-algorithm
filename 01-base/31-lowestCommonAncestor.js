/**
 * 二叉树的最近公共祖先
 *
 * 给定一棵二叉树，以及其中两个节点 p 和 q，找到它们的最近公共祖先。
 *
 * “最近公共祖先”指：
 *
 * 同时是 p 和 q 祖先，并且距离它们最近的节点。
 *
 * 一个节点也可以是它自己的祖先。
 *
 * 示例一：
 *
 *           3
 *         /   \
 *        5     1
 *       / \   / \
 *      6   2 0   8
 *         / \
 *        7   4
 *
 * 输入：
 *
 * p = 节点 5
 * q = 节点 1
 *
 * 输出：
 *
 * 节点 3
 *
 * 因为 5 和 1 分别位于节点 3 的左右子树。
 *
 * 示例二：
 *
 * p = 节点 5
 * q = 节点 4
 *
 * 输出：
 *
 * 节点 5
 *
 * 因为节点 5 本身就是节点 4 的祖先。
 *
 * 节点结构：
 *
 * function TreeNode(value, left = null, right = null) {
 *   this.value = value;
 *   this.left = left;
 *   this.right = right;
 * }
 *
 * 题目保证：
 *
 * p 和 q 都存在于树中
 * p 和 q 是不同节点
 *
 * 提示：递归搜索左右子树。
 *
 * 左子树找到了一个
 * 右子树也找到了一个
 * → 当前 root 就是最近公共祖先
 *
 * 先回答：递归搜索到 root === p 或 root === q 时，为什么可以直接返回当前 root？
 *
 *
 * @param root
 * @param p
 * @param q
 */

/**
 * 时间：O(n)
 * 空间：O(h)
 * @param root
 * @param p
 * @param q
 * @returns {*}
 */
function lowestCommonAncestor(root, p, q) {
    if(!root||root===p||root===q){
        return root;
    }
    const left = lowestCommonAncestor(root.left,p,q);
    const right = lowestCommonAncestor(root.right,p,q);
    if(left&&right){
        return root;
    }
    return left || right;
}