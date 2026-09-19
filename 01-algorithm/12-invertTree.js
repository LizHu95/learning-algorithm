/**
 * 翻转二叉树
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
 * 时间复杂度：O(n)，每个节点处理一次
 * 递归栈空间：O(h)
 * 平衡树：O(log n)
 * 倾斜树：O(n)
 * @param root
 * @returns {*}
 */
function invertTree(root) {
  if(!root) return root;

  const newRight=invertTree(root.left);
  const newLeft=invertTree(root.right);

  root.left=newLeft;
  root.right=newRight;
  return root
}