/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const dummyNode = new ListNode()

    let newList = dummyNode;
    let carry = 0;

    while(l1 || l2 || carry) {
        let v1 = l1 ? l1.val : 0;
        let v2 = l2 ? l2.val : 0;
        
        let sum = v1 + v2 + carry;
        let value = sum % 10;
        carry = Math.floor(sum / 10)

        let newNode = new ListNode(value)
        newList.next = newNode
        //remember when using a new list to always iterate through it
        newList = newNode
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    return dummyNode.next
};

//create dummyNode
//create newList = dummyNode

//carry = 0/

//while (l1 or l2 or carry)
    //v1 = l1 ? l1.val : 0
    //v2 = l2 ? l2.val : 0

    //let sum = v1 + v2 + carry
    //value = sum % 10
    //carry = sum / 10

    //newNode = new ListNode(value)
    //newList.next = newNode
    //l1 = l1.next
    //l2 = l2.next

//return dummyNode.next