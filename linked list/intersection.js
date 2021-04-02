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
var getIntersectionNode = function(headA, headB) {
    if(headA === null || headB === null){
        return null
    }
    let lengthA = 0
    let lengthB = 0
    let length  = 0
    let tempLength = 0
    let currA = headA
    let currB = headB
    while(currA){
        lengthA++
        currA = currA.next
    }
    while(currB){
        lengthB++
        currB = currB.next 
    }
 
    
       if(lengthA > lengthB ){
    tempLength = lengthA - lengthB
      for(let i=0; i<tempLength; i++){
          currA = currA.next
          length = lengthB
      }
    }
    
     if(lengthB > lengthA ){
    tempLength = lengthB - lengthA
      for(let i=0; i<tempLength; i++){
          currB = currB.next
          length = lengthA
      }
    }
    while(length >= 0){
        if(currA === currB){
            return currA
        }
        currA = currA.next
        currB = currB.next
        length--
    }
    return null