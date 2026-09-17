/**
 * 二叉树的层序遍历
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
 *
 * @param root
 * @returns {*[][]|*[]}
 */
function levelOrder(root) {
    if(!root) return [];
    const result=[[root.val]];
    const left=levelOrder(root.left);
    const right=levelOrder(root.right);
    for(let i=0;i<Math.max(left.length,right.length);i++){
        const arr = [...(left[i] || []), ...(right[i] || [])];
        result.push(arr)
    }
    return result;
}


/**
 * DFS + level递归
 * 时间复杂度：O(n)
 * 递归栈空间：O(h)
 * 返回结果空间：O(n)
 * @param root
 * @returns {*[][]|*[]}
 */
function levelOrder1(root) {
    const result=[]

    const traverse=(node,level)=>{
        if(!node) return;
        if(!result[level]) result[level]=[];
        result[level].push(node.val)
        traverse(node.left,level+1);
        traverse(node.right,level+1);
    }

    traverse(root,0)
    return result;
}


/**
 * ✅BFS + 队列
 * 时间复杂度：O(n)
 * 递归栈空间：O(w)
 * @param root
 * @returns {*[][]|*[]}
 */
function levelOrder2(root) {
    if(!root) return [];
    const result=[];
    const queue=[root]
    while(queue.length){
        const levelSize=queue.length;
        const currentLevel=[]
        for(let i=0;i<levelSize;i++){
            const node=queue.shift();
            currentLevel.push(node.val)

            if(node.left){
                queue.push(node.left);
            }

            if(node.right){
                queue.push(node.right)
            }
        }
        result.push(currentLevel)
    }
    return result;
}