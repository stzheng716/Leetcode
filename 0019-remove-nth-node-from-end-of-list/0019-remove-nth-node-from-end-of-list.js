/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

    let firstNode = dummyNode = new ListNode(0)
    dummyNode.next = head;

    let secondNode = head

    for(let i = 0; i < n; i++){
        secondNode = secondNode.next
    }

    while(secondNode) {
        firstNode = firstNode.next;
        secondNode = secondNode.next 
    }

    firstNode.next = firstNode.next.next

    return dummyNode.next

};

//need to figure the node before the nth node

//use a dummynode = new ListNode(0)

//use two pointer
    //firstNode at the dummyNode position
    //secondNode nth space apart

//while secondNode
    //firstNode = firstNode.next
    //secondNode = secondNode.next

//firstNode.next = secondNode

//return dummyNode.next