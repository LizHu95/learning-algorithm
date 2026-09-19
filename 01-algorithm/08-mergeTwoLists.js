/**
 * 合并两个有序链表
 * @param list1
 * @param list2
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
const node_a_3 = new ListNode(4);
const node_a_2 = new ListNode(2, node_a_3);
const node_a_1 = new ListNode(1, node_a_2);

const node_b_3 = new ListNode(4);
const node_b_2 = new ListNode(3, node_b_3);
const node_b_1 = new ListNode(1, node_b_2);

/**
 * 时间复杂度：O(m+n)
 * 空间复杂度：O(m+n)，来自递归调用栈
 * 没有创建新链表节点，直接复用了原链表节点
 * @param list1
 * @param list2
 * @returns {*}
 */
function mergeTwoLists(list1, list2) {
  if(!list1) return list2;
   if(!list2) return list1;
  const [newHead,nextList1,nextList2]=  list1.val<list2.val?[list1,list1.next,list2]:[list2,list1,list2.next]
  newHead.next=mergeTwoLists(nextList1,nextList2)
  return newHead
}
// mergeTwoLists(node_a_1,node_b_1).print()


/**
 * ✅
 * 时间复杂度：O(m+n)
 * 空间复杂度：O(1)，来自递归调用栈
 * @param list1
 * @param list2
 * @returns {*}
 */
function mergeTwoLists1(list1, list2) {
    const mockNode=new NodeList()
    let tail=mockNode;
    while(list1&&list2){
        if(list1.val>list2.val){
            tail.next=list2;
            list2=list2.next
        }else{
            tail.next=list1;
            list1=list1.next
        }
        tail=tail.next;
    }
    tail.next = list1 || list2;
    return mockNode.next;
}