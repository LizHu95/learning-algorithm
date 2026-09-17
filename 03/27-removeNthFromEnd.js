/**
 * 删除链表倒数第 N 个节点
 * 给定一个单链表的头节点 head 和整数 n，删除链表的倒数第 n 个节点，并返回删除后的头节点。
 *
 * 示例一：
 *
 * 输入链表：1 → 2 → 3 → 4 → 5
 * n = 2
 *
 * 输出链表：1 → 2 → 3 → 5
 *
 * 因为倒数第 2 个节点是：
 *
 * 4
 *
 * 示例二：
 *
 * 输入链表：1
 * n = 1
 *
 * 输出：空链表
 *
 * 示例三：
 *
 * 输入链表：1 → 2
 * n = 1
 *
 * 输出链表：1
 *
 * 节点结构：
 *
 * function ListNode(value, next = null) {
 *   this.value = value;
 *   this.next = next;
 * }
 *
 *
 * 要求：
 * 尽量只遍历链表一次
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */

function ListNode(value, next = null) {
  this.value = value;
  this.next = next;
}

function removeNthFromEnd(head, n) {
  const dummy={
    value:0,
    next:head
  }
    let slow=dummy;
    let fast=dummy;
    for(let i=0;i<n;i++){
      fast=fast.next;
    }
    while (fast.next){
      slow=slow.next;
      fast=fast.next;
    }

    slow.next=slow.next.next;

    return head;
}