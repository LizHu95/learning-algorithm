/**
 * 设计一个栈，支持以下操作，并且每个操作的时间复杂度都必须是 O(1)：
 *
 * push(value) // 将元素压入栈
 * pop()       // 删除栈顶元素
 * top()       // 返回栈顶元素
 * getMin()    // 返回栈中的最小元素
 *
 * 示例：
 *
 * const stack = new MinStack();
 *
 * stack.push(-2);
 * stack.push(0);
 * stack.push(-3);
 *
 * stack.getMin(); // -3
 *
 * stack.pop();
 *
 * stack.top();    // 0
 * stack.getMin(); // -2
 *
 * 所有操作都必须是 O(1)
 */
class MinStack {
   stack=[];
   minStack=[];
  constructor() {

  }

  push(value) {
    this.stack.push(value);
    this.minStack.push(this.minStack.length===0?value:Math.min(value,this.minStack[this.minStack.length-1]))
  }

  pop() {
    this.minStack.pop();
    return this.stack.pop();
  }

  top() {
    return this.stack.at(-1)
  }

  getMin() {
    return this.minStack.at(-1)
  }
}