/**
 * 二叉树的最大深度
 */

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const TreeNode3_1=new TreeNode(15);
const TreeNode3_2=new TreeNode(7);
const TreeNode2_2=new TreeNode(20,TreeNode3_1,TreeNode3_2);
const TreeNode2_1=new TreeNode(9);
const TreeNode1_1=new TreeNode(3,TreeNode2_1,TreeNode2_2);


/**
 * 时间复杂度：O(n)，每个节点访问一次
 * 空间复杂度：O(h)，h 是树的高度，来自递归栈
 * 平衡二叉树：O(log n)
 * 完全倾斜的树：O(n)
 * @param root
 * @returns {number}
 */
function maxDepth(root) {
  if(!root) return 0;
  const left=maxDepth(root.left);
  const right=maxDepth(root.right);
  return Math.max(left,right)+1
}
