/**
 * BST 中第 K 小的元素
 *
 * 给定一棵二叉搜索树 root 和整数 k，返回树中第 k 小的节点值。
 *
 * 二叉搜索树满足：
 *
 * 左子树的值 < 当前节点的值 < 右子树的值
 *
 * 示例：
 *
 *       3
 *      / \
 *     1   4
 *      \
 *       2
 * k = 1;
 *
 * 输出：
 *
 * 1
 *
 * 如果：
 *
 * k = 3;
 *
 * 输出：
 *
 * 3
 *
 * 核心提示：
 *
 * 对 BST 进行中序遍历，访问顺序天然是从小到大。
 *
 * 中序遍历顺序：
 *
 * 左子树 → 当前节点 → 右子树
 *
 * 上面的树会得到：
 *
 * [1, 2, 3, 4]
 *
 * 因此第 k 小的元素就是：
 *
 * values[k - 1]
 *
 * 注意 k 从 1 开始，而数组下标从 0 开始。
 *
 *
 */
/**
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 * @param root
 * @param k
 * @returns {*}
 */
function kthSmallest(root, k) {
    const search=(root)=>{
        if(!root) return [];
        return [...search(root.left),root.value,...search(root.right)]
    }

   const result=search(root);
   return result[k-1]
}

/**
 * ✅ 中序遍历 BST 是升序的，每访问一个节点就让 k--，当 k === 0 时，该节点就是第 k 小的元素。
 *
 * 访问当前节点后进入右子树，再寻找右子树中最左边、也就是最小的节点。
 * 时间复杂度：最坏 O(n)，找到第 k 个后提前结束
 * 空间复杂度：O(h)，h 为树的高度
 * @param root
 * @param k
 */
function  kthSmallest2(root, k) {
    const stack=[];
    let node=root;
    while(node || stack.length){
        while(node){
            stack.push(node);
            node=node.left;
        }

        node=stack.pop();
        k--;

        if(k===0){
            return node.value
        }
        node=node.right;
    }
}