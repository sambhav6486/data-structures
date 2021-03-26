/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  //value of current node will be equal to value of next node
  node.val = node.next.val;
  // current next of node will point to next of next node
  node.next = node.next.next;
};
