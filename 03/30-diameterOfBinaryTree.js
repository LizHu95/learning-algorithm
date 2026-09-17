/**
 * 二叉树的直径
 *
 * 给定一棵二叉树，返回它的直径。
 *
 * 二叉树的直径是：
 *
 * 任意两个节点之间最长路径所经过的边数。
 *
 * 最长路径不一定经过根节点。
 *
 * 示例：
 *
 *         1
 *        / \
 *       2   3
 *      / \
 *     4   5
 *
 * 最长路径可以是：
 *
 * 4 → 2 → 1 → 3
 *
 * 经过 3 条边，所以返回：
 *
 * 3
 *
 * 节点结构：
 *
 * function TreeNode(value, left = null, right = null) {
 *   this.value = value;
 *   this.left = left;
 *   this.right = right;
 * }
 *
 */


/**
 * 次 DFS + 全局最大值
 *
 * 每个节点只访问一次，时间复杂度 O(n)。
 * 不会重复计算子树深度。
 * 直接复用了你已经掌握的“二叉树最大深度”。
 * 模板可以迁移到二叉树最大路径和、平衡二叉树等题。
 * @param root
 * @returns {number}
 *
 * 时间复杂度为 O(n)，因为每个节点只访问一次；
 * 空间复杂度为 O(h)，来自递归栈，平衡树为 O(log n)，最坏退化为 O(n)。
 */
function diameterOfBinaryTree(root) {
    if(!root) return 0;
    let maxV=0;

    const getDepth=node=>{
        if(!node) return 0;
        const leftDepth=getDepth(node.left);
        const rightDepth=getDepth(node.right);
        maxV=Math.max(maxV,leftDepth+rightDepth);

        return Math.max(leftDepth,rightDepth)+1
    }

    getDepth(root)
    return maxV;
}