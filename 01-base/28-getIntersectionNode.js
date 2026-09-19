/**
 * 给定两个单链表的头节点 headA 和 headB，找出两个链表开始相交的节点。
 *
 * 如果两个链表不相交，返回 null。
 *
 * 注意：相交指的是两个链表共享同一个节点对象，不是节点值相同。
 *
 * 示例：
 *
 * 链表 A：4 → 1 ↘
 *                8 → 4 → 5
 * 链表 B：5 → 6 → 1 ↗
 *
 * 两个链表从值为 8 的节点开始，共享后面的全部节点，因此返回这个节点。
 *
 * return intersectionNode; // 值为 8 的节点对象
 *
 * 不相交的情况：
 *
 * 链表 A：1 → 2 → 3
 * 链表 B：4 → 5
 *
 * 返回：
 *
 * null
 *
 *
 *
 * 要求：
 *
 * 时间复杂度：O(m + n)
 * 空间复杂度：O(1)
 * 不能修改原链表
 *
 * 提示：使用两个指针。
 *
 * pointerA 走完 A 后，改为从 B 开始
 * pointerB 走完 B 后，改为从 A 开始
 *
 * 有交点：两个指针同时到达交点
 * - pointerA：a + c + b
 * - pointerB：b + c + a
 *
 * 无交点：两个指针同时变成 null
 */

function getIntersectionNode(headA, headB) {
    let pointerA=headA;
    let pointerB=headB;

    while(pointerA!==pointerB){
        pointerA=pointerA===null?headB:pointerA.next;
        pointerB=pointerB===null?headA:pointerB.next;
    }

    return pointerB;
}