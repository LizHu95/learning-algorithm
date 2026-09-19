/**
 * 反转链表
 */
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }

  print(){
      console.log("node",this.val)
     this.next && this.next.print();
  }
}
const node3 = new ListNode(3);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

console.log("测试")
node1.print()

/**
 * 递归法
 * 时间复杂度：\(O(n)\)
 * 空间复杂度：\(O(n)\)，递归调用栈
 * @param head
 * @returns {*}
 */
function reverseList(head) {

    const reverse=(cur,prev)=>{
        if(!cur) return null;
        const next=cur.next;
        cur.next=prev;
        if(next){
            return reverse(next,cur);
        }else{
            return cur;
        }
    }
    return reverse(head,null)
}

// console.log("================")
// console.log("================")
// console.log("递归法")
// console.log("================")
// console.log("================")
// reverseList(node1).print()
// console.log("================")
// console.log("================")


/**
 * 经典递归法
 * 先修改“下一个节点”的 next，让它指回当前节点；再把当前节点原来的 next 断开。
 *
 * 时间复杂度：\(O(n)\)
 * 空间复杂度：\(O(n)\)，递归调用栈
 */
function reverseList1(head) {
    if(!head||!head.next) return head;

    const newHead=reverseList1(head.next)

    head.next.next=head;
    head.next=null;
    return newHead;
}

console.log("================")
console.log("================")
console.log("经典递归法")
console.log("================")
console.log("================")
reverseList1(node1).print()
console.log("================")
console.log("================")