/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {

    let fast = head.next;
    let slow = head;

    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    if (!(slow && slow.next)) return;
    let second = slow.next;
    slow.next = null;
    let prev = null

    while(second) {
        let temp = second.next
        second.next = prev;
        prev = second;
        second = temp;
    }

    let first = head;
    second = prev;

    while(second){
        let firstTemp = first.next;
        let secondTemp = second.next;

        first.next = second
        second.next = firstTemp

        first = firstTemp;
        second = secondTemp
    }

};

//fine the middle with fast slow
//reverse the second half of the list

//merge the list
    //by using double temps