/**
 * Least Recently Used，即“淘汰最久没有使用的数据”。
 * 例如缓存容量为 2：
 *
 * put(1, "A"); // 缓存：[1]
 * put(2, "B"); // 缓存：[2, 1]，2 最近使用
 * get(1);      // 返回 A，缓存变成：[1, 2]
 * put(3, "C"); // 容量已满，淘汰最久未使用的 2
 *
 * 最终缓存：
 *
 * [3, 1]
 *
 * 要求：
 *
 * get：O(1)
 * put：O(1)
 *
 *
 * 使用Map + 双向链表
 *
 * 两种数据结构各负责一件事：
 *
 * 数据结构	作用
 * Map	    根据 key 在 O(1) 时间找到节点
 * 双向链表	在 O(1) 时间移动、插入和删除节点
 */
class ListNode {
  constructor(key = 0, value = 0) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {

  constructor(capacity) {
    this.map=new Map();
    this.capacity=capacity;
    this.head=new ListNode(-1,-1);
    this.tail=new ListNode(-1,-1);
    this.head.next=this.tail;
    this.tail.prev=this.head;
  }

  get(key) {
    const node = this.map.get(key);
    if(!node) return -1;
    this.moveNode(node);
    return node.value;
  }

  put(key, value) {
    let node=this.map.get(key);
    if(!node){
      node= new ListNode(key,value);
      this.map.set(key,node)

      if(this.map.size>this.capacity){
        this.removeTail();
      }

      node.next=this.head.next;
      node.prev=this.head;

      this.head.next.prev=node;
      this.head.next=node;
    }else{
       node.value=value;
       this.moveNode(node);
    }
  }

  removeTail(){
    let tail=this.tail.prev;
    this.tail.prev=tail.prev;
    tail.prev.next=this.tail;
    this.map.delete(tail.key)
  }

  moveNode(target){
    target.next.prev=target.prev;
    target.prev.next=target.next;


    target.prev=this.head;
    target.next=this.head.next;
    this.head.next.prev=target;
    this.head.next=target;
  }
}