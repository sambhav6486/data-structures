var reverseList = function (head) {
  reverseHead = null;
  curr = head;
  while (curr != null) {
    currTemp = curr.next;
    curr.next = reverseHead;
    reverseHead = curr;
    curr = currTemp;
  }
  return reverseHead;
};
