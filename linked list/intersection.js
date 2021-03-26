/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let currA = headA;
  let currB = headB;
  while (currA !== null) {
    while (currB !== null) {
      if ((currA.val = currB.vale)) {
        return currA.val;
      }
      currB = currB.next;
    }
    currA = currA.next;
  }
  return null;
};
