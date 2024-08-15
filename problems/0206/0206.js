/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let nextNode = null;
  let prev = null;
  while (head) {
    nextNode = head.next;
    head.next = prev;
    prev = head;
    head = nextNode;
  }
  return prev;
};
