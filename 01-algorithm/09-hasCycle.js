/**
 * 判断链表是否有环
 */

/**
 *
 * 时间复杂度：O(n)
 * 空间复杂：O(n)
 * @param list
 * @returns {boolean}
 */
function hasCycle(list){
    let head=list;
    const set=new Set()
    while(head){
        if(set.has(head.next)){
            return true
        }else{
            set.set(head)
            head=head.next;
        }
    }
    return false
}


/**
 * 快慢指针
 * 时间复杂度：O(n)
 * 空间复杂：O(1)
 * @param list
 * @returns {boolean}
 */
function hasCycle1(list){
    let slow=list;
    let fast=list;
    while(fast&&fast.next){
        slow=list.next;
        fast=fast.next.next
        if(slow===fast) return true
    }
    return false
}